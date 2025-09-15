import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/ui/button';

const Home = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 헤더 */}
      <header className="bg-orange-500 text-white px-6 py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-bold">タビログ</h1>
          <nav className="flex items-center space-x-6">
            <a href="#" className="hover:text-orange-200 transition-colors">観光スポット紹介</a>
            <a href="#" className="hover:text-orange-200 transition-colors">マイトリップ</a>
            <Button 
              onClick={handleLogin}
              className="border border-orange-300 text-orange-300 px-4 py-2 rounded hover:bg-orange-300 hover:text-orange-500 transition-colors bg-transparent"
            >
              ログイン
            </Button>
          </nav>
        </div>
      </header>

      {/* 메인 콘텐츠 */}
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-80px)] px-6">
        <div className="text-center max-w-2xl">
          <div className="mb-8">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">일본 여행을 계획하세요</h2>
            <p className="text-lg text-gray-600 mb-8">
              AI 기반 여행 계획 서비스로 완벽한 일본 여행을 만들어보세요
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={handleLogin}
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg"
            >
              로그인하고 시작하기
            </Button>
            <Button 
              onClick={() => navigate('/register')}
              className="border border-orange-500 text-orange-500 hover:bg-orange-50 px-8 py-3 text-lg bg-transparent"
            >
              회원가입
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
