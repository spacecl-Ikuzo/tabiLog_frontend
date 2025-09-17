import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Label } from '@/components/ui/label';

export default function FindID() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [authCode, setAuthCode] = useState('');
  const [emailError, setEmailError] = useState('');
  const [authCodeError, setAuthCodeError] = useState('');
  const [showID, setShowID] = useState(false);
  const [isEmailSent, setIsEmailSent] = useState(false);

  const handleSendEmail = () => {
    if (!email) {
      setEmailError('メールアドレスを入力してください。');
      return;
    }
    // 이메일 전송 로직
    setIsEmailSent(true);
    setEmailError('');
  };

  const handleConfirmAuthCode = () => {
    if (!authCode) {
      setAuthCodeError('認証コードを入力してください。');
      return;
    }
    // 인증코드 확인 로직
    setShowID(true);
    setAuthCodeError('');
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
    <div className="min-h-screen bg-white flex items-center justify-center p-15 lg:p-8">
      <div className="w-full max-w-4xl flex flex-col lg:flex-row gap-6">
        {/* 메인 카드 */}
        <Card className="flex-1 p-6 lg:p-8">
          {/* 제목 */}
          <h1 className="text-2xl font-bold text-orange-500 text-center mb-8 lg:text-3xl">IDを探す</h1>

          {/* 안내 텍스트 */}
          <p className="text-gray-700 text-center mb-8 text-sm lg:text-base">
            ご登録のメールアドレスを入力してください。認証コードを送信します。
          </p>

          <div className="space-y-6">
            {/* 이메일 입력 섹션 */}
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium text-gray-700 lg:text-base">
                E-mail
              </Label>
              <div className="flex gap-2">
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com*"
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

            {/* ID 표시 박스 */}
            {showID && (
              <div className="space-y-4">
                <div className="border border-gray-300 rounded-lg p-4 bg-gray-50">
                  <p className="text-sm lg:text-base text-gray-700 mb-2">ご登録のIDは「tabi****123」です</p>
                  <p className="text-xs lg:text-sm text-gray-500">セキュリティ保護のため、IDは一部のみ表示されます。</p>
                </div>

                <p className="text-orange-500 text-sm lg:text-base text-center">
                  このIDでログインできます。ログイン画面にお進みください。
                </p>

                <Button
                  onClick={handleLogin}
                  className="w-full h-12 bg-orange-500 hover:bg-orange-600 text-white font-medium text-base lg:h-14 lg:text-lg"
                >
                  ログイン
                </Button>
              </div>
            )}
          </div>
        </Card>
      </div>
    </div>
  );
}
