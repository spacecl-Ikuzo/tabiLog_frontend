// src/components/layout/header.tsx
import { Button } from '../ui/button';
import { useNavigate } from 'react-router-dom';
import { useUserStore } from '@/store';

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
          className="text-xl font-bold text-brand-orange lg:text-white cursor-pointer hover:opacity-80 transition-opacity"
          onClick={() => navigate('/')}
          aria-label="홈으로 이동"
        >
          タビログ
        </h1>

        {/* 데스크톱 메뉴 */}
        <nav className="hidden items-center space-x-8 lg:flex">
          <button className="cursor-pointer hover:text-orange-200" onClick={() => navigate('/spots')}>
            観光スポット紹介
          </button>

          {/* ✅ 네 전용 페이지 링크 추가 */}
          <button className="cursor-pointer hover:text-orange-200" onClick={() => navigate('/spots2')}>
            関西・北海道
          </button>

          <button className="cursor-pointer hover:text-orange-200" onClick={() => navigate('/plans')}>
            マイトリップ
          </button>

          {/* ▼ 로그인 상태 토글 */}
          {token ? (
            <div className="flex items-center space-x-6">
              <span
                className="text-lg font-medium text-white cursor-pointer transition-all duration-300 hover:underline hover:underline-offset-4 hover:decoration-2 hover:decoration-white hover:scale-105 inline-block"
                style={{
                  fontFamily: "'Noto Sans JP', 'Hiragino Sans', 'Yu Gothic', sans-serif",
                  letterSpacing: '0.05em',
                  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
                  verticalAlign: 'middle',
                  lineHeight: '1',
                }}
              >
                {nickname ? `${nickname}様` : 'ゲスト'}
              </span>
              <Button
                variant="outline"
                className="border-white bg-white text-brand-orange cursor-pointer px-4 py-2"
                style={{
                  verticalAlign: 'middle',
                }}
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
