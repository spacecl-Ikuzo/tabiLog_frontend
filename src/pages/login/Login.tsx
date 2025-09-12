// src/pages/login/Login.tsx
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { axiosInstance } from "@/api/axios";
import { Menu } from "lucide-react";

const schema = z.object({
  mbrId: z.string().email(),
  password: z.string().min(1),
});
type LoginReq = z.infer<typeof schema>;

export default function Login() {
  const navigate = useNavigate();
  const form = useForm<LoginReq>({
    defaultValues: { mbrId: "", password: "" },
    resolver: zodResolver(schema),
    mode: "onChange",
  });

<<<<<<< HEAD
  const onSubmit = async (req: z.infer<typeof schema>) => {
    const formData = {
      username: req.mbrId.trim(), // backend expects 'username' field
      password: req.password.trim(), // trim whitespace
    };

    console.log('=== FRONTEND LOGIN DEBUG ===');
    console.log('Username:', formData.username);
    console.log('Password length:', formData.password.length);
    console.log('Password (first 5 chars):', formData.password.substring(0, 5));

    try {
      const response = await axiosInstance.post('/api/auth/signin', formData); // backend endpoint is '/api/auth/signin'
      console.log('Login response:', response.data);
      form.reset();
      toast.success('로그인 성공');
      navigate('/');
    } catch (error) {
      console.error('Login error:', error);
      if (error instanceof AxiosError) {
        form.setError('mbrId', { type: 'manual' });
        form.setError('password', { type: 'manual', message: error.response?.data.message });
      }
    }
=======
  const onSubmit = async (req: LoginReq) => {
    const { data } = await axiosInstance.post("/auth/login", req);
    localStorage.setItem("accessToken", data?.accessToken ?? "");
    navigate("/");
>>>>>>> 6dd9063db397946cdb7165fcedeeb8e7863fe210
  };

  return (
    <div className="min-h-screen w-full bg-white flex flex-col">
      {/* 모바일 전용 헤더 */}
      <header className="flex items-center justify-between px-6 py-4 lg:hidden">
        <span className="text-brand font-bold text-lg">タビログ</span>
        <Menu className="h-6 w-6 text-neutral-800" />
      </header>

      {/* 본문: 데스크탑은 수직/수평 중앙, 모바일은 상단 여백 후 카드 */}
      <main className="flex-1 flex items-start lg:items-center justify-center">
        <div className="w-full max-w-[460px] px-6">
          {/* 타이틀: 모바일/데스크탑 크기 차등 */}
          <h1 className="text-center text-2xl lg:text-3xl font-bold text-brand mt-8 lg:mt-0 mb-8">
            ログイン
          </h1>

          <div className="rounded-lg border border-neutral-200/70 shadow-sm p-6">
            <p className="text-sm text-neutral-600 mb-5">メールアドレスでログインしてください</p>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="mbrId"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-neutral-800">Email</FormLabel>
                      <Input
                        {...field}
                        type="email"
                        placeholder="me@example.com"
                        autoComplete="username"
                        className="focus-visible:ring-2 focus-visible:ring-brand/40"
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
                        <FormLabel className="text-neutral-800">Password</FormLabel>
                        <Link to="/forgot-password" className="text-xs text-brand hover:underline">
                          パスワードをお忘れですか？
                        </Link>
                      </div>
                      <Input
                        {...field}
                        type="password"
                        autoComplete="current-password"
                        className="focus-visible:ring-2 focus-visible:ring-brand/40"
                      />
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  disabled={!form.formState.isValid || form.formState.isSubmitting}
                  className="w-full bg-brand hover:bg-brand/90 text-white font-semibold"
                >
                  ログイン
                </Button>
              </form>
            </Form>

            <div className="text-xs text-neutral-600 mt-4 text-center">
              アカウントをお持ちでないですか？{" "}
              <Link to="/register" className="text-brand hover:underline">
                新規登録
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
