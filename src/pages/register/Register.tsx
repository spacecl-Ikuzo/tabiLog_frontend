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
import Header from '../../components/layout/header';

// 유효성 검사 스키마 정의
const schema = z.object({
  id: z
    .string()
    .min(1, 'IDを入力してください')
    .regex(/^[a-zA-Z0-9]+$/, '半角英数字で入力してください'),
  email: z
    .string()
    .min(1, 'メールアドレスを入力してください')
    .email('有効なメールアドレス形式ではありません')
    .regex(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,}$/, '半角英数字で入力してください'),
  password: z
    .string()
    .min(1, 'パスワードを入力してください')
    .regex(/^[a-zA-Z0-9]+$/, '半角英数字で入力してください'),
  lastName: z.string().min(1, '姓を入力してください'),
  firstName: z.string().min(1, '名を入力してください'),
  nickname: z.string().min(1, 'ハンドルネームを入力してください'),
  phoneNumber: z
    .string()
    .min(1, '電話番号を入力してください')
    .regex(/^[0-9-]+$/, '半角英数字で入力してください'),
  gender: z.enum(['male', 'female'], {
    required_error: '性別を選択してください',
  }),
  privacyPolicy: z.boolean().refine((val) => val === true, {
    message: 'プライバシーポリシーに同意してください',
  }),
  travelDataCollection: z.boolean().optional(),
});

type FormData = z.infer<typeof schema>;

const Register = () => {
  const navigate = useNavigate();

  const form = useForm<FormData>({
    defaultValues: {
      id: '',
      email: '',
      password: '',
      lastName: '',
      firstName: '',
      nickname: '',
      phoneNumber: '',
      gender: undefined,
      privacyPolicy: false,
      travelDataCollection: false,
    },
    resolver: zodResolver(schema),
    mode: 'onChange', // 입력할 때마다 검사
    reValidateMode: 'onChange', // 값이 바뀔 때마다 다시 검사
  });

  const onSubmit = async (data: FormData) => {
    try {
      const requestBody = {
        userId: data.id,
        email: data.email,
        password: data.password,
        lastName: data.lastName,
        firstName: data.firstName,
        nickname: data.nickname,
        phoneNumber: data.phoneNumber,
        gender: data.gender,
        privacyPolicy: data.privacyPolicy,
        travelDataCollection: data.travelDataCollection,
      };

      await axiosInstance.post('/auth/register', requestBody);
      form.reset();
      toast.success('会員登録が完了しました');
      navigate('/login');
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.error(error.response?.data.message || '会員登録に失敗しました');
      }
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* 헤더 */}
      <Header />

      {/* 메인 콘텐츠 */}
      <main className="flex flex-1 justify-center items-center p-4 lg:p-6">
        <div className="p-4 w-full max-w-2xl lg:p-8">
          <h2 className="mb-4 text-xl font-bold text-center lg:text-2xl text-brand-orange lg:mb-6">新規会員登録</h2>
          <div className="mb-4 text-center lg:mb-6">
            <p className="mb-1 text-xs text-gray-600 lg:text-sm">※「*」は必須項目となります。</p>
            <p className="text-xs text-gray-600 lg:text-sm">
              ※個人情報保護方針は<span className="text-blue-600 underline cursor-pointer">こちら</span>
              をご確認ください。
            </p>
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 lg:space-y-6">
              <div className="space-y-4 lg:space-y-6">
                <h3 className="pb-2 text-base font-semibold border-orange-200 lg:text-lg text-brand-orange">
                  お客様情報登録
                </h3>

                {/* ID 필드 */}
                <FormField
                  control={form.control}
                  name="id"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium">ID</FormLabel>
                      <Input {...field} placeholder="ID" className="mt-1" />
                      <p className="mt-1 text-xs text-gray-500">※半角英数字でご入力ください</p>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* 이메일 필드 */}
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium">メールアドレス</FormLabel>
                      <div className="relative">
                        <Input {...field} type="email" placeholder="メールアドレス" className="pl-10 mt-1" />
                        <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                          <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                            />
                          </svg>
                        </div>
                      </div>
                      <p className="mt-1 text-xs text-gray-500">※半角英数字でご入力ください</p>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* 패스워드 필드 */}
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium">パスワード</FormLabel>
                      <div className="relative">
                        <Input {...field} type="password" placeholder="パスワード" className="pl-10 mt-1" />
                        <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                          <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                            />
                          </svg>
                        </div>
                      </div>
                      <p className="mt-1 text-xs text-gray-500">※半角英数字でご入力ください</p>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* 성명 필드 */}
                <div className="grid grid-cols-1 gap-3 lg:grid-cols-2 lg:gap-4">
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium">姓</FormLabel>
                        <Input {...field} placeholder="姓" className="mt-1" />
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium">名</FormLabel>
                        <Input {...field} placeholder="名" className="mt-1" />
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* 닉네임 필드 */}
                <div className="grid grid-cols-1 gap-3 lg:grid-cols-2 lg:gap-4">
                  <FormField
                    control={form.control}
                    name="nickname"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium">ハンドルネーム</FormLabel>
                        <Input {...field} placeholder="ハンドルネーム" className="mt-1" />
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* 전화번호 필드 */}
                <FormField
                  control={form.control}
                  name="phoneNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium">電話番号</FormLabel>
                      <div className="relative">
                        <Input {...field} placeholder="電話番号" className="pl-10 mt-1" />
                        <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                          <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                            />
                          </svg>
                        </div>
                      </div>
                      <p className="mt-1 text-xs text-gray-500">※半角英数字でご入力ください</p>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* 성별 필드 */}
                <FormField
                  control={form.control}
                  name="gender"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium">性別</FormLabel>
                      <div className="flex flex-col mt-2 space-y-2 lg:flex-row lg:space-x-6 lg:space-y-0">
                        <label className="flex items-center space-x-2 cursor-pointer">
                          <input
                            type="radio"
                            value="male"
                            checked={field.value === 'male'}
                            onChange={() => field.onChange('male')}
                            className="w-4 h-4 border-gray-300 text-brand-orange focus:ring-brand-orange"
                          />
                          <span className="text-sm">男性</span>
                        </label>
                        <label className="flex items-center space-x-2 cursor-pointer">
                          <input
                            type="radio"
                            value="female"
                            checked={field.value === 'female'}
                            onChange={() => field.onChange('female')}
                            className="w-4 h-4 border-gray-300 text-brand-orange focus:ring-brand-orange"
                          />
                          <span className="text-sm">女性</span>
                        </label>
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* 약관 동의 체크박스 */}
                <div className="pt-4 space-y-4 border-t border-gray-200 lg:pt-6">
                  <h3 className="text-base font-semibold text-brand-orange lg:text-lg">約款同意</h3>

                  {/* 개인정보처리방침 동의 */}
                  <FormField
                    control={form.control}
                    name="privacyPolicy"
                    render={({ field }) => (
                      <FormItem>
                        <div className="flex items-start space-x-3">
                          <div className="flex items-center h-5">
                            <input
                              type="checkbox"
                              checked={field.value}
                              onChange={field.onChange}
                              className="w-4 h-4 rounded border-gray-300 text-brand-orange focus:ring-brand-orange"
                            />
                          </div>
                          <div className="text-sm">
                            <label className="font-medium text-gray-700">
                              <span className="text-red-500">*</span>プライバシーポリシーに同意します（必須）
                            </label>
                            <p className="mt-1 text-xs text-gray-500">
                              <span className="text-blue-600 underline cursor-pointer">プライバシーポリシー</span>
                              の内容をご確認の上、同意いただける場合はチェックしてください。
                            </p>
                          </div>
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* 여행 계획 수집 동의 (선택사항) */}
                  <FormField
                    control={form.control}
                    name="travelDataCollection"
                    render={({ field }) => (
                      <FormItem>
                        <div className="flex items-start space-x-3">
                          <div className="flex items-center h-5">
                            <input
                              type="checkbox"
                              checked={field.value}
                              onChange={field.onChange}
                              className="w-4 h-4 rounded border-gray-300 text-brand-orange focus:ring-brand-orange"
                            />
                          </div>
                          <div className="text-sm">
                            <label className="font-medium text-gray-700">
                              登録した旅行計画の収集に同意します（任意）
                            </label>
                            <p className="mt-1 text-xs text-gray-500">
                              より良いサービス提供のため、お客様が登録された旅行計画を匿名化して活用させていただく場合があります。
                              同意いただける場合はチェックしてください。
                            </p>
                          </div>
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              {/* 버튼 영역 */}
              <div className="flex justify-evenly pt-4 lg:pt-6">
                <Button
                  type="button"
                  variant="outline"
                  className="py-3 w-32 text-gray-600 border-gray-300 lg:w-50 hover:bg-gray-50"
                  onClick={() => navigate(-1)}
                >
                  戻る
                </Button>
                <Button
                  type="submit"
                  className="py-3 w-32 text-white lg:w-50 bg-brand-orange hover:bg-brand-orange"
                  disabled={!form.formState.isValid}
                >
                  次に進む
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </main>
    </div>
  );
};

export default Register;
