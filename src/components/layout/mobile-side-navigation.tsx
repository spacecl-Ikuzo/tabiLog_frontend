import { useNavigate, useLocation } from 'react-router-dom';
import { useUserStore } from '@/store';
import { useState, useEffect, useRef } from 'react';
import { ProfileData } from '@/lib/type';
import { getMyPageInfo } from '@/api/api';

interface MobileSideNavigationProps {
  isOpen: boolean;
  onClose: () => void;
  handleLogout: () => void;
}

const MobileSideNavigation = ({ isOpen, onClose, handleLogout }: MobileSideNavigationProps) => {
  const navigate = useNavigate();
  const location = useLocation();

  // ✅ 스토어에서 토큰/닉네임만 사용 (프로필 통신은 필요할 때만)
  const { token, nickname } = useUserStore();

  const [isMyTripOpen, setIsMyTripOpen] = useState(false);
  const [userInfo, setUserInfo] = useState<ProfileData | null>(null);

  // ✅ 중복 호출 방지용 플래그 (사이드바 열릴 때 여러 번 렌더되어도 1회만 호출)
  const fetchedOnceRef = useRef(false);

  const handleNavigation = (path: string) => {
    navigate(path);
    onClose();
  };

  const toggleMyTrip = () => {
    setIsMyTripOpen((v) => !v);
  };

  // 현재 경로가 마이트립 관련이면 자동으로 펼침 상태 유지
  useEffect(() => {
    const isMyTripPath =
      location.pathname.startsWith('/plans') ||
      location.pathname.startsWith('/newPlan') ||
      location.pathname.startsWith('/profile');
    setIsMyTripOpen(isMyTripPath);
  }, [location.pathname]);

  // ✅ 토큰이 있고, 사이드바가 열렸을 때만 /api/profile 호출
  useEffect(() => {
    if (token) {
      //로그인한 사용자만 조회
      fetchUserInfo();
    }
  }, [isOpen, token]);

    // 토큰이 없으면: 프로필 정보 초기화 + 다음에 토큰 생기면 다시 시도할 수 있게 플래그 해제
    if (!token) {
      setUserInfo(null);
      fetchedOnceRef.current = false;
      return;
    }

    // 사이드바가 닫혀 있으면 호출하지 않음
    if (!isOpen) return;

    // 이미 한 번 불러왔다면 또 부르지 않음 (열었다 닫았다 반복 시 과호출 방지)
    if (fetchedOnceRef.current) return;
    fetchedOnceRef.current = true;

    (async () => {
      try {
        const res = await getMyPageInfo();
        if (cancelled) return;
        setUserInfo(res.data);
      } catch (error) {
        // 조용히 실패 처리 (토스트/팝업 불필요)
        // console.error('사용자 정보를 가져오는데 실패했습니다:', error);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [token, isOpen]); // 🔑 토큰/오픈 상태 변화에만 반응

  return (
    <div className="lg:hidden">
      {/* 오버레이 */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* 사이드바 */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* 사이드바 헤더 */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-800">メニュー</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="メニューを閉じる"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* 사용자 프로필 섹션 (로그인 상태에서만 노출) */}
        {token && (
          <div className="p-4 border-b border-gray-200">
            <div className="flex items-center space-x-3">
              {userInfo?.profileImageUrl ? (
                <img
                  src={`${import.meta.env.VITE_API_URL}${userInfo.profileImageUrl}`}
                  alt="profile"
                  className="w-12 h-12 rounded-full"
                />
              ) : (
                <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">
                    {nickname ? nickname.charAt(0).toUpperCase() : ''}
                  </span>
                </div>
              )}
              <div>
                <p className="text-base font-semibold text-gray-800">{nickname ? `${nickname}` : 'ゲスト'}</p>
              </div>
            </div>
          </div>
        )}

        {/* 사이드바 메뉴 */}
        <nav className="flex flex-col p-4 space-y-1">
          {/* 홈 메뉴 */}
          <button
            className={`flex items-center px-4 py-3 text-left rounded-lg transition-colors ${
              location.pathname === '/' ? 'bg-orange-50 text-gray-900' : 'text-gray-700 hover:bg-gray-100'
            }`}
            onClick={() => handleNavigation('/')}
          >
            <svg className="w-5 h-5 mr-3 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            ホーム
          </button>

          {/* 관광스팟 소개 */}
          <button
            className={`flex items-center px-4 py-3 text-left rounded-lg transition-colors ${
              location.pathname.startsWith('/spots') ? 'bg-orange-50 text-gray-900' : 'text-gray-700 hover:bg-gray-100'
            }`}
            onClick={() => handleNavigation('/spots')}
          >
            <svg className="w-5 h-5 mr-3 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
              />
            </svg>
            観光スポット紹介
          </button>

          {/* 마이트립 메뉴 (계층적 구조) */}
          <div className="space-y-1">
            <button
              className={`flex items-center justify-between w-full px-4 py-3 text-left rounded-lg transition-colors ${
                location.pathname.startsWith('/plans') ||
                location.pathname.startsWith('/newPlan') ||
                location.pathname.startsWith('/profile')
                  ? 'bg-orange-50 text-gray-900'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
              onClick={toggleMyTrip}
            >
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-3 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
                マイトリップ
              </div>
              <svg
                className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${
                  isMyTripOpen ? 'rotate-180' : 'rotate-0'
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* 서브메뉴 */}
            {isMyTripOpen && (
              <div className="ml-8 space-y-1">
                <button
                  className={`flex items-center px-4 py-2 text-left text-sm rounded-lg transition-colors ${
                    location.pathname.startsWith('/profile')
                      ? 'bg-orange-50 text-gray-900'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                  onClick={() => handleNavigation('/profile')}
                >
                  プロフィール管理
                </button>
                <button
                  className={`flex items-center px-4 py-2 text-left text-sm rounded-lg transition-colors ${
                    location.pathname.startsWith('/newPlan')
                      ? 'bg-orange-50 text-gray-900'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                  onClick={() => handleNavigation('/newPlan')}
                >
                  旅行計画を立てる
                </button>
                <button
                  className={`flex items-center px-4 py-2 text-left text-sm rounded-lg transition-colors ${
                    location.pathname.startsWith('/plans')
                      ? 'bg-orange-50 text-gray-900'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                  onClick={() => handleNavigation('/plans')}
                >
                  旅行計画管理
                </button>
              </div>
            )}
          </div>
        </nav>

        {/* 하단 로그아웃 버튼 */}
        {token && (
          <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200">
            <button
              className="w-full flex items-center justify-center px-4 py-3 bg-brand-orange text-white rounded-lg hover:bg-orange-600 transition-colors"
              onClick={() => {
                handleLogout();
                onClose();
              }}
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                />
              </svg>
              ログアウト
            </button>
          </div>
        )}

        {/* 비로그인 상태 로그인 버튼 */}
        {!token && (
          <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200">
            <button
              className="w-full flex items-center justify-center px-4 py-3 bg-brand-orange text-white rounded-lg hover:bg-orange-600 transition-colors"
              onClick={() => handleNavigation('/login')}
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                />
              </svg>
              ログイン
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MobileSideNavigation;
