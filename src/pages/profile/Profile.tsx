import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Form, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { User, Mail, Phone, Key, Eye, EyeOff, Edit3 } from 'lucide-react';
import SideNavigation from '@/components/layout/side-navigation';
import { useNavigate } from 'react-router-dom';

// Zod 스키마 정의
const profileSchema = z
  .object({
    lastName: z.string().min(1, '姓を入力してください'),
    firstName: z.string().min(1, '名を入力してください'),
    nickname: z.string().min(1, 'ニックネームを入力してください'),
    email: z.string().email('有効なメールアドレスを入力してください'),
    phoneNumber: z.string().min(1, '電話番号を入力してください'),
    password: z.string().min(1, '現在のパスワードを入力してください'),
    newPassword: z.string().min(8, '新しいパスワードは8文字以上で入力してください').optional(),
    confirmPassword: z.string().optional(),
  })
  .refine(
    (data) => {
      if (data.newPassword && data.newPassword !== data.confirmPassword) {
        return false;
      }
      return true;
    },
    {
      message: '新しいパスワードと確認パスワードが一致しません',
      path: ['confirmPassword'],
    },
  );

type ProfileFormData = z.infer<typeof profileSchema>;

export default function Profile() {
  const navigate = useNavigate();

  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const form = useForm<ProfileFormData>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      lastName: '',
      firstName: '',
      nickname: '',
      email: '',
      phoneNumber: '',
      password: '',
      newPassword: '',
      confirmPassword: '',
    },
    mode: 'onChange', // 입력할 때마다 검사
    reValidateMode: 'onChange', // 값이 바뀔 때마다 다시 검사
  });

  const onSubmit = async (data: ProfileFormData) => {
    try {
      console.log('Form data:', data);
      // TODO: API 호출로 프로필 업데이트
      // await updateProfile(data);
    } catch (error) {
      console.error('Profile update failed:', error);
    }
  };

  return (
    <div className="min-h-screen">
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
                    <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mb-4">
                      <User className="w-12 h-12 text-gray-400" />
                    </div>
                    <button className="absolute bottom-0 right-0 bg-brand-orange text-white p-2 rounded-full hover:bg-orange-600 transition-colors">
                      <Edit3 className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-gray-600 mb-1">名前(姓名)</p>
                    <p className="text-sm text-gray-400">たびっこ123</p>
                  </div>
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

                  {/* 현재 비밀번호와 새 비밀번호 - 데스크탑에서 2x2 그리드 */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    {/* 현재 비밀번호 */}
                    <FormField
                      control={form.control}
                      name="password"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-semibold">現在のパスワード</FormLabel>
                          <div className="relative">
                            <Key className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <Input
                              {...field}
                              type={showCurrentPassword ? 'text' : 'password'}
                              className="pl-10 pr-10 border-gray-300 focus:border-brand-orange focus:ring-brand-orange"
                            />
                            <button
                              type="button"
                              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                              onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                            >
                              {showCurrentPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                            </button>
                          </div>
                          <div className="lg:h-5">
                            <FormMessage />
                          </div>
                        </FormItem>
                      )}
                    />

                    {/* 새 비밀번호 */}
                    <FormField
                      control={form.control}
                      name="newPassword"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-semibold">新しいパスワード</FormLabel>
                          <div className="relative">
                            <Key className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <Input
                              {...field}
                              type={showNewPassword ? 'text' : 'password'}
                              className="pl-10 pr-10 border-gray-300 focus:border-brand-orange focus:ring-brand-orange"
                            />
                            <button
                              type="button"
                              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                              onClick={() => setShowNewPassword(!showNewPassword)}
                            >
                              {showNewPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                            </button>
                          </div>
                          <div className="lg:h-5">
                            <FormMessage />
                          </div>
                        </FormItem>
                      )}
                    />
                  </div>

                  {/* 새 비밀번호 확인 */}
                  <FormField
                    control={form.control}
                    name="confirmPassword"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-semibold">新しいパスワード (確認)</FormLabel>
                        <div className="relative">
                          <Key className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                          <Input
                            {...field}
                            type={showConfirmPassword ? 'text' : 'password'}
                            className="pl-10 pr-10 border-gray-300 focus:border-brand-orange focus:ring-brand-orange"
                          />
                          <button
                            type="button"
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                          >
                            {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                          </button>
                        </div>
                        <div className="lg:h-5">
                          <FormMessage />
                        </div>
                      </FormItem>
                    )}
                  />
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
                    >
                      キャンセル
                    </Button>
                    <Button
                      type="submit"
                      disabled={form.formState.isSubmitting}
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
