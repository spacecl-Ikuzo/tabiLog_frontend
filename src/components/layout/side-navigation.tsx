//마이페이지 사이드바
import { User, PlaneTakeoff, BarChart3 } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { ProfileData } from '@/lib/type';
import { getMyPageInfo } from '@/api/api';

export default function SideNavigation({ selectedNav }: { selectedNav: string }) {
  const navigate = useNavigate();

  const [activeMenu, setActiveMenu] = useState(selectedNav);
  const [userInfo, setUserInfo] = useState<ProfileData | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchUserInfo();

    // 프로필 업데이트 이벤트 리스너 추가
    const handleProfileUpdate = () => {
      fetchUserInfo();
    };

    window.addEventListener('profileUpdated', handleProfileUpdate);

    // 클린업 함수
    return () => {
      window.removeEventListener('profileUpdated', handleProfileUpdate);
    };
  }, []);

  //사용자 정보 조회
  const fetchUserInfo = async () => {
    setLoading(true);
    try {
      const response = await getMyPageInfo();
      setUserInfo(response.data);
    } catch (error) {
      console.error('사용자 정보를 가져오는데 실패했습니다:', error);
      // 에러가 발생해도 팝업을 표시하지 않고 조용히 처리
    } finally {
      setLoading(false);
    }
  };

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
      <div className="hidden lg:block w-60 bg-white shadow-sm min-h-screen">
        <div className="px-6 py-15">
          {/* 프로필 섹션 */}
          <div className="flex items-center gap-3 bg-gray-100 rounded-3xl p-4 mb-8">
            {loading ? (
              <>
                <Skeleton circle height={56} width={56} />
                <Skeleton height={20} width={100} />
              </>
            ) : (
              <>
                {userInfo?.profileImageUrl ? (
                  <img
                    src={import.meta.env.VITE_API_URL + userInfo.profileImageUrl}
                    alt="profile"
                    className="w-14 h-14 rounded-full"
                  />
                ) : (
                  <>
                    <div className="w-14 h-14 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center text-white font-bold">
                      {userInfo?.nickname?.slice(0, 2)}
                    </div>
                  </>
                )}
                <span className="font-bold text-gray-800 text-lg">{userInfo?.nickname}</span>
              </>
            )}
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
