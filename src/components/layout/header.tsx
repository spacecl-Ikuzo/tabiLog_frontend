import { Button } from '../ui/button';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Header = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState('');

  useEffect(() => {
    // localStorage에서 토큰과 사용자 정보 확인
    const accessToken = localStorage.getItem('accessToken');
    const email = localStorage.getItem('userEmail');
    
    if (accessToken) {
      setIsLoggedIn(true);
      setUserEmail(email || '');
    } else {
      setIsLoggedIn(false);
      setUserEmail('');
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('userEmail');
    setIsLoggedIn(false);
    setUserEmail('');
    navigate('/login');
  };

  return (
    <header className="px-4 py-3 bg-white text-brand-orange lg:bg-brand-orange lg:text-white lg:px-6 lg:py-4">
      <div className="flex justify-between items-center mx-auto max-w-7xl">
        <h1 className="text-xl font-bold text-brand-orange lg:text-2xl lg:text-white">タビログ</h1>

        {/* 데스크톱 메뉴 */}
        <div className="hidden items-center space-x-6 lg:flex">
          <span className="cursor-pointer hover:text-orange-200">観光スポット紹介</span>
          <span className="cursor-pointer hover:text-orange-200">マイトリップ</span>
          
          {isLoggedIn ? (
            <div className="flex items-center space-x-4">
              <span className="text-sm">안녕하세요, {userEmail}님</span>
              <Button
                variant="outline"
                className="text-white border-white hover:bg-white hover:text-orange-500 bg-transparent"
                onClick={() => navigate('/mypage')}
              >
                마이페이지
              </Button>
              <Button
                variant="outline"
                className="text-white border-white hover:bg-white hover:text-orange-500 bg-transparent"
                onClick={handleLogout}
              >
                로그아웃
              </Button>
            </div>
          ) : (
            <Button
              variant="outline"
              className="text-white border-white hover:bg-white hover:text-orange-500 bg-transparent"
              onClick={() => navigate('/login')}
            >
              ログイン
            </Button>
          )}
        </div>

        {/* 모바일 메뉴 */}
        <div className="lg:hidden">
          <button className="p-2">
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
