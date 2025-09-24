import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export default function FindAccount() {
  const navigate = useNavigate();

  const handleFindID = () => {
    navigate('/find-account/find-id');
  };

  const handleResetPassword = () => {
    navigate('/find-account/find-password');
  };

  const handleCancel = () => {
    navigate(-1);
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-18">
      <div className="w-full max-w-md">
        {/* 제목 */}
        <h1 className="text-2xl font-bold text-orange-500 text-center mb-8 lg:text-3xl">アカウントの確認</h1>

        {/* 버튼 카드 */}
        <Card className="p-6 lg:p-8">
          <div className="space-y-6">
            {/* 아이디 찾기 버튼 */}
            <Button
              onClick={handleFindID}
              className="w-full h-12 bg-white border-2 border-gray-300 hover:border-orange-500 hover:bg-orange-50 text-gray-700 font-medium text-base flex items-center justify-start px-4 lg:h-14 lg:text-lg"
            >
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
                <span>IDを探す</span>
              </div>
            </Button>

            {/* 비밀번호 재설정 버튼 */}
            <Button
              onClick={handleResetPassword}
              className="w-full h-12 bg-white border-2 border-gray-300 hover:border-orange-500 hover:bg-orange-50 text-gray-700 font-medium text-base flex items-center justify-start px-4 lg:h-14 lg:text-lg"
            >
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1 7 21 9z"
                  />
                </svg>
                <span>パスワードを再設定</span>
              </div>
            </Button>

            {/* 취소 버튼 */}
            <Button
              onClick={handleCancel}
              className="w-full h-12 bg-orange-500 hover:bg-orange-600 text-white font-medium text-base lg:h-14 lg:text-lg"
            >
              戻る
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}
