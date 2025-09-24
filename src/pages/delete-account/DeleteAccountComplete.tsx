import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { CheckCircle, Home } from 'lucide-react';

export default function DeleteAccountComplete() {
  const navigate = useNavigate();

  // 홈화면으로 이동
  const handleGoHome = () => {
    navigate('/', { replace: true });
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="max-w-md mx-auto px-6 py-12 text-center">
        {/* 완료 아이콘 */}
        <div className="mb-8">
          <CheckCircle className="w-20 h-20 text-green-500 mx-auto" />
        </div>

        {/* 완료 메시지 */}
        <div className="mb-8">
          <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">会員退会が完了しました</h1>
          <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
            ご利用いただき、ありがとうございました。
            <br />
            アカウントが正常に削除されました。
          </p>
        </div>

        {/* 홈화면으로 돌아가기 버튼 */}
        <div className="space-y-4">
          <Button
            onClick={handleGoHome}
            className="w-full px-8 py-3 bg-brand-orange hover:bg-brand-orange/90 text-white font-semibold text-lg rounded-lg h-14 flex items-center justify-center gap-2"
          >
            <Home className="w-5 h-5" />
            ホーム画面に戻る
          </Button>
        </div>

        {/* 추가 안내 메시지 */}
        <div className="mt-8 p-4 bg-gray-50 rounded-lg">
          <p className="text-sm text-gray-500">またのご利用をお待ちしております。</p>
        </div>
      </div>
    </div>
  );
}
