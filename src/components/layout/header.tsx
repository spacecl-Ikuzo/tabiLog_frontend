import { Button } from '../ui/button';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  return (
    <header className="px-4 py-3 bg-white text-brand-orange lg:bg-brand-orange lg:text-white lg:px-6 lg:py-4">
      <div className="flex justify-between items-center mx-auto max-w-6xl">
        <h1 className="text-xl font-bold text-brand-orange lg:text-2xl lg:text-white">タビログ</h1>

        {/* 데스크톱 메뉴 */}
        <div className="hidden items-center space-x-6 lg:flex">
          <span className="cursor-pointer hover:text-orange-200">観光スポット紹介</span>
          <span className="cursor-pointer hover:text-orange-200" onClick={() => navigate('/plans')}>
            マイトリップ
          </span>
          <Button
            variant="outline"
            className="border-white bg-white text-brand-orange cursor-pointer"
            onClick={() => navigate('/login')}
          >
            ログイン
          </Button>
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
