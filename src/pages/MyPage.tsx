import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/button';

// 아이콘 컴포넌트들
const UserIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
  </svg>
);

const MapIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
  </svg>
);

const CalendarIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
);

const HeartIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
  </svg>
);

const SettingsIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const LogoutIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
  </svg>
);

const MyPage = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // 로그아웃 로직
    navigate('/login');
  };

  const handlePlanDetail = () => {
    navigate('/trip-planner');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 헤더 */}
      <header className="bg-orange-500 text-white px-6 py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-bold">タビログ</h1>
          <nav className="flex items-center space-x-6">
            <a href="#" className="hover:text-orange-200 transition-colors">観光スポット紹介</a>
            <a href="#" className="hover:text-orange-200 transition-colors">マイトリップ</a>
            <button 
              onClick={handleLogout}
              className="border border-orange-300 text-orange-300 px-4 py-2 rounded hover:bg-orange-300 hover:text-orange-500 transition-colors"
            >
              ログアウト
            </button>
          </nav>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-6 py-8">
        {/* 프로필 섹션 */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center">
              <UserIcon />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-800">최은혁님</h2>
              <p className="text-gray-600">traveler@example.com</p>
              <p className="text-sm text-gray-500">회원가입일: 2024년 1월</p>
            </div>
          </div>
        </div>

        {/* 메뉴 섹션 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* 내 여행 계획 */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <MapIcon />
              </div>
              <h3 className="text-lg font-semibold text-gray-800">내 여행 계획</h3>
            </div>
            <p className="text-gray-600 mb-4">저장된 여행 계획을 확인하고 관리하세요</p>
            <Button 
              onClick={handlePlanDetail}
              className="w-full bg-blue-500 hover:bg-blue-600 text-white"
            >
              여행 계획 보기
            </Button>
          </div>

          {/* 여행 일정 */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <CalendarIcon />
              </div>
              <h3 className="text-lg font-semibold text-gray-800">여행 일정</h3>
            </div>
            <p className="text-gray-600 mb-4">다가오는 여행 일정을 확인하세요</p>
            <Button 
              onClick={handlePlanDetail}
              className="w-full bg-green-500 hover:bg-green-600 text-white"
            >
              일정 확인
            </Button>
          </div>

          {/* 즐겨찾기 */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                <HeartIcon />
              </div>
              <h3 className="text-lg font-semibold text-gray-800">즐겨찾기</h3>
            </div>
            <p className="text-gray-600 mb-4">저장한 관광지와 맛집을 확인하세요</p>
            <Button 
              onClick={() => alert('즐겨찾기 기능은 준비 중입니다.')}
              className="w-full bg-red-500 hover:bg-red-600 text-white"
            >
              즐겨찾기 보기
            </Button>
          </div>

          {/* 설정 */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                <SettingsIcon />
              </div>
              <h3 className="text-lg font-semibold text-gray-800">설정</h3>
            </div>
            <p className="text-gray-600 mb-4">계정 설정 및 개인정보를 관리하세요</p>
            <Button 
              onClick={() => alert('설정 기능은 준비 중입니다.')}
              className="w-full bg-gray-500 hover:bg-gray-600 text-white"
            >
              설정
            </Button>
          </div>
        </div>

        {/* 최근 여행 계획 */}
        <div className="bg-white rounded-lg shadow-sm p-6 mt-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">최근 여행 계획</h3>
          <div className="space-y-3">
            <div 
              className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors"
              onClick={handlePlanDetail}
            >
              <div>
                <h4 className="font-medium text-gray-800">東京2泊3日旅</h4>
                <p className="text-sm text-gray-600">2026.05.13 - 2026.05.15</p>
                <p className="text-xs text-gray-500">총 예산: 750,000¥</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-600">5개 관광지</p>
                <p className="text-xs text-gray-500">3일 일정</p>
              </div>
            </div>
            
            <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors">
              <div>
                <h4 className="font-medium text-gray-800">오사카 1박2일</h4>
                <p className="text-sm text-gray-600">2025.12.25 - 2025.12.26</p>
                <p className="text-xs text-gray-500">총 예산: 200,000¥</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-600">3개 관광지</p>
                <p className="text-xs text-gray-500">2일 일정</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPage;
