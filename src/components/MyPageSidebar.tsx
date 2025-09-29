import React from 'react';

// 아이콘 컴포넌트들
const ProfileIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1H5C3.89 1 3 1.89 3 3V21C3 22.11 3.89 23 5 23H19C20.11 23 21 22.11 21 21V9M19 9H14V4H19V9Z"/>
  </svg>
);

const PlanIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3M19 19H5V5H19V19M17 12H7V10H17V12M15 16H7V14H15V16M17 8H7V6H17V8Z"/>
  </svg>
);

const ManagementIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z"/>
  </svg>
);

interface MyPageSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const MyPageSidebar: React.FC<MyPageSidebarProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <>
      {/* 오버레이 - 블러 처리 */}
      <div 
        className="fixed inset-0 bg-white bg-opacity-20 backdrop-blur-sm z-40"
        onClick={onClose}
      />
      
      {/* 사이드바 */}
      <div className="fixed left-0 top-0 h-full w-80 bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out">
        <div className="p-6">
          {/* 사용자 프로필 섹션 */}
          <div className="bg-white rounded-lg border border-gray-200 p-4 mb-6">
            <div className="flex items-center space-x-3">
              {/* 아바타 이미지 */}
              <div className="w-12 h-12 rounded-full overflow-hidden bg-gradient-to-br from-orange-400 to-pink-500 flex items-center justify-center">
                <span className="text-white font-bold text-lg">オ</span>
              </div>
              {/* 사용자 이름 */}
              <div>
                <h3 className="font-bold text-gray-800 text-lg">オンヒャク</h3>
              </div>
            </div>
          </div>

          {/* 메뉴 아이템들 */}
          <div className="space-y-2">
            {/* 프로필 관리 - 활성 상태 */}
            <div className="flex items-center space-x-3 p-3 rounded-lg bg-gray-50">
              <div className="text-gray-800">
                <ProfileIcon />
              </div>
              <span className="font-bold text-gray-800">プロフィール管理</span>
            </div>

            {/* 여행 계획을 세우다 - 비활성 상태 */}
            <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
              <div className="text-gray-400">
                <PlanIcon />
              </div>
              <span className="text-gray-400">旅行計画を立てる</span>
            </div>

            {/* 여행 계획 관리 - 비활성 상태 */}
            <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
              <div className="text-gray-400">
                <ManagementIcon />
              </div>
              <span className="text-gray-400">旅行計画管理</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyPageSidebar;
