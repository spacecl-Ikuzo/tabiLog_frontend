import React, { useState, useEffect } from 'react';
import SpotSearchDialog from '../components/SpotSearchDialog';
import GoogleMapView from '../components/GoogleMapView';
import { Plus, Search, MapPin, Clock, Trash2 } from 'lucide-react';
import Header from '../components/layout/header';

// Icon Components
const HotelIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"/>
  </svg>
);

const LandmarkIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
  </svg>
);

const ShoppingIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
  </svg>
);

const ParkIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
  </svg>
);

const StreetIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
  </svg>
);

interface Spot {
  id: number;
  time: string;
  duration: string;
  icon: React.ReactNode;
  location: string;
  address: string;
  cost: string;
  latitude?: number;
  longitude?: number;
  rating?: number;
  userRatingsTotal?: number;
}

interface TravelSegment {
  duration: string;
}

const TripPlannerPage = () => {
  const [activeDay, setActiveDay] = useState(2);
  const [isSearchDialogOpen, setIsSearchDialogOpen] = useState(false);
  const [spots, setSpots] = useState<Record<number, Spot[]>>({
    1: [], // 5월 13일
    2: [
      {
        id: 1,
        time: "11:00",
        duration: "1小時",
        icon: <HotelIcon />,
        location: "アパホテル&リゾート 〈西新宿五丁目駅タワー〉",
        address: "〒151-0071 東京都渋谷区本町3丁目14-1",
        cost: "",
        latitude: 35.6896,
        longitude: 139.6917
      },
      {
        id: 2,
        time: "11:15 - 12:45",
        duration: "1小時30分",
        icon: <LandmarkIcon />,
        location: "東京都庁北展望室",
        address: "〒163-8001 東京都新宿区西新宿2丁目8-1 東京都庁第一本庁舎 45F",
        cost: "¥0",
        latitude: 35.6896,
        longitude: 139.6917
      },
      {
        id: 3,
        time: "13:10 - 15:10",
        duration: "2小時",
        icon: <ShoppingIcon />,
        location: "伊勢丹新宿店",
        address: "〒160-0022 東京都新宿区新宿3丁目14-1",
        cost: "¥12,000",
        latitude: 35.6909,
        longitude: 139.7005
      },
      {
        id: 4,
        time: "15:20 - 17:10",
        duration: "2小時",
        icon: <ParkIcon />,
        location: "新宿御苑",
        address: "〒160-0014 東京都新宿区内藤町11",
        cost: "¥0",
        latitude: 35.6852,
        longitude: 139.7104
      },
      {
        id: 5,
        time: "17:35 - 19:35",
        duration: "2小時",
        icon: <StreetIcon />,
        location: "新宿西口 思い出横丁",
        address: "〒160-0023 東京都新宿区西新宿1丁目2",
        cost: "¥32,000",
        latitude: 35.6896,
        longitude: 139.6917
      }
    ], // 5월 14일
    3: [] // 5월 15일
  });

  const [travelSegments, setTravelSegments] = useState<Record<number, TravelSegment[]>>({
    1: [],
    2: [
      { duration: "13分" },
      { duration: "22分" },
      { duration: "6分" },
      { duration: "22分" }
    ],
    3: []
  });

  // 관광지 추가 함수
  const addSpot = (newSpot: Spot) => {
    setSpots(prev => ({
      ...prev,
      [activeDay]: [...prev[activeDay], newSpot]
    }));

    // 이동 시간 계산 (간단한 예시)
    const newTravelSegment = { duration: "15분" };
    setTravelSegments(prev => ({
      ...prev,
      [activeDay]: [...prev[activeDay], newTravelSegment]
    }));
  };

  // 관광지 삭제 함수
  const deleteSpot = (day: number, spotId: number) => {
    setSpots(prev => ({
      ...prev,
      [day]: prev[day].filter(spot => spot.id !== spotId)
    }));

    // 해당하는 이동 시간도 삭제
    setTravelSegments(prev => ({
      ...prev,
      [day]: prev[day].filter((_, index) => index !== spotId - 1)
    }));
  };

  // 일정 컴포넌트
  const ItineraryPlanner = () => {
    const currentSpots = spots[activeDay] || [];
    const currentSegments = travelSegments[activeDay] || [];

    return (
      <div className="flex flex-col h-full">
        {/* 헤더 */}
        <div className="p-6 bg-white border-b">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl font-bold text-gray-900">일본 여행 계획</h1>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsSearchDialogOpen(true)}
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Search className="w-4 h-4" />
                관광지 검색
              </button>
            </div>
          </div>

          {/* 날짜 탭 */}
          <div className="flex gap-2">
            {[1, 2, 3].map(day => (
              <button
                key={day}
                onClick={() => setActiveDay(day)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  activeDay === day
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                5월 {12 + day}일
              </button>
            ))}
          </div>
        </div>

        {/* 일정 목록 */}
        <div className="flex-1 overflow-y-auto p-6">
          {currentSpots.length === 0 ? (
            <div className="text-center py-12">
              <MapPin className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">아직 관광지가 없습니다</h3>
              <p className="text-gray-500 mb-4">Google Maps를 통해 관광지를 검색하고 추가해보세요</p>
              <button
                onClick={() => setIsSearchDialogOpen(true)}
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors mx-auto"
              >
                <Plus className="w-4 h-4" />
                관광지 추가
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {currentSpots.map((spot, index) => (
                <div key={spot.id}>
                  {/* 관광지 카드 */}
                  <div className="bg-white rounded-lg shadow-sm border p-4">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-sm">
                          {index + 1}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            {spot.icon}
                            <h3 className="font-semibold text-gray-900">{spot.location}</h3>
                          </div>
                          <p className="text-sm text-gray-600 mb-2">{spot.address}</p>
                          <div className="flex items-center gap-4 text-sm text-gray-500">
                            <div className="flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              <span>{spot.time}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <span>⏱️ {spot.duration}</span>
                            </div>
                            {spot.cost && (
                              <div className="text-green-600 font-medium">{spot.cost}</div>
                            )}
                          </div>
                          {spot.rating && (
                            <div className="flex items-center gap-1 mt-2">
                              <span className="text-yellow-500">⭐</span>
                              <span className="text-sm text-gray-600">
                                {spot.rating} ({spot.userRatingsTotal?.toLocaleString()}개 리뷰)
                              </span>
                            </div>
                          )}
                        </div>
                      </div>
                      <button
                        onClick={() => deleteSpot(activeDay, spot.id)}
                        className="p-2 text-gray-400 hover:text-red-500 transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* 이동 시간 표시 */}
                  {index < currentSegments.length && (
                    <div className="flex items-center justify-center py-2">
                      <div className="flex items-center gap-2 px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-600">
                        <Clock className="w-4 h-4" />
                        <span>이동시간: {currentSegments[index].duration}</span>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="flex h-[calc(100vh-80px)]">
        {/* Left Column - Itinerary Planner (60%) */}
        <div className="w-full lg:w-3/5 flex flex-col">
          <ItineraryPlanner />
        </div>
        
        {/* Right Column - Map View (40%) */}
        <div className="hidden lg:block lg:w-2/5">
          <GoogleMapView 
            spots={spots[activeDay] || []}
            travelSegments={travelSegments[activeDay] || []}
            activeDay={activeDay}
          />
        </div>
      </div>

      {/* 관광지 검색 다이얼로그 */}
      <SpotSearchDialog
        isOpen={isSearchDialogOpen}
        onClose={() => setIsSearchDialogOpen(false)}
        onAddSpot={addSpot}
        day={activeDay}
      />
    </div>
  );
};

export default TripPlannerPage;