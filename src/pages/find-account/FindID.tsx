import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import { axiosInstance } from '@/api/axios';

export default function FindID() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [authCode, setAuthCode] = useState('');
  const [emailError, setEmailError] = useState('');
  const [authCodeError, setAuthCodeError] = useState('');
  const [showID, setShowID] = useState(false);
  const [isEmailSent, setIsEmailSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [foundUserId, setFoundUserId] = useState('');

  const handleSendEmail = async () => {
    if (!email) {
      setEmailError('メールアドレスを入力してください。');
      return;
    }

    setIsLoading(true);
    setEmailError('');

    try {
      const response = await axiosInstance.post('/api/email/send-verification', {
        email: email,
      });

      if (response.data.success) {
        setIsEmailSent(true);
        toast.success('入力いただいたメールアドレスに認証コードを送信いたしました');
      } else {
        setEmailError('メール送信に失敗しました。もう一度お試しください。');
      }
    } catch (error: any) {
      console.error('이메일 전송 오류:', error);
      if (error.response?.status === 404) {
        setEmailError('入力されたメールアドレスは存在しません。');
      } else {
        setEmailError('メール送信に失敗しました。もう一度お試しください。');
      }
      toast.error('メール送信に失敗しました');
    } finally {
      setIsLoading(false);
    }
  };

  const handleConfirmAuthCode = async () => {
    if (!authCode) {
      setAuthCodeError('認証コードを入力してください。');
      return;
    }

    setIsLoading(true);
    setAuthCodeError('');

    try {
      const response = await axiosInstance.post('/api/email/verify', {
        email: email,
        code: authCode,
      });

      if (response.data.success) {
        // 인증 성공 후 실제 사용자 ID 찾기
        try {
          const findIdResponse = await axiosInstance.post('/api/auth/find-id', {
            email: email,
          });

          // API가 userId / user_id / username / nickname 중 하나로 반환할 수 있으므로 안전하게 처리
          const userIdFromApi =
            findIdResponse.data?.userId ??
            findIdResponse.data?.user_id ??
            findIdResponse.data?.username ??
            findIdResponse.data?.nickname;

          if (userIdFromApi) {
            setFoundUserId(String(userIdFromApi));
            setShowID(true);
            toast.success('認証が完了しました');
          } else {
            setAuthCodeError('ユーザー情報を取得できませんでした。');
          }
        } catch (findIdError: unknown) {
          console.error('사용자 ID 찾기 오류:', findIdError);
          setAuthCodeError('ユーザー情報を取得できませんでした。');
        }
      } else {
        setAuthCodeError('入力された認証コードが一致しません。');
      }
    } catch (error: any) {
      console.error('인증코드 확인 오류:', error);
      if (error.response?.status === 400) {
        setAuthCodeError('入力された認証コードが一致しません。');
      } else {
        setAuthCodeError('認証コードが正しくありません。');
      }
      toast.error('認証に失敗しました');
    } finally {
      setIsLoading(false);
    }
  };

  // const handleResend = () => {
  //   // 재전송 로직
  //   console.log('재전송');
  // };

  // const handleComplete = () => {
  //   // 완료 로직
  //   navigate('/login');
  // };

  const handleLogin = () => {
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-8">
      <div className="w-full max-w-4xl">
        {/* 제목 */}
        <h1 className="text-2xl font-bold text-orange-500 text-center mb-8">IDを探す</h1>

        <div className="flex gap-6">
          {/* 메인 카드 */}
          <Card className="flex-1 p-8">
            {/* 안내 텍스트 */}
            <p className="text-gray-700 text-center mb-8 text-sm">
              ご登録のメールアドレスを入力してください。認証コードを送信します。
            </p>

          <div className="space-y-6">
            {/* 이메일 입력 섹션 */}
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                E-mail
              </Label>
              <div className="relative">
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com*"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full h-10 text-sm pr-20"
                />
                <Button
                  onClick={handleSendEmail}
                  disabled={isLoading}
                  className="absolute right-1 top-1 bg-gray-600 hover:bg-gray-700 text-white px-3 h-8 text-xs disabled:opacity-50"
                >
                  {isLoading ? '送信中...' : '送信'}
                </Button>
              </div>
              {emailError && <p className="text-red-500 text-xs">{emailError}</p>}
            </div>

            {/* 인증코드 입력 섹션 */}
            {(isEmailSent || true) && (
              <div className="space-y-2">
                <Label htmlFor="authCode" className="text-sm font-medium text-gray-700">
                  認証コード
                </Label>
                <div className="relative">
                  <Input
                    id="authCode"
                    type="text"
                    placeholder="認証コードを入力"
                    value={authCode}
                    onChange={(e) => setAuthCode(e.target.value)}
                    className="w-full h-10 text-sm pr-20"
                  />
                  <Button
                    onClick={handleConfirmAuthCode}
                    disabled={isLoading}
                    className="absolute right-1 top-1 bg-gray-600 hover:bg-gray-700 text-white px-3 h-8 text-xs disabled:opacity-50"
                  >
                    {isLoading ? '確認中...' : '確認'}
                  </Button>
                </div>
                {authCodeError && <p className="text-red-500 text-xs">{authCodeError}</p>}
              </div>
            )}

            {/* ID 표시 박스 */}
            {showID && (
              <div className="space-y-4">
                <div className="border border-gray-300 rounded-lg p-4 bg-gray-50">
                  <p className="text-sm text-gray-700 mb-2">ご登録のIDは「{foundUserId}」です</p>
                  <p className="text-xs text-gray-500">セキュリティ保護のため、IDは一部のみ表示されます。</p>
                </div>

                <p className="text-orange-500 text-sm text-center">
                  このIDでログインできます。ログイン画面にお進みください。
                </p>

                <Button
                  onClick={handleLogin}
                  className="w-full h-12 bg-orange-500 hover:bg-orange-600 text-white font-medium text-base"
                >
                  ログイン
                </Button>
              </div>
            )}
          </div>
          </Card>

          {/* 오른쪽 버튼들 */}
          <div className="flex flex-col gap-4">
            <Button
              onClick={() => {
                if (isEmailSent) {
                  handleSendEmail();
                }
              }}
              disabled={!isEmailSent}
              className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 text-sm disabled:opacity-50"
            >
              再送
            </Button>
            <Button
              onClick={handleLogin}
              className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 text-sm"
            >
              完了
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
