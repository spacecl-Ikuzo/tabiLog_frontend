import { useState, useRef, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Form, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Mail, Phone, Upload, Loader2 } from 'lucide-react';
import SideNavigation from '@/components/layout/side-navigation';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/layout/header';
import { axiosInstance } from '@/api/axios';
import { uploadImage } from '@/api/api';
import { toast } from 'sonner';
import { ProfileData } from '@/lib/type';
import { useUserStore } from '@/store';

// Zod 스키마 정의
const profileSchema = z.object({
  lastName: z.string().min(1, '姓を入力してください'),
  firstName: z.string().min(1, '名を入力してください'),
  nickname: z.string().min(1, 'ニックネームを入力してください'),
  email: z.string().email('有効なメールアドレスを入力してください'),
  phoneNumber: z.string().min(1, '電話番号を入力してください'),
});

type ProfileFormData = z.infer<typeof profileSchema>;

export default function Profile() {
  const navigate = useNavigate();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { setNickname } = useUserStore();

  const [profileData, setProfileData] = useState<ProfileData | null>(null);
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadError, setUploadError] = useState<string | null>(null);

  const form = useForm<ProfileFormData>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      lastName: profileData?.lastName || '',
      firstName: profileData?.firstName || '',
      nickname: profileData?.nickname || '',
      email: profileData?.email || '',
      phoneNumber: profileData?.phoneNumber || '',
    },
    mode: 'onChange', // 입력할 때마다 검사
    reValidateMode: 'onChange', // 값이 바뀔 때마다 다시 검사
  });

  useEffect(() => {
    fetchProfileImage();
  }, []);

  // profileData가 변경될 때 폼 값을 재설정
  useEffect(() => {
    if (profileData) {
      form.reset({
        lastName: profileData.lastName || '',
        firstName: profileData.firstName || '',
        nickname: profileData.nickname || '',
        email: profileData.email || '',
        phoneNumber: profileData.phoneNumber || '',
      });
    }
  }, [profileData, form]);

  const fetchProfileImage = async () => {
    const response = await axiosInstance.get('/api/profile');
    setProfileData((prev: ProfileData | null) => ({
      ...prev,
      id: response.data.data.id,
      userId: response.data.data.userId,
      email: response.data.data.email,
      firstName: response.data.data.firstName,
      lastName: response.data.data.lastName,
      nickname: response.data.data.nickname,
      phoneNumber: response.data.data.phoneNumber,
      gender: response.data.data.gender,
      profileImageUrl: response.data.data.profileImageUrl,
      createdAt: response.data.data.createdAt,
      updatedAt: response.data.data.updatedAt,
    }));
    console.log(response.data.data);
  };

  // 이미지 업로드
  const handleImageUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    // 파일 타입 검증
    if (!file.type.startsWith('image/')) {
      setUploadError('이미지 파일만 업로드 가능합니다.');
      return;
    }

    // 파일 크기 검증 (5MB 제한)
    if (file.size > 5 * 1024 * 1024) {
      setUploadError('파일 크기는 5MB 이하여야 합니다.');
      return;
    }

    setIsUploading(true);
    setUploadError(null);

    let imageUrl = profileImage ?? null;

    if (file) {
      const uploadResponse = await uploadImage(file);
      if (uploadResponse.success) {
        imageUrl = uploadResponse.url;
        toast.success('画像のアップロードに成功しました。', { position: 'top-center' });
      } else {
        toast.error('画像のアップロードに失敗しました。', { position: 'top-center' });
        setUploadError(uploadResponse.message || '이미지 업로드 실패');
        return;
      }
    }

    try {
      const requestBody = {
        profileImageUrl: imageUrl, // 이미지 URL
      };

      // 프로필 이미지 업데이트 API
      await axiosInstance.put('/api/profile/image', requestBody);
      setProfileImage(imageUrl);
    } catch (error) {
      console.error('프로필 이미지 업데이트 실패:', error);
      setUploadError('이미지 업로드에 실패했습니다. 다시 시도해주세요.');
    } finally {
      setIsUploading(false);
    }
  };

  // 이미지 업로드 버튼 클릭 핸들러
  const handleImageClick = () => {
    fileInputRef.current?.click();
  };

  //프로필 업데이트
  const onSubmit = async (data: ProfileFormData) => {
    try {
      const requestBody = {
        lastName: data.lastName,
        firstName: data.firstName,
        nickname: data.nickname,
        email: data.email,
        phoneNumber: data.phoneNumber,
      };
      await axiosInstance.put('/api/profile', requestBody);
      toast.success('プロフィールが更新されました。', { position: 'top-center' });

      // 프로필 데이터 다시 가져오기
      await fetchProfileImage();
      setNickname(data.nickname);

      // 사이드 네비게이션의 사용자 정보도 갱신하도록 이벤트 발생
      window.dispatchEvent(new CustomEvent('profileUpdated'));
    } catch (error) {
      console.error('Profile update failed:', error);
      toast.error('プロフィールの更新に失敗しました。', { position: 'top-center' });
    }
  };

  return (
    <div className="min-h-screen">
      {/* 헤더 */}
      <Header />
      <div className="flex">
        {/* 사이드 네비게이션 (데스크톱만) */}
        <SideNavigation selectedNav="profile" />

        {/* 메인 컨텐츠 */}
        <div className="flex-1 lg:ml-0">
          <h2 className="flex justify-center items-center pt-10 text-3xl font-bold text-center mb-8 lg:text-left">
            プロフィール管理
          </h2>
          {/* 프로필 폼 */}
          <div className="flex flex-col items-center p-4 lg:p-8">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="w-3/4 lg:w-1/2">
                {/* 프로필 이미지 섹션 */}
                <div className="flex flex-col items-center mb-8">
                  <div className="relative">
                    <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mb-4 overflow-hidden">
                      {profileImage ? (
                        <img
                          src={import.meta.env.VITE_API_URL + profileImage}
                          alt="프로필 이미지"
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <>
                          {profileData?.profileImageUrl ? (
                            <img
                              src={import.meta.env.VITE_API_URL + profileData.profileImageUrl}
                              alt="프로필 이미지"
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <div className="w-full h-full bg-gradient-to-br from-gray-400 to-gray-600 rounded-full flex items-center justify-center text-white font-bold">
                              {profileData?.nickname?.slice(0, 2)}
                            </div>
                          )}
                        </>
                      )}
                    </div>
                    <button
                      type="button"
                      onClick={handleImageClick}
                      disabled={isUploading}
                      className="absolute bottom-0 right-0 bg-brand-orange text-white p-2 rounded-full hover:bg-orange-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isUploading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Upload className="w-4 h-4" />}
                    </button>
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-gray-400">{profileData?.nickname}</p>
                    {uploadError && <p className="text-sm text-red-500 mt-2">{uploadError}</p>}
                  </div>
                  {/* 숨겨진 파일 입력 */}
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                </div>

                {/* 폼 필드들 */}
                <div className="space-y-6">
                  {/* 성과 이름 */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="lastName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-semibold">姓</FormLabel>
                          <Input
                            {...field}
                            placeholder="例. 太郎"
                            className="border-gray-300 focus:border-brand-orange focus:ring-brand-orange"
                          />
                          <div className="lg:h-5">
                            <FormMessage />
                          </div>
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-semibold">名</FormLabel>
                          <Input
                            {...field}
                            placeholder="例. 山田"
                            className="border-gray-300 focus:border-brand-orange focus:ring-brand-orange"
                          />
                          <div className="lg:h-5">
                            <FormMessage />
                          </div>
                        </FormItem>
                      )}
                    />
                  </div>

                  {/* 닉네임 */}
                  <FormField
                    control={form.control}
                    name="nickname"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-semibold">ニックネーム</FormLabel>
                        <Input
                          {...field}
                          placeholder="例. たびっこ123"
                          className="border-gray-300 focus:border-brand-orange focus:ring-brand-orange"
                        />
                        <div className="lg:h-5">
                          <FormMessage />
                        </div>
                      </FormItem>
                    )}
                  />

                  {/* 이메일과 전화번호 - 데스크탑에서 2x2 그리드 */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    {/* 이메일 */}
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-semibold">E-mail</FormLabel>
                          <div className="relative">
                            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <Input
                              {...field}
                              type="email"
                              className="pl-10 border-gray-300 focus:border-brand-orange focus:ring-brand-orange"
                            />
                          </div>
                          <div className="lg:h-5">
                            <FormMessage />
                          </div>
                        </FormItem>
                      )}
                    />

                    {/* 전화번호 */}
                    <FormField
                      control={form.control}
                      name="phoneNumber"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-semibold">電話番号</FormLabel>
                          <div className="relative">
                            <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <Input
                              {...field}
                              type="tel"
                              placeholder="-を入力しないでください"
                              className="pl-10 border-gray-300 focus:border-brand-orange focus:ring-brand-orange"
                            />
                          </div>
                          <div className="lg:h-5">
                            <FormMessage />
                          </div>
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
                <div className="flex justify-end pt-5">
                  <button
                    type="button"
                    className="text-sm text-gray-400 hover:text-gray-600 cursor-pointer"
                    onClick={() => navigate('/delete-account')}
                  >
                    退会する
                  </button>
                </div>

                {/* 버튼들 */}
                <div className="flex flex-row gap-4 mt-8">
                  <div className="flex flex-row gap-4 flex-1 justify-center">
                    <Button
                      type="button"
                      variant="outline"
                      className="w-auto px-8 border-gray-300 text-gray-700 hover:bg-gray-50 cursor-pointer"
                      onClick={() => navigate(-1)}
                    >
                      キャンセル
                    </Button>
                    <Button
                      type="submit"
                      disabled={!form.formState.isValid}
                      className="w-auto px-8 bg-brand-orange hover:bg-orange-600 text-white disabled:opacity-50 cursor-pointer"
                    >
                      {form.formState.isSubmitting ? '保存中...' : '変更を保存'}
                    </Button>
                  </div>
                </div>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}
