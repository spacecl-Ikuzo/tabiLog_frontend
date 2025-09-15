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

const schema = z.object({
  id: z.string().min(1, 'IDを入力してください'),
  password: z.string().min(1, 'パスワードを入力してください'),
});
type LoginReq = z.infer<typeof schema>;

export default function Login() {
  const navigate = useNavigate();
  const { setUserId, setNickname, setToken } = useUserStore();

  const form = useForm<LoginReq>({
    defaultValues: { id: '', password: '' },
    resolver: zodResolver(schema),
    mode: 'onChange',
  });

  const onSubmit = async (req: LoginReq) => {
    const response = await axiosInstance.post('/api/auth/signin', req);
    const data = response.data.data;

    // zustand 스토어에 유저 정보 저장
    setUserId(data.id);
    setNickname(data?.nickname ?? '');
    setToken(data?.accessToken ?? '');

    navigate('/');
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
              <FormField
                control={form.control}
                name="id"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-800 font-medium">ID</FormLabel>
                    <Input
                      {...field}
                      type="id"
                      placeholder=""
                      className="h-12 bg-white border-gray-300 focus:border-orange-500 focus:ring-orange-500"
                    />
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex items-center justify-between">
                      <FormLabel className="text-gray-800 font-medium">Password</FormLabel>
                      <Link
                        to="/forgot-password"
                        className="text-xs text-gray-500 hover:text-orange-500 transition-colors"
                      >
                        パスワードをお忘れですか？
                      </Link>
                    </div>
                    <Input
                      {...field}
                      type="password"
                      placeholder=""
                      autoComplete="current-password"
                      className="h-12 bg-white border-gray-300 focus:border-orange-500 focus:ring-orange-500"
                    />
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                disabled={!form.formState.isValid || form.formState.isSubmitting}
                className="w-full h-12 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-colors mt-6"
              >
                ログイン
              </Button>
            </form>
          </Form>

          <div className="text-sm text-gray-600 mt-6 text-center">
            アカウントをお持ちでないですか？{' '}
            <Link to="/register" className="text-orange-500 hover:text-orange-600 font-medium transition-colors">
              新規登録
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
