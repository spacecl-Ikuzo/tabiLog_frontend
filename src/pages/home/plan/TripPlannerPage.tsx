import React, { useState } from 'react';

// Icon Components
const EditIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
  </svg>
);

const ArrowLeftIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
  </svg>
);

const ArrowRightIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
);

const HotelIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"/>
  </svg>
);

const LandmarkIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z"/>
  </svg>
);

const ShoppingIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M7 4V2C7 1.45 7.45 1 8 1h8c.55 0 1 .45 1 1v2h3c.55 0 1 .45 1 1s-.45 1-1 1h-1v13c0 1.1-.9 2-2 2H7c-1.1 0-2-.9-2-2V6H4c-.55 0-1-.45-1-1s.45-1 1-1h3zm2-2h6v2H9V2z"/>
  </svg>
);

const ParkIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66.95-2.3c.48.17.98.3 1.34.3C19 20 22 3 22 3c-1 2-8 2.25-13 3.25S2 11.5 2 13.5s1.75 3.75 1.75 3.75S7 8 17 8z"/>
  </svg>
);

const StreetIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
  </svg>
);

const WalkingIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M13.5 5.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM9.8 8.9L7 23h2.1l1.8-8 2.1 2v6h2v-7.5l-2.1-2 .6-3c1.3 1.5 3.3 2.5 5.5 2.5v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1L6 8.3V13h2V9.6l1.8-.7"/>
  </svg>
);

const MapPinIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
  </svg>
);

const DocumentIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
  </svg>
);

const CopyIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
  </svg>
);

const DeleteIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
  </svg>
);

// Header Component
const Header = () => {
  return (
    <header className="bg-orange-500 text-white px-6 py-4">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold">タビログ</h1>
        <nav className="flex items-center space-x-6">
          <a href="#" className="hover:text-orange-200 transition-colors">観光スポット紹介</a>
          <a href="#" className="hover:text-orange-200 transition-colors">マイトリップ</a>
          <button className="border border-orange-300 text-orange-300 px-4 py-2 rounded hover:bg-orange-300 hover:text-orange-500 transition-colors">
            ログアウト
          </button>
        </nav>
      </div>
    </header>
  );
};

// TripHeader Component
const TripHeader = () => {
  return (
    <div className="bg-white p-6 border-b">
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center space-x-3">
          <ArrowLeftIcon />
          <h2 className="text-2xl font-bold text-gray-800">東京2泊3日旅</h2>
        </div>
        <button className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 transition-colors">
          <EditIcon />
          <span>編集</span>
        </button>
      </div>
      
      <div className="mb-4">
        <p className="text-gray-600">2026.05.13 - 2026.05.15</p>
      </div>
      
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-sm">W</span>
          </div>
        </div>
        <div className="text-right">
          <p className="text-gray-800">旅行総額: 750000¥</p>
          <p className="text-gray-600">今日の合計: 48000¥</p>
        </div>
      </div>
    </div>
  );
};

// DayTabs Component
const DayTabs = ({ activeDay, setActiveDay }: { activeDay: number; setActiveDay: (day: number) => void }) => {
  const days = [
    { id: 1, label: "5月13日 一日目" },
    { id: 2, label: "5月14日 二日目" },
    { id: 3, label: "5月15日 三日目" }
  ];

  return (
    <div className="bg-white p-4 border-b">
      <div className="flex items-center justify-between">
        <ArrowLeftIcon />
        <div className="flex space-x-8">
          {days.map((day) => (
            <button
              key={day.id}
              onClick={() => setActiveDay(day.id)}
              className={`pb-2 border-b-2 transition-colors ${
                activeDay === day.id
                  ? 'text-gray-800 font-bold border-pink-500'
                  : 'text-gray-500 border-transparent hover:text-gray-700'
              }`}
            >
              {day.label}
            </button>
          ))}
        </div>
        <ArrowRightIcon />
      </div>
    </div>
  );
};

// TimelineItem Component
const TimelineItem = ({ 
  time, 
  duration, 
  icon, 
  location, 
  address, 
  cost, 
  isLast = false,
  onDelete
}: {
  time: string;
  duration: string;
  icon: React.ReactNode;
  location: string;
  address: string;
  cost: string;
  isLast?: boolean;
  onDelete: () => void;
}) => {
  const copyAddress = () => {
    navigator.clipboard.writeText(address);
    // 간단한 토스트 메시지 (실제로는 toast 라이브러리 사용 권장)
    alert('주소가 복사되었습니다!');
  };

  return (
    <div className="relative bg-white rounded-lg shadow-sm border border-gray-100 mb-4">
      <div className="flex items-start space-x-4 p-4">
        <div className="flex flex-col items-center">
          <div className="w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center text-white font-bold">
            {icon}
          </div>
          {!isLast && (
            <div className="w-0.5 h-12 bg-gray-300 mt-2"></div>
          )}
        </div>
        
        <div className="flex-1">
          <div className="flex items-center space-x-2 mb-2">
            <span className="text-sm font-medium text-gray-600">{time}</span>
            <span className="text-sm text-gray-500">({duration})</span>
          </div>
          
          <h3 className="font-medium text-gray-800 mb-1">{location}</h3>
          <div className="flex items-center justify-between mb-3">
            <p className="text-sm text-gray-600">{address}</p>
            <button 
              onClick={copyAddress}
              className="ml-4 p-1 text-gray-400 hover:text-gray-600 transition-colors"
              title="주소 복사"
            >
              <CopyIcon />
            </button>
          </div>
          
          <div className="flex justify-between items-end">
            <div className="flex items-center space-x-2">
              <DocumentIcon />
              <span className="text-sm text-gray-600">{cost}</span>
            </div>
            <button className="bg-pink-500 text-white px-3 py-1 rounded text-sm hover:bg-pink-600 transition-colors">
              コスト
            </button>
          </div>
        </div>
        
        {/* 삭제 버튼을 우측 상단에 배치 */}
        <button 
          onClick={onDelete}
          className="absolute top-2 right-2 p-1 text-gray-400 hover:text-red-500 transition-colors"
          title="삭제"
        >
          <DeleteIcon />
        </button>
      </div>
    </div>
  );
};

// TravelSegment Component
const TravelSegment = ({ duration, isLast = false }: { duration: string; isLast?: boolean }) => {
  return (
    <div className="relative mb-4">
      <div className="flex items-center space-x-4 py-3">
        <div className="flex flex-col items-center">
          <div className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center">
            <WalkingIcon />
          </div>
          {!isLast && (
            <div className="w-0.5 h-8 bg-gray-300 mt-2 border-l-2 border-dashed border-gray-400"></div>
          )}
        </div>
        
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-500">約{duration}</span>
            <MapPinIcon />
          </div>
        </div>
      </div>
      <div className="border-t border-gray-200 mx-4"></div>
    </div>
  );
};

// Plus Button Component
const PlusButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <div className="flex justify-center py-4">
      <button 
        onClick={onClick}
        className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center hover:bg-gray-400 transition-colors shadow-md"
      >
        <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
        </svg>
      </button>
    </div>
  );
};

// Timeline Component
const Timeline = ({ 
  activeDay, 
  spots, 
  travelSegments, 
  addSpot,
  deleteSpot
}: { 
  activeDay: number; 
  spots: any; 
  travelSegments: any; 
  addSpot: (day: number) => void;
  deleteSpot: (day: number, spotId: number) => void;
}) => {
  const dayLabels = {
    1: "一日目:火曜日",
    2: "二日目:木曜日", 
    3: "三日目:金曜日"
  };

  const departureTimes = {
    1: "09:00",
    2: "11:00",
    3: "10:00"
  };

  const currentSpots = spots[activeDay] || [];
  const currentTravelSegments = travelSegments[activeDay] || [];

  return (
    <div className="bg-gray-50 p-4 flex flex-col h-full">
      <div className="bg-pink-500 text-white px-4 py-2 rounded-t mb-4">
        <h3 className="font-medium">{dayLabels[activeDay as keyof typeof dayLabels]} 出發時間: {departureTimes[activeDay as keyof typeof departureTimes]}</h3>
      </div>
      
      {/* 관광지 리스트에만 스크롤 적용 */}
      <div className="flex-1 overflow-y-auto">
        {currentSpots.length === 0 ? (
          <div className="text-center py-8 text-gray-500">
            <p className="mb-4">아직 추가된 관광지가 없습니다.</p>
          </div>
        ) : (
          <div className="space-y-0">
            {currentSpots.map((event: any, index: number) => (
              <div key={event.id}>
                <TimelineItem
                  time={event.time}
                  duration={event.duration}
                  icon={event.icon}
                  location={event.location}
                  address={event.address}
                  cost={event.cost}
                  isLast={index === currentSpots.length - 1}
                  onDelete={() => deleteSpot(activeDay, event.id)}
                />
                {/* 마지막 관광지가 아닐 때만 이동 시간 표시 */}
                {index < currentSpots.length - 1 && index < currentTravelSegments.length && (
                  <TravelSegment
                    duration={currentTravelSegments[index].duration}
                    isLast={index === currentTravelSegments.length - 1}
                  />
                )}
              </div>
            ))}
          </div>
        )}
      </div>
      
      <PlusButton onClick={() => addSpot(activeDay)} />
    </div>
  );
};

// ItineraryPlanner Component
const ItineraryPlanner = ({ 
  activeDay, 
  setActiveDay, 
  spots, 
  travelSegments, 
  addSpot,
  deleteSpot
}: { 
  activeDay: number; 
  setActiveDay: (day: number) => void;
  spots: any;
  travelSegments: any;
  addSpot: (day: number) => void;
  deleteSpot: (day: number, spotId: number) => void;
}) => {
  return (
    <div className="flex flex-col h-full">
      <TripHeader />
      <DayTabs activeDay={activeDay} setActiveDay={setActiveDay} />
      <div className="flex-1">
        <Timeline 
          activeDay={activeDay}
          spots={spots}
          travelSegments={travelSegments}
          addSpot={addSpot}
          deleteSpot={deleteSpot}
        />
      </div>
    </div>
  );
};

// MapView Component
const MapView = () => {
  return (
    <div className="bg-gray-100 h-full flex items-center justify-center">
      <div className="text-center text-gray-500">
        <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center mx-auto mb-4">
          <MapPinIcon />
        </div>
        <h3 className="text-lg font-medium mb-2">지도 뷰</h3>
        <p className="text-sm">Google Maps 연동 예정</p>
        <div className="mt-4 p-4 bg-white rounded-lg shadow-sm">
          <p className="text-xs text-gray-400">지도 데이터 ©2025 Google 약관 200미터</p>
        </div>
      </div>
    </div>
  );
};

// TripPlannerPage Component
const TripPlannerPage = () => {
  const [activeDay, setActiveDay] = useState(2);
  const [spots, setSpots] = useState({
    1: [], // 5월 13일
    2: [
      {
        id: 1,
        time: "11:00",
        duration: "1小時",
        icon: <HotelIcon />,
        location: "アパホテル&リゾート 〈西新宿五丁目駅タワー〉",
        address: "〒151-0071 東京都渋谷区本町3丁目14-1",
        cost: ""
      },
      {
        id: 2,
        time: "11:15 - 12:45",
        duration: "1小時30分",
        icon: <LandmarkIcon />,
        location: "東京都庁北展望室",
        address: "〒163-8001 東京都新宿区西新宿2丁目8-1 東京都庁第一本庁舎 45F",
        cost: "¥0"
      },
      {
        id: 3,
        time: "13:10 - 15:10",
        duration: "2小時",
        icon: <ShoppingIcon />,
        location: "伊勢丹新宿店",
        address: "〒160-0022 東京都新宿区新宿3丁目14-1",
        cost: "¥12,000"
      },
      {
        id: 4,
        time: "15:20 - 17:10",
        duration: "2小時",
        icon: <ParkIcon />,
        location: "新宿御苑",
        address: "〒160-0014 東京都新宿区内藤町11",
        cost: "¥0"
      },
      {
        id: 5,
        time: "17:35 - 19:35",
        duration: "2小時",
        icon: <StreetIcon />,
        location: "新宿西口 思い出横丁",
        address: "〒160-0023 東京都新宿区西新宿1丁目2",
        cost: "¥32,000"
      }
    ], // 5월 14일
    3: [] // 5월 15일
  });

  const [travelSegments] = useState({
    1: [],
    2: [
      { duration: "13分" },
      { duration: "22分" },
      { duration: "6分" },
      { duration: "22分" }
    ],
    3: []
  });

  const addSpot = (day: number) => {
    const newSpot = {
      id: Date.now(),
      time: "00:00",
      duration: "1小時",
      icon: <LandmarkIcon />,
      location: "새로운 관광지",
      address: "주소를 입력하세요",
      cost: "¥0"
    };
    
    setSpots(prev => ({
      ...prev,
      [day]: [...prev[day as keyof typeof prev], newSpot]
    }));
  };

  const deleteSpot = (day: number, spotId: number) => {
    setSpots(prev => ({
      ...prev,
      [day]: prev[day as keyof typeof prev].filter((spot: any) => spot.id !== spotId)
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="flex h-[calc(100vh-80px)]">
        {/* Left Column - Itinerary Planner (60%) */}
        <div className="w-full lg:w-3/5 flex flex-col">
          <ItineraryPlanner 
            activeDay={activeDay} 
            setActiveDay={setActiveDay}
            spots={spots}
            travelSegments={travelSegments}
            addSpot={addSpot}
            deleteSpot={deleteSpot}
          />
        </div>
        
        {/* Right Column - Map View (40%) */}
        <div className="hidden lg:block lg:w-2/5">
          <MapView />
        </div>
      </div>
    </div>
  );
};

export default TripPlannerPage;
