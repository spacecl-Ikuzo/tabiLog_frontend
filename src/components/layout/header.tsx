// src/components/layout/header.tsx
import { useState } from 'react';
import { Button } from '../ui/button';
import { useNavigate } from 'react-router-dom';
import { useInvitationStore, useUserStore } from '@/store';

const Header = () => {
  const navigate = useNavigate();
  const { token, nickname, removeUserData } = useUserStore();
  const { clearInvitationData } = useInvitationStore();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    // 토큰/ 사용자 정보 삭제 + 로그인 화면으로
    removeUserData();
    clearInvitationData();
    navigate('/login');
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleMobileMenuClick = (path: string) => {
    navigate(path);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
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

          {/* 모바일 메뉴 */}
          <div className="lg:hidden">
            <button onClick={toggleMobileMenu} className="p-2" aria-label="메뉴 열기">
              <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* 모바일 메뉴 드롭다운 */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg">
          <div className="px-4 py-4 space-y-3">
            {/* 메뉴 항목들 */}
            <button
              onClick={() => handleMobileMenuClick('/spots')}
              className="block w-full text-left py-2 px-3 text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
            >
              観光スポット紹介
            </button>

            {token ? (
              <>
                <button
                  onClick={() => handleMobileMenuClick('/plans')}
                  className="block w-full text-left py-2 px-3 text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
                >
                  マイトリップ
                </button>

                <div className="border-t border-gray-200 pt-3 mt-3">
                  <div className="px-3 py-2 text-sm text-gray-500">{nickname ? `${nickname}様` : 'ゲスト'}</div>
                  <button
                    onClick={() => handleMobileMenuClick('/profile')}
                    className="block w-full text-left py-2 px-3 text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
                  >
                    プロフィール
                  </button>
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left py-2 px-3 text-red-600 hover:bg-red-50 rounded-md transition-colors"
                  >
                    ログアウト
                  </button>
                </div>
              </>
            ) : (
              <button
                onClick={() => handleMobileMenuClick('/login')}
                className="block w-full text-left py-2 px-3 text-brand-orange hover:bg-orange-50 rounded-md transition-colors"
              >
                ログイン
              </button>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
