// src/pages/login/Login.tsx
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { axiosInstance } from '@/api/axios';
import useUserStore from '@/store';
import { AxiosError } from 'axios';
import { toast } from 'sonner';

const schema = z.object({
  id: z.string().min(1, 'IDを入力してください'),
  password: z.string().min(1, 'パスワードを入力してください'),
});
type LoginReq = z.infer<typeof schema>;

export default function Login() {
  const navigate = useNavigate();
  const { setUserId, setNickname, setToken, setEmail, setTokenExp } = useUserStore();

  const form = useForm<LoginReq>({
    defaultValues: { id: '', password: '' },
    resolver: zodResolver(schema),
    mode: 'onChange',
  });

  const onSubmit = async (req: LoginReq) => {
    try {
      // 백엔드가 요구하는 키는 id/password
      const payload = { id: req.id.trim(), password: req.password };
      const response = await axiosInstance.post('/api/auth/signin', payload);
      const data = response.data;

      // 서버 응답(JwtResponse): accessToken, email, userId, nickname, expiresAt
      if (data) {
        setUserId(data.userId || '');
        setEmail(data.email || '');
        setNickname(data.nickname || '');
        setToken(data.accessToken || '');
        if (data.expiresAt) setTokenExp(data.expiresAt);

        navigate('/spots'); // 성공 시 이동
      }
    } catch (error) {
      // 팝업은 고정 문구
      toast.error('ログインに失敗しました');

      if (error instanceof AxiosError) {
        const status = error.response?.status;
        const code = (error.response?.data as any)?.error;
        const details = (error.response?.data as any)?.details;

        // 401 → 비밀번호 밑에 에러 표시 (AUTH_ERROR/INVALID_CREDENTIALS 모두 대응)
        if (status === 401 && (code === 'AUTH_ERROR' || code === 'INVALID_CREDENTIALS')) {
          form.setError('password', { message: 'アイディまたはパスワードが正しくありません。' });
          return;
        }

        // 400 VALIDATION_ERROR → details 맵핑
        if (status === 400 && details) {
          if (details.id) form.setError('id', { message: String(details.id) });
          if (details.username) form.setError('id', { message: String(details.username) });
          if (details.password) form.setError('password', { message: String(details.password) });
          return;
        }
      }
      // 나머지는 팝업만 (위에서 이미 토스트 출력)
    }
  };

  return (
    <div className="min-h-screen w-full bg-white flex items-center justify-center p-4 lg:p-0">
      <div className="w-full max-w-md">
        {/* 타이틀 */}
        <h1 className="text-center text-2xl lg:text-3xl font-bold text-orange-500 mb-8 lg:mb-12">ログイン</h1>

        {/* 로그인 폼 카드 */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 lg:p-8">
          <p className="text-sm text-gray-600 mb-6">メールアドレスでログインしてください</p>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
              {/* ID */}
              <FormField
                control={form.control}
                name="id"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex items-center justify-between">
                      <FormLabel className="text-gray-800 font-medium">ID</FormLabel>
                    </div>
                    <Input
                      {...field}
                      type="text"
                      autoComplete="username"
                      placeholder=""
                      className="h-12 bg-white border-gray-300 focus:border-orange-500 focus:ring-orange-500"
                      tabIndex={1} // 1) ID
                    />
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Password */}
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-800 font-medium">Password</FormLabel>
                    <Input
                      {...field}
                      type="password"
                      placeholder=""
                      autoComplete="current-password"
                      className="h-12 bg-white border-gray-300 focus:border-orange-500 focus:ring-orange-500"
                      tabIndex={2} // 2) PW
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                          e.preventDefault();
                          form.handleSubmit(onSubmit)();
                        }
                      }}
                    />
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Link
                to="/find-account"
                className="flex justify-end text-xs mb-0 text-gray-500 hover:text-orange-500 transition-colors"
                tabIndex={-1} // 링크는 탭에서 제외
              >
                ID/パスワードをお忘れですか？
              </Link>

              {/* Submit */}
              <Button
                type="submit"
                disabled={!form.formState.isValid || form.formState.isSubmitting}
                className="w-full h-12 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-colors mt-6"
                tabIndex={3} // 3) 로그인 버튼
              >
                ログイン
              </Button>
            </form>
          </Form>

          <div className="text-sm text-gray-600 mt-6 text-center">
            アカウントをお持ちでないですか？{' '}
            <Link
              to="/register"
              className="text-orange-500 hover:text-orange-600 font-medium transition-colors"
              tabIndex={-1} // 링크는 탭에서 제외
            >
              新規登録
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
