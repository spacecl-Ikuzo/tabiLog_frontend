import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Trash2, ArrowLeft, Eye, EyeOff, Key } from 'lucide-react';
import { useUserStore } from '@/store';
import { deleteAccount } from '@/api/api';

// Zod 스키마 정의
const deleteAccountSchema = z
  .object({
    reason: z.string().min(1, '退会理由を選択してください'),
    otherReason: z.string().optional(),
    password: z.string().min(1, 'パスワードを入力してください'),
  })
  .refine(
    (data) => {
      if (data.reason === 'other' && (!data.otherReason || data.otherReason.trim() === '')) {
        return false;
      }
      return true;
    },
    {
      message: 'その他の理由を入力してください',
      path: ['otherReason'],
    },
  );

type DeleteAccountFormData = z.infer<typeof deleteAccountSchema>;

export default function DeleteAccount() {
  const navigate = useNavigate();
  const { removeUserData } = useUserStore();
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  // React Hook Form 설정
  const form = useForm<DeleteAccountFormData>({
    resolver: zodResolver(deleteAccountSchema),
    defaultValues: {
      reason: '',
      otherReason: '',
      password: '',
    },
    mode: 'onChange',
    reValidateMode: 'onChange',
  });

  // 탈퇴 이유 옵션
  const reasonOptions = [
    { value: 'low_usage', label: '利用頻度が少ない' },
    { value: 'difficult_ui', label: '機能が使いにくい' },
    { value: 'new_account', label: '新しいアカウントを作成したい' },
    { value: 'too_many_notifications', label: '通知やメールが多すぎるため' },
    { value: 'other', label: 'その他 (自由記入)' },
  ];

  // 계정 삭제 처리
  const handleDeleteAccount = async (data: DeleteAccountFormData) => {
    setIsLoading(true);

    try {
      console.log('Deleting account with data:', {
        reason: data.reason,
        otherReason: data.otherReason,
        password: '***',
      });

      // 실제 API 호출로 계정 삭제 처리
      const response = await deleteAccount({
        reason: data.reason,
        otherReason: data.otherReason,
        password: data.password,
      });

      console.log('Account deletion response:', response);

      // 성공 메시지
      toast.success('アカウントが正常に削除されました');

      // 사용자 데이터 제거 (localStorage 포함)
      removeUserData();

      // 탈퇴 완료 화면으로 이동
      navigate('/delete-account/complete', { replace: true });
    } catch (error) {
      console.error('Account deletion failed:', error);
      form.setError('password', {
        type: 'manual',
        message: 'パスワードが正しくありません',
      });
      toast.error('アカウント削除中にエラーが発生しました');
    } finally {
      setIsLoading(false);
    }
  };

  // 뒤로 가기
  const handleGoBack = () => {
    navigate('/profile');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* 메인 컨텐츠 */}
      <main className="px-20 py-6 lg:px-20 lg:py-12">
        <div className="max-w-2xl mx-auto">
          {/* 뒤로 가기 버튼 */}
          <div className="mb-6 lg:mb-8">
            <Button
              variant="ghost"
              onClick={handleGoBack}
              className="text-gray-600 hover:text-gray-800 p-0 h-auto font-normal"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              プロフィールに戻る
            </Button>
          </div>

          {/* 페이지 제목 */}
          <div className="text-center mb-8 lg:mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Trash2 className="w-8 h-8 text-brand-orange lg:w-10 lg:h-10" />
              <h1 className="text-2xl lg:text-3xl font-bold text-brand-orange">アカウント削除</h1>
            </div>
          </div>

          {/* Form */}
          <Form {...form}>
            <form onSubmit={form.handleSubmit(handleDeleteAccount)} className="space-y-8 lg:space-y-10">
              {/* 탈퇴 이유 선택 */}
              <FormField
                control={form.control}
                name="reason"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-lg lg:text-xl font-semibold text-gray-900">
                      退会理由を選択してください
                    </FormLabel>
                    <FormControl>
                      <div className="space-y-3 lg:space-y-4 mt-4 lg:mt-6">
                        {reasonOptions.map((option) => (
                          <div key={option.value} className="flex items-center space-x-3">
                            <input
                              type="radio"
                              id={option.value}
                              value={option.value}
                              checked={field.value === option.value}
                              onChange={(e) => field.onChange(e.target.value)}
                              className="w-4 h-4 text-brand-orange border-gray-300 focus:ring-brand-orange focus:ring-2"
                            />
                            <label
                              htmlFor={option.value}
                              className="text-sm lg:text-base text-gray-700 cursor-pointer flex-1 p-3 lg:p-4 rounded-lg hover:bg-gray-50 transition-colors"
                            >
                              {option.label}
                            </label>
                          </div>
                        ))}
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* 그 외 이유 입력 */}
              <FormField
                control={form.control}
                name="otherReason"
                render={({ field }) => (
                  <FormItem className={form.watch('reason') === 'other' ? 'block' : 'hidden'}>
                    <FormLabel className="text-sm lg:text-base font-medium text-gray-700">その他</FormLabel>
                    <FormControl>
                      <Input type="text" placeholder="自由入力*" {...field} className="w-full" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* 패스워드 입력 */}
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <div className="space-y-4">
                      <p className="text-sm lg:text-base text-gray-700">
                        アカウントを削除するには現在のパスワードを入力してください。
                      </p>
                      <FormControl>
                        <div className="relative">
                          <Key className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                          <Input
                            type={showPassword ? 'text' : 'password'}
                            placeholder="パスワードを入力してください*"
                            {...field}
                            className="pl-10 pr-10 w-full border-gray-300 focus:border-brand-orange focus:ring-brand-orange"
                          />
                          <button
                            type="button"
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                            onClick={() => setShowPassword(!showPassword)}
                          >
                            {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                          </button>
                        </div>
                      </FormControl>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* 경고 메시지 */}
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 lg:p-6">
                <p className="text-orange-800 text-sm lg:text-base font-medium text-center">
                  アカウントを削除すると、すべての情報が完全に削除され、復元することはできません。
                </p>
              </div>

              {/* 삭제 버튼 */}
              <div className="text-center">
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-auto px-12 py-3 bg-brand-orange hover:bg-brand-orange/90 text-white font-semibold text-lg rounded-lg h-14"
                >
                  {isLoading ? (
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      処理中...
                    </div>
                  ) : (
                    'アカウント削除'
                  )}
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </main>
    </div>
  );
}
