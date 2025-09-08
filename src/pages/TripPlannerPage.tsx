import React, { useState } from 'react';
import MyPageSidebar from '../components/MyPageSidebar';
import SidebarToggleButton from '../components/SidebarToggleButton';

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

const ClockIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const SearchIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);

const CloseIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
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
    <div className="bg-white p-3 border-b">
      <div className="flex justify-between items-start mb-2">
        <div className="flex items-center space-x-2">
          <ArrowLeftIcon />
          <h2 className="text-xl font-bold text-gray-800">東京2泊3日旅</h2>
        </div>
        <button className="flex items-center space-x-1 text-gray-600 hover:text-gray-800 transition-colors">
          <EditIcon />
          <span className="text-sm">編集</span>
        </button>
      </div>
      
      <div className="mb-2">
        <p className="text-sm text-gray-600">2026.05.13 - 2026.05.15</p>
      </div>
      
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-xs">W</span>
          </div>
        </div>
        <div className="text-right">
          <p className="text-sm text-gray-800">旅行総額: 750000¥</p>
          <p className="text-xs text-gray-600">今日の合計: 48000¥</p>
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
    <div className="bg-white p-2 border-b">
      <div className="flex items-center justify-between">
        <ArrowLeftIcon />
        <div className="flex space-x-4">
          {days.map((day) => (
            <button
              key={day.id}
              onClick={() => setActiveDay(day.id)}
              className={`pb-1 border-b-2 transition-colors text-sm ${
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

// Time Preset Modal Component
const TimePresetModal = ({ 
  isOpen, 
  onClose, 
  onSelect, 
  type 
}: { 
  isOpen: boolean; 
  onClose: () => void; 
  onSelect: (value: string) => void;
  type: 'departure' | 'duration';
}) => {
  const departurePresets = [
    { label: "오전 6시", value: "06:00" },
    { label: "오전 7시", value: "07:00" },
    { label: "오전 8시", value: "08:00" },
    { label: "오전 9시", value: "09:00" },
    { label: "오전 10시", value: "10:00" },
    { label: "오전 11시", value: "11:00" },
    { label: "오후 12시", value: "12:00" },
    { label: "오후 1시", value: "13:00" },
    { label: "오후 2시", value: "14:00" },
    { label: "오후 3시", value: "15:00" },
    { label: "오후 4시", value: "16:00" },
    { label: "오후 5시", value: "17:00" },
    { label: "오후 6시", value: "18:00" },
    { label: "오후 7시", value: "19:00" },
    { label: "오후 8시", value: "20:00" },
    { label: "오후 9시", value: "21:00" }
  ];

  const durationPresets = [
    { label: "30분", value: "30분" },
    { label: "1시간", value: "1시간" },
    { label: "1시간 30분", value: "1시간 30분" },
    { label: "2시간", value: "2시간" },
    { label: "2시간 30분", value: "2시간 30분" },
    { label: "3시간", value: "3시간" },
    { label: "3시간 30분", value: "3시간 30분" },
    { label: "4시간", value: "4시간" },
    { label: "4시간 30분", value: "4시간 30분" },
    { label: "5시간", value: "5시간" },
    { label: "6시간", value: "6시간" },
    { label: "8시간", value: "8시간" }
  ];

  const presets = type === 'departure' ? departurePresets : durationPresets;

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-96 max-h-96 overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">
            {type === 'departure' ? '출발시간 선택' : '체류시간 선택'}
          </h3>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
            <CloseIcon />
          </button>
        </div>
        
        <div className="grid grid-cols-2 gap-2">
          {presets.map((preset) => (
            <button
              key={preset.value}
              onClick={() => {
                onSelect(preset.value);
                onClose();
              }}
              className="p-3 text-left border rounded-lg hover:bg-gray-50 transition-colors"
            >
              {preset.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

// Spot Search Modal Component
const SpotSearchModal = ({ 
  isOpen, 
  onClose, 
  onAddSpot 
}: { 
  isOpen: boolean; 
  onClose: () => void; 
  onAddSpot: (spot: any) => void;
}) => {
  const [searchType, setSearchType] = useState<'google' | 'manual' | 'search'>('google');
  const [searchTerm, setSearchTerm] = useState('');
  const [manualData, setManualData] = useState({
    name: '',
    address: '',
    duration: '1시간'
  });

  const handleAddSpot = () => {
    const newSpot = {
      id: Date.now(),
      time: '', // 시간은 자동 계산됨
      duration: manualData.duration,
      icon: <LandmarkIcon />,
      location: manualData.name || searchTerm,
      address: manualData.address || '주소를 입력하세요',
      cost: "¥0"
    };
    
    onAddSpot(newSpot);
    onClose();
    setSearchTerm('');
    setManualData({ name: '', address: '', duration: '1시간' });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">관광지 추가</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
            <CloseIcon />
          </button>
        </div>

        {/* 검색 방식 선택 */}
        <div className="mb-4">
          <div className="flex space-x-2 mb-3">
            <button
              onClick={() => setSearchType('google')}
              className={`px-3 py-1 rounded text-sm ${
                searchType === 'google' 
                  ? 'bg-blue-500 text-white' 
                  : 'bg-gray-200 text-gray-700'
              }`}
            >
              Google Places
            </button>
            <button
              onClick={() => setSearchType('manual')}
              className={`px-3 py-1 rounded text-sm ${
                searchType === 'manual' 
                  ? 'bg-blue-500 text-white' 
                  : 'bg-gray-200 text-gray-700'
              }`}
            >
              수동 입력
            </button>
            <button
              onClick={() => setSearchType('search')}
              className={`px-3 py-1 rounded text-sm ${
                searchType === 'search' 
                  ? 'bg-blue-500 text-white' 
                  : 'bg-gray-200 text-gray-700'
              }`}
            >
              검색
            </button>
          </div>
        </div>

        {/* Google Places 검색 */}
        {searchType === 'google' && (
          <div className="space-y-3">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                관광지 검색
              </label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Google Places에서 검색..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full p-3 border rounded-lg pr-10"
                />
                <div className="absolute right-3 top-3.5 text-gray-400">
                  <SearchIcon />
                </div>
              </div>
            </div>
            <div className="text-sm text-gray-500">
              Google Places API 연동 예정
            </div>
          </div>
        )}

        {/* 수동 입력 */}
        {searchType === 'manual' && (
          <div className="space-y-3">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                관광지 이름
              </label>
              <input
                type="text"
                placeholder="관광지 이름을 입력하세요"
                value={manualData.name}
                onChange={(e) => setManualData({...manualData, name: e.target.value})}
                className="w-full p-3 border rounded-lg"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                주소
              </label>
              <input
                type="text"
                placeholder="주소를 입력하세요"
                value={manualData.address}
                onChange={(e) => setManualData({...manualData, address: e.target.value})}
                className="w-full p-3 border rounded-lg"
              />
            </div>
          </div>
        )}

        {/* 일반 검색 */}
        {searchType === 'search' && (
          <div className="space-y-3">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                관광지 검색
              </label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="관광지를 검색하세요..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full p-3 border rounded-lg pr-10"
                />
                <div className="absolute right-3 top-3.5 text-gray-400">
                  <SearchIcon />
                </div>
              </div>
            </div>
            <div className="text-sm text-gray-500">
              검색 결과가 여기에 표시됩니다
            </div>
          </div>
        )}

        {/* 체류시간 설정 */}
        <div className="mt-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              체류시간
            </label>
            <input
              type="text"
              placeholder="1시간"
              value={manualData.duration}
              onChange={(e) => setManualData({...manualData, duration: e.target.value})}
              className="w-full p-3 border rounded-lg"
            />
            <p className="text-xs text-gray-500 mt-1">
              출발시간은 자동으로 계산됩니다
            </p>
          </div>
        </div>

        {/* 버튼 */}
        <div className="flex space-x-3 mt-6">
          <button
            onClick={onClose}
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
          >
            취소
          </button>
          <button
            onClick={handleAddSpot}
            className="flex-1 px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition-colors"
          >
            추가
          </button>
        </div>
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
  onDelete,
  onEditDuration
}: {
  time: string;
  duration: string;
  icon: React.ReactNode;
  location: string;
  address: string;
  cost: string;
  isLast?: boolean;
  onDelete: () => void;
  onEditDuration: () => void;
}) => {
  const copyAddress = () => {
    navigator.clipboard.writeText(address);
    alert('주소가 복사되었습니다!');
  };

  return (
    <div className="relative bg-white rounded-lg shadow-sm border border-gray-100 mb-2">
      <div className="flex items-start space-x-3 p-3">
        <div className="flex flex-col items-center">
          <div className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center text-white font-bold">
            {icon}
          </div>
          {!isLast && (
            <div className="w-0.5 h-8 bg-gray-300 mt-1"></div>
          )}
        </div>
        
        <div className="flex-1">
          <div className="flex items-center space-x-1 mb-1">
            <span className="text-sm font-medium text-gray-600">{time}</span>
            <span className="text-xs text-gray-500">({duration})</span>
            <button
              onClick={onEditDuration}
              className="p-0.5 text-gray-400 hover:text-gray-600 transition-colors"
              title="체류시간 편집"
            >
              <ClockIcon />
            </button>
          </div>
          
          <h3 className="font-medium text-gray-800 mb-1 text-sm">{location}</h3>
          <div className="flex items-center justify-between mb-2">
            <p className="text-xs text-gray-600 flex-1 pr-2">{address}</p>
            <button 
              onClick={copyAddress}
              className="p-0.5 text-gray-400 hover:text-gray-600 transition-colors flex-shrink-0"
              title="주소 복사"
            >
              <CopyIcon />
            </button>
          </div>
          
          <div className="flex justify-between items-end">
            <div className="flex items-center space-x-2">
              <span className="text-xs text-gray-600">{cost}</span>
            </div>
            <button className="bg-pink-500 text-white px-2 py-1 rounded text-xs hover:bg-pink-600 transition-colors">
              コスト
            </button>
          </div>
        </div>
        
        {/* 삭제 버튼을 우측 상단에 배치 */}
        <button 
          onClick={onDelete}
          className="absolute top-1 right-1 p-0.5 text-gray-400 hover:text-red-500 transition-colors"
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
    <div className="relative mb-2">
      <div className="flex items-center space-x-3 py-2">
        <div className="flex flex-col items-center">
          <div className="w-5 h-5 bg-gray-200 rounded-full flex items-center justify-center">
            <WalkingIcon />
          </div>
          {!isLast && (
            <div className="w-0.5 h-6 bg-gray-300 mt-1 border-l-2 border-dashed border-gray-400"></div>
          )}
        </div>
        
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <span className="text-xs text-gray-500">約{duration}</span>
            <MapPinIcon />
          </div>
        </div>
      </div>
      <div className="border-t border-gray-200 mx-3"></div>
    </div>
  );
};

// Plus Button Component
const PlusButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <div className="flex justify-center py-2">
      <button 
        onClick={onClick}
        className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center hover:bg-gray-400 transition-colors shadow-md"
      >
        <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
  deleteSpot,
  editSpot,
  departureTime,
  onEditDepartureTime
}: { 
  activeDay: number; 
  spots: any; 
  travelSegments: any; 
  addSpot: (day: number) => void;
  deleteSpot: (day: number, spotId: number) => void;
  editSpot: (day: number, spotId: number) => void;
  departureTime: string;
  onEditDepartureTime: () => void;
}) => {
  const dayLabels = {
    1: "一日目:火曜日",
    2: "二日目:木曜日", 
    3: "三日目:金曜日"
  };

  const currentSpots = spots[activeDay] || [];
  const currentTravelSegments = travelSegments[activeDay] || [];

  return (
    <div className="bg-gray-50 p-2 flex flex-col h-full">
      <div className="bg-pink-500 text-white px-3 py-1 rounded-t mb-2 flex justify-between items-center">
        <h3 className="font-medium text-sm">{dayLabels[activeDay as keyof typeof dayLabels]} 出發時間: {departureTime}</h3>
        <button 
          onClick={onEditDepartureTime}
          className="p-0.5 hover:bg-pink-600 rounded transition-colors"
          title="출발시간 편집"
        >
          <ClockIcon />
        </button>
      </div>
      
      {/* 관광지 리스트에만 스크롤 적용 */}
      <div className="flex-1 overflow-y-auto">
        {currentSpots.length === 0 ? (
          <div className="text-center py-4 text-gray-500">
            <p className="mb-2 text-sm">아직 추가된 관광지가 없습니다.</p>
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
                  onEditDuration={() => editSpot(activeDay, event.id)}
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
  deleteSpot,
  editSpot,
  departureTime,
  onEditDepartureTime
}: { 
  activeDay: number; 
  setActiveDay: (day: number) => void;
  spots: any;
  travelSegments: any;
  addSpot: (day: number) => void;
  deleteSpot: (day: number, spotId: number) => void;
  editSpot: (day: number, spotId: number) => void;
  departureTime: string;
  onEditDepartureTime: () => void;
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
          editSpot={editSpot}
          departureTime={departureTime}
          onEditDepartureTime={onEditDepartureTime}
        />
      </div>
    </div>
  );
};

// MapView Component
const MapView = () => {
  return (
    <div className="bg-gray-100 h-full flex items-center justify-center border-l-2 border-gray-200">
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

// 시간 계산 유틸리티 함수
const calculateSpotTimes = (spots: any[], departureTime: string, travelSegments: any[]) => {
  if (spots.length === 0) return [];

  const calculateTime = (timeStr: string, minutesToAdd: number) => {
    const [hours, minutes] = timeStr.split(':').map(Number);
    const totalMinutes = hours * 60 + minutes + minutesToAdd;
    const newHours = Math.floor(totalMinutes / 60);
    const newMinutes = totalMinutes % 60;
    return `${newHours.toString().padStart(2, '0')}:${newMinutes.toString().padStart(2, '0')}`;
  };


  const parseTravelTime = (travelTime: string) => {
    return parseInt(travelTime.replace('분', '')) || 0;
  };

  const updatedSpots = [...spots];
  let currentTime = departureTime;

  updatedSpots.forEach((spot, index) => {
    // 스팟 도착 시간 설정
    spot.time = currentTime;
    
    // 다음 스팟으로 이동 시간 계산
    if (index < updatedSpots.length - 1 && travelSegments[index]) {
      const travelMinutes = parseTravelTime(travelSegments[index].duration);
      currentTime = calculateTime(currentTime, travelMinutes);
    }
  });

  return updatedSpots;
};

// ResizeHandle Component
const ResizeHandle = ({ onResize }: { onResize: (deltaX: number) => void }) => {
  const [isDragging, setIsDragging] = useState(false);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    e.preventDefault();
  };

  React.useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        onResize(e.movementX);
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, onResize]);

  return (
    <div
      className={`w-1 bg-gray-300 hover:bg-blue-500 cursor-col-resize transition-colors ${
        isDragging ? 'bg-blue-500' : ''
      }`}
      onMouseDown={handleMouseDown}
      style={{ minHeight: '100%' }}
    />
  );
};

// TripPlannerPage Component
const TripPlannerPage = () => {
  const [activeDay, setActiveDay] = useState(2);
  const [leftPanelWidth, setLeftPanelWidth] = useState(30); // 플랜 30%, 지도 70%
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [departureTimes, setDepartureTimes] = useState({
    1: "09:00",
    2: "11:00", 
    3: "10:00"
  });

  const [spots, setSpots] = useState({
    1: [], // 5월 13일
    2: [
      {
        id: 1,
        time: "11:00",
        duration: "1시간",
        icon: <HotelIcon />,
        location: "アパホテル&リゾート 〈西新宿五丁目駅タワー〉",
        address: "〒151-0071 東京都渋谷区本町3丁目14-1",
        cost: ""
      },
      {
        id: 2,
        time: "11:15",
        duration: "1시간 30분",
        icon: <LandmarkIcon />,
        location: "東京都庁北展望室",
        address: "〒163-8001 東京都新宿区西新宿2丁目8-1 東京都庁第一本庁舎 45F",
        cost: "¥0"
      },
      {
        id: 3,
        time: "13:10",
        duration: "2시간",
        icon: <ShoppingIcon />,
        location: "伊勢丹新宿店",
        address: "〒160-0022 東京都新宿区新宿3丁目14-1",
        cost: "¥12,000"
      },
      {
        id: 4,
        time: "15:20",
        duration: "2시간",
        icon: <ParkIcon />,
        location: "新宿御苑",
        address: "〒160-0014 東京都新宿区内藤町11",
        cost: "¥0"
      },
      {
        id: 5,
        time: "17:35",
        duration: "2시간",
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
      { duration: "13분" },
      { duration: "22분" },
      { duration: "6분" },
      { duration: "22분" }
    ],
    3: []
  });

  // 모달 상태 관리
  const [isSpotModalOpen, setIsSpotModalOpen] = useState(false);
  const [isTimeModalOpen, setIsTimeModalOpen] = useState(false);
  const [timeModalType, setTimeModalType] = useState<'departure' | 'duration'>('departure');
  const [editingSpot, setEditingSpot] = useState<{day: number, spotId: number} | null>(null);

  const addSpot = () => {
    setIsSpotModalOpen(true);
  };

  const handleAddSpot = (spotData: any) => {
    setSpots(prev => {
      const newSpots = [...prev[activeDay as keyof typeof prev], spotData];
      const updatedSpots = calculateSpotTimes(newSpots, departureTimes[activeDay as keyof typeof departureTimes], travelSegments[activeDay as keyof typeof travelSegments]);
      
      return {
        ...prev,
        [activeDay]: updatedSpots
      };
    });
  };

  const deleteSpot = (day: number, spotId: number) => {
    setSpots(prev => {
      const filteredSpots = prev[day as keyof typeof prev].filter((spot: any) => spot.id !== spotId);
      const updatedSpots = calculateSpotTimes(filteredSpots, departureTimes[day as keyof typeof departureTimes], travelSegments[day as keyof typeof travelSegments]);
      
      return {
        ...prev,
        [day]: updatedSpots
      };
    });
  };

  const editSpot = (day: number, spotId: number) => {
    setEditingSpot({ day, spotId });
    setTimeModalType('duration');
    setIsTimeModalOpen(true);
  };

  const handleTimeSelect = (value: string) => {
    if (editingSpot) {
      if (timeModalType === 'departure') {
        // 출발시간 변경
        setDepartureTimes(prev => ({
          ...prev,
          [editingSpot.day]: value
        }));
        
        // 해당 날짜의 모든 스팟 시간 재계산
        setSpots(prev => {
          const currentSpots = prev[editingSpot.day as keyof typeof prev];
          const updatedSpots = calculateSpotTimes(currentSpots, value, travelSegments[editingSpot.day as keyof typeof travelSegments]);
          
          return {
            ...prev,
            [editingSpot.day]: updatedSpots
          };
        });
      } else {
        // 체류시간 변경
        setSpots(prev => {
          const updatedSpots = prev[editingSpot.day as keyof typeof prev].map((spot: any) => 
            spot.id === editingSpot.spotId 
              ? { ...spot, duration: value }
              : spot
          );
          
          const recalculatedSpots = calculateSpotTimes(updatedSpots, departureTimes[editingSpot.day as keyof typeof departureTimes], travelSegments[editingSpot.day as keyof typeof travelSegments]);
          
          return {
            ...prev,
            [editingSpot.day]: recalculatedSpots
          };
        });
      }
      setEditingSpot(null);
    }
  };

  const handleEditDepartureTime = () => {
    setTimeModalType('departure');
    setIsTimeModalOpen(true);
  };

  const handleResize = (deltaX: number) => {
    const containerWidth = window.innerWidth;
    const deltaPercent = (deltaX / containerWidth) * 100;
    const newLeftWidth = Math.max(30, Math.min(80, leftPanelWidth + deltaPercent));
    setLeftPanelWidth(newLeftWidth);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="flex h-[calc(100vh-80px)]">
        {/* Left Column - Itinerary Planner */}
        <div 
          className="flex flex-col bg-white border-r-2 border-gray-200 ml-12"
          style={{ width: `${leftPanelWidth}%` }}
        >
          <ItineraryPlanner 
            activeDay={activeDay} 
            setActiveDay={setActiveDay}
            spots={spots}
            travelSegments={travelSegments}
            addSpot={addSpot}
            deleteSpot={deleteSpot}
            editSpot={editSpot}
            departureTime={departureTimes[activeDay as keyof typeof departureTimes]}
            onEditDepartureTime={handleEditDepartureTime}
          />
        </div>
        
        {/* Resize Handle */}
        <ResizeHandle onResize={handleResize} />
        
        {/* Right Column - Map View */}
        <div 
          className="flex flex-col"
          style={{ width: `${100 - leftPanelWidth}%` }}
        >
          <MapView />
        </div>
      </div>

      {/* 사이드바 토글 버튼 */}
      <SidebarToggleButton 
        isOpen={isSidebarOpen}
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      />

      {/* 마이페이지 사이드바 */}
      <MyPageSidebar 
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />

      {/* 모달들 */}
      <SpotSearchModal 
        isOpen={isSpotModalOpen}
        onClose={() => setIsSpotModalOpen(false)}
        onAddSpot={handleAddSpot}
      />
      
      <TimePresetModal
        isOpen={isTimeModalOpen}
        onClose={() => {
          setIsTimeModalOpen(false);
          setEditingSpot(null);
        }}
        onSelect={handleTimeSelect}
        type={timeModalType}
      />
    </div>
  );
};

export default TripPlannerPage;
