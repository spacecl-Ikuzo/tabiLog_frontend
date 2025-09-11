import { Button } from '../../components/ui/button';
import { useForm } from 'react-hook-form';
import { Form, FormField, FormItem, FormLabel, FormMessage } from '../../components/ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Input } from '../../components/ui/input';
import { axiosInstance } from '../../api/axios';
import { AxiosError } from 'axios';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';
const schema = z.object({
  mbrId: z.string().email('이메일 형식이 올바르지 않습니다.'),
  password: z.string().min(1, '비밀번호를 입력해주세요.'),
});

const Login = () => {
  const navigate = useNavigate();
  const form = useForm({
    defaultValues: {
      mbrId: '',
      password: '',
    },
    resolver: zodResolver(schema),
  });

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
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full">
      <div className="shadow-lg rounded-lg w-[500px]">
        <div className="flex justify-center rounded-t-lg flex-col items-center">
        </div>
        <div className="px-8 py-6 bg-white rounded-b-lg">
          <Form {...form}>
            <FormMessage />
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="mbrId"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>아이디</FormLabel>
                    <Input {...field} type="email" placeholder="이메일을 입력해주세요" autoComplete="username" />
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>비밀번호</FormLabel>
                    <Input
                      {...field}
                      type="password"
                      placeholder="비밀번호를 입력해주세요"
                      autoComplete="current-password"
                    />
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                disabled={!form.formState.isValid}
                type="submit"
                className="w-full px-4 py-2 mt-4 font-bold text-white rounded-md hover:bg-gray-800"
              >
                로그인
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Login;
