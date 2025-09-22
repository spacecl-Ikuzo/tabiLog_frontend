import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import SecurityNotice from './components/SecurityNotice';
import { toast } from 'sonner';

export default function FindPassword() {
  const navigate = useNavigate();
  const [id, setId] = useState('');
  const [email, setEmail] = useState('');
  const [authCode, setAuthCode] = useState('');
  const [idError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [authCodeError, setAuthCodeError] = useState('');
  const [isEmailSent, setIsEmailSent] = useState(false);
  const [isAuthCodeConfirmed, setIsAuthCodeConfirmed] = useState(false);
  const [showSecurityNotice, setShowSecurityNotice] = useState(false);

  const handleSendEmail = () => {
    if (!email) {
      setEmailError('メールアドレスを入力してください。');
      return;
    }
    // 이메일 전송 로직
    setIsEmailSent(true);
    setEmailError('');
    
    // 성공 팝업 메시지 표시
    toast.success('入力いただいたメールアドレスに認証コードを送信いたしました');
  };

  const handleConfirmAuthCode = () => {
    if (!authCode) {
      setAuthCodeError('認証コードを入力してください。');
      return;
    }
    // 인증코드 확인 로직
    setIsAuthCodeConfirmed(true);
    setAuthCodeError('');
  };

  const handleSendTemporaryPassword = () => {
    // 임시 비밀번호 전송 로직
    console.log('임시 비밀번호 전송');
    setShowSecurityNotice(true);
  };

  const handleLogin = () => {
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-15 lg:p-8">
      {!showSecurityNotice ? (
        <div className="w-full max-w-4xl flex flex-col lg:flex-row gap-6">
          {/* 메인 카드 */}
          <Card className="flex-1 p-6 lg:p-8">
            {/* 제목 */}
            <h1 className="text-2xl font-bold text-orange-500 text-center mb-8 lg:text-3xl">パスワードを再設定</h1>

            {/* 안내 텍스트 */}
            <p className="text-gray-700 text-center mb-8 text-sm lg:text-base">
              ご登録の際に入力されたメールアドレス宛に仮パスワードを送信いたします。
            </p>

            <div className="space-y-6">
              {/* ID 입력 섹션 */}
              <div className="space-y-2">
                <Label htmlFor="id" className="text-sm font-medium text-gray-700 lg:text-base">
                  ID
                </Label>
                <Input
                  id="id"
                  type="text"
                  placeholder="IDを入力"
                  value={id}
                  onChange={(e) => setId(e.target.value)}
                  className="h-10 text-sm lg:h-12 lg:text-base"
                />
                {idError && <p className="text-orange-500 text-xs lg:text-sm">{idError}</p>}
              </div>

              {/* 이메일 입력 섹션 */}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium text-gray-700 lg:text-base">
                  E-mail
                </Label>
                <div className="flex gap-2">
                  <Input
                    id="email"
                    type="email"
                    placeholder="m@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 h-10 text-sm lg:h-12 lg:text-base"
                  />
                  <Button
                    onClick={handleSendEmail}
                    className="bg-gray-600 hover:bg-gray-700 text-white px-4 h-10 text-sm lg:h-12 lg:text-base"
                  >
                    送信
                  </Button>
                </div>
                {emailError && <p className="text-orange-500 text-xs lg:text-sm">{emailError}</p>}
              </div>

              {/* 인증코드 입력 섹션 */}
              {isEmailSent && (
                <div className="space-y-2">
                  <Label htmlFor="authCode" className="text-sm font-medium text-gray-700 lg:text-base">
                    認証コード
                  </Label>
                  <div className="flex gap-2">
                    <Input
                      id="authCode"
                      type="text"
                      placeholder="認証コードを入力"
                      value={authCode}
                      onChange={(e) => setAuthCode(e.target.value)}
                      className="flex-1 h-10 text-sm lg:h-12 lg:text-base"
                    />
                    <Button
                      onClick={handleConfirmAuthCode}
                      className="bg-gray-600 hover:bg-gray-700 text-white px-4 h-10 text-sm lg:h-12 lg:text-base"
                    >
                      確認
                    </Button>
                  </div>
                  {authCodeError && <p className="text-orange-500 text-xs lg:text-sm">{authCodeError}</p>}
                </div>
              )}

              {/* 임시 비밀번호 전송 버튼 */}
              {isAuthCodeConfirmed && (
                <Button
                  onClick={handleSendTemporaryPassword}
                  className="w-full h-12 bg-orange-500 hover:bg-orange-600 text-white font-medium text-base lg:h-14 lg:text-lg"
                >
                  仮パスワードを送信
                </Button>
              )}
            </div>
          </Card>
        </div>
      ) : (
        <div className="w-full max-w-md px-4">
          <SecurityNotice onLogin={handleLogin} />
        </div>
      )}
    </div>
  );
}
