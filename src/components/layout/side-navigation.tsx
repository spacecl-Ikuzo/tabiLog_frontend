//마이페이지 사이드바
import { User, PlaneTakeoff, BarChart3 } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SideNavigation({ selectedNav }: { selectedNav: string }) {
  const navigate = useNavigate();

  const [activeMenu, setActiveMenu] = useState(selectedNav);

  const handleMenuClick = (menu: string) => {
    setActiveMenu(menu);

    const pathName = location.pathname.split('/')[1];
    if (pathName !== menu) {
      //현재 경로와 메뉴의 value가 같으면 동작 X
      if (menu === 'plans') {
        navigate(`/plans`);
      } else {
        //TODO: 마이페이지 추가 시 수정
        navigate(`/`);
      }
    }
  };

  return (
    <>
      {/* 사이드바 네비게이션 (데스크톱만) */}
      <div className="hidden lg:block w-70 bg-white shadow-sm min-h-screen">
        <div className="px-6 py-15">
          {/* 프로필 섹션 */}
          <div className="flex items-center gap-3 bg-gray-100 rounded-3xl p-4 mb-8`">
            <div className="w-14 h-14 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center text-white font-bold">
              オ
            </div>
            <span className="font-bold text-gray-800 text-lg">オンビャク</span>
          </div>

          {/* 메뉴 */}
          <nav className="space-y-1 py-8">
            <div
              className={`flex items-center gap-3 px-3 py-4 hover:bg-gray-50 rounded-lg cursor-pointer ${
                activeMenu === 'profile' ? 'text-black' : 'text-gray-600'
              }`}
              onClick={() => handleMenuClick('profile')}
            >
              <User className="w-5 h-5" />
              <span className="text-[16px] font-semibold">プロフィール管理</span>
            </div>
            <div
              className={`flex items-center gap-3 px-3 py-4 hover:bg-gray-50 rounded-lg cursor-pointer ${
                activeMenu === 'createPlan' ? 'text-black' : 'text-gray-600'
              }`}
              onClick={() => handleMenuClick('createPlan')}
            >
              <PlaneTakeoff className="w-5 h-5" />
              <span className="text-[16px] font-semibold">旅行計画を立てる</span>
            </div>
            <div
              className={`flex items-center gap-3 px-3 py-4 hover:bg-gray-50 rounded-lg cursor-pointer ${
                activeMenu === 'plans' ? 'text-black' : 'text-gray-600'
              }`}
              onClick={() => handleMenuClick('plans')}
            >
              <BarChart3 className="w-5 h-5" />
              <span className="text-[16px] font-semibold">旅行計画管理</span>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
