import { Button } from '../ui/button';
import { useNavigate } from 'react-router-dom';
import useUserStore from '@/store';

const Header = () => {
  const navigate = useNavigate();
  const { token, nickname, removeUserData } = useUserStore();

  const handleLogout = () => {
    // 토큰/ 사용자 정보 삭제 + 로그인 화면으로
    removeUserData();
    navigate('/login');
  };

  return (
    <header className="px-4 py-3 bg-white text-brand-orange lg:bg-brand-orange lg:text-white lg:px-6 lg:py-4">
      <div className="flex justify-between items-center mx-auto max-w-6xl">
        <h1
          className="text-xl font-bold text-brand-orange lg:text-2xl lg:text-white cursor-pointer hover:opacity-80 transition-opacity"
          onClick={() => navigate('/')}
          aria-label="홈으로 이동"
        >
          タビログ
        </h1>

        {/* 데스크톱 메뉴 */}
        <nav className="hidden items-center space-x-6 lg:flex">
          <button className="cursor-pointer hover:text-orange-200" onClick={() => navigate('/spots')}>
            観光スポット紹介
          </button>
          <button className="cursor-pointer hover:text-orange-200" onClick={() => navigate('/plans')}>
            マイトリップ
          </button>

          {/* ▼ 로그인 상태 토글 */}
          {token ? (
            <div className="flex items-center space-x-3">
              <span className="font-semibold">{nickname ? `${nickname}様` : 'ゲスト'}</span>
              <Button
                variant="outline"
                className="border-white bg-white text-brand-orange cursor-pointer"
                onClick={handleLogout}
              >
                ログアウト
              </Button>
            </div>
          ) : (
            <Button
              variant="outline"
              className="border-white bg-white text-brand-orange cursor-pointer"
              onClick={() => navigate('/login')}
            >
              ログイン
            </Button>
          )}
        </nav>

        {/* 모바일 메뉴(간단 표시) */}
        <div className="lg:hidden">
          <button className="p-2" aria-label="메뉴 열기">
            <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
