import { Button } from '../../components/ui/button';
import { useForm } from 'react-hook-form';
import { Form, FormField, FormItem, FormLabel, FormMessage, FormControl } from '../../components/ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Input } from '../../components/ui/input';
import { axiosInstance } from '../../api/axios';
import { AxiosError } from 'axios';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';
const schema = z.object({
  mbrId: z.string().min(1, '이메일을 입력해주세요.').email('이메일 형식이 올바르지 않습니다.'),
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
    console.log('로그인 시도:', req);
    
    const formData = {
      username: req.mbrId,  // 백엔드에서 username 필드를 기대함
      password: req.password,
    };

    try {
      console.log('API 요청 데이터:', formData);
      const response = await axiosInstance.post('/api/auth/signin', formData);
      console.log('로그인 응답:', response.data);
      
      // 토큰과 사용자 정보 저장
      if (response.data.accessToken) {
        localStorage.setItem('accessToken', response.data.accessToken);
        localStorage.setItem('refreshToken', response.data.refreshToken);
        localStorage.setItem('userEmail', response.data.email);
      }
      
      form.reset();
      toast.success('로그인 성공');
      navigate('/dashboard');
    } catch (error) {
      console.error('로그인 오류:', error);
      if (error instanceof AxiosError) {
        const errorData = error.response?.data;
        let errorMessage = '로그인에 실패했습니다.';
        
        if (errorData?.message) {
          errorMessage = errorData.message;
        } else if (errorData?.error) {
          errorMessage = errorData.error;
        }
        
        toast.error(errorMessage);
        form.setError('mbrId', { type: 'manual' });
        form.setError('password', { type: 'manual', message: errorMessage });
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
                    <FormControl>
                      <Input {...field} type="email" placeholder="이메일을 입력해주세요" autoComplete="username" />
                    </FormControl>
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
                    <FormControl>
                      <Input
                        {...field}
                        type="password"
                        placeholder="비밀번호를 입력해주세요"
                        autoComplete="current-password"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                disabled={form.formState.isSubmitting}
                type="submit"
                className="w-full px-4 py-2 mt-4 font-bold text-white rounded-md hover:bg-gray-800"
              >
                {form.formState.isSubmitting ? '로그인 중...' : '로그인'}
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Login;
