//마이페이지 사이드바
import { User, PlaneTakeoff, BarChart3 } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getMyPageInfo } from '../../api/api';

interface MyPageInfo {
  id: number;
  email: string;
  userId: string;
  firstName: string;
  lastName: string;
  gender: string;
  phoneNumber: string;
  nickname: string;
  createdAt: string;
  updatedAt: string;
  participatingPlanCount: number;
  ownedPlanCount: number;
}

export default function SideNavigation({ selectedNav }: { selectedNav: string }) {
  const navigate = useNavigate();

  const [activeMenu, setActiveMenu] = useState(selectedNav);
  const [userInfo, setUserInfo] = useState<MyPageInfo | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        console.log('=== SideNavigation: 마이페이지 정보 요청 시작 ===');
        const data = await getMyPageInfo();
        console.log('=== SideNavigation: 마이페이지 정보 응답 ===', data);
        setUserInfo(data);
      } catch (error) {
        console.error('사용자 정보를 가져오는데 실패했습니다:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserInfo();
  }, []);

  const handleMenuClick = (menu: string) => {
    setActiveMenu(menu);

    const pathName = location.pathname.split('/')[1];
    if (pathName !== menu) {
      //현재 경로와 메뉴의 value가 같으면 동작 X
      if (menu === 'plans') {
        navigate(`/plans`);
      } else if (menu === 'newPlan') {
        navigate(`/newPlan`);
      } else if (menu === 'profile') {
        navigate(`/profile`);
      } else {
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
          <div className="flex items-center gap-3 bg-gray-100 rounded-3xl p-4 mb-8">
            <div className="w-14 h-14 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center text-white font-bold">
              {loading ? '...' : userInfo ? userInfo.nickname.charAt(0) : 'オ'}
            </div>
            <span className="font-bold text-gray-800 text-lg">
              {loading ? '로딩 중...' : userInfo ? userInfo.nickname : 'オンビャク'}
            </span>
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
                activeMenu === 'newPlan' ? 'text-black' : 'text-gray-600'
              }`}
              onClick={() => handleMenuClick('newPlan')}
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
