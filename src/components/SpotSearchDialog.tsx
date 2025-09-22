import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './ui/dialog';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Search, MapPin, Star } from 'lucide-react';
import { axiosInstance } from '../api/axios';

interface GooglePlaceResponse {
  placeId: string;
  name: string;
  formattedAddress: string;
  vicinity?: string;
  latitude: number;
  longitude: number;
  types?: string[];
  rating?: number;
  userRatingsTotal?: number;
  priceLevel?: string;
  photoReference?: string;
  businessStatus?: string;
}

interface SpotSearchDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onAddSpot: (spot: any, duration?: string, transportMode?: 'walking' | 'driving' | 'transit') => void;
  day: number;
  currentSpotCount: number; // 현재 날짜의 관광지 개수
}

const SpotSearchDialog: React.FC<SpotSearchDialogProps> = ({
  isOpen,
  onClose,
  onAddSpot,
  currentSpotCount
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<GooglePlaceResponse[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [selectedSpot, setSelectedSpot] = useState<GooglePlaceResponse | null>(null);
  const [selectedDuration, setSelectedDuration] = useState('1時間');
  const [selectedTransportMode, setSelectedTransportMode] = useState<'walking' | 'driving' | 'transit'>('walking');
  const [selectedCost, setSelectedCost] = useState(0);

  const searchPlaces = async () => {
    if (!searchQuery.trim()) return;
    
    setIsSearching(true);
    try {
      console.log('관광지 검색 시작:', searchQuery);
      
      // 백엔드 연결 테스트
      try {
        await axiosInstance.get('/api/spots/google-search?query=test');
        console.log('백엔드 연결 성공');
      } catch (testError) {
        console.error('백엔드 연결 실패:', testError);
        throw testError;
      }
      
      const response = await axiosInstance.get(`/api/spots/google-search?query=${encodeURIComponent(searchQuery)}&language=ja&region=JP`);
      console.log('검색 결과:', response.data);
      
      // 백엔드 ApiResponse 구조에 맞게 데이터 추출
      if (response.data && response.data.success && response.data.data) {
        setSearchResults(response.data.data);
        console.log('실제 검색 결과 데이터:', response.data.data);
      } else {
        console.warn('예상하지 못한 응답 구조:', response.data);
        setSearchResults([]);
      }
    } catch (error) {
      console.error('장소 검색 실패:', error);
      
      // 백엔드가 연결되지 않은 경우 Mock 데이터 사용
      if ((error as any).code === 'ERR_NETWORK' || (error as any).response?.status >= 500) {
        console.log('백엔드 서버가 실행되지 않음. Mock 데이터 사용');
        setSearchResults([
          {
            placeId: 'mock_1',
            name: `${searchQuery} 관광지`,
            formattedAddress: '도쿄, 일본',
            latitude: 35.6762,
            longitude: 139.6503,
            rating: 4.2,
            userRatingsTotal: 1000,
            types: ['tourist_attraction']
          }
        ]);
      } else {
        // 다른 오류의 경우 빈 결과
        setSearchResults([]);
      }
    } finally {
      setIsSearching(false);
    }
  };

  const handleAddSpot = async () => {
    if (!selectedSpot) return;

    try {
      // 첫 번째 관광지(숙소)인 경우 기본값 사용
      const isFirstSpot = currentSpotCount === 0;
      
      const newSpot = {
        id: Date.now(),
        time: "00:00",
        duration: isFirstSpot ? "1時間" : selectedDuration, // 첫 번째는 기본값
        icon: <MapPin className="w-4 h-4" />,
        location: selectedSpot.name,
        address: selectedSpot.formattedAddress,
        cost: `¥${selectedCost}`,
        latitude: selectedSpot.latitude,
        longitude: selectedSpot.longitude,
        rating: selectedSpot.rating,
        userRatingsTotal: selectedSpot.userRatingsTotal,
        transportMode: isFirstSpot ? undefined : selectedTransportMode // 첫 번째는 이동수단 없음
      };

      onAddSpot(newSpot, isFirstSpot ? "1時間" : selectedDuration, isFirstSpot ? undefined : selectedTransportMode);
      onClose();
      setSearchQuery('');
      setSearchResults([]);
      setSelectedSpot(null);
      setSelectedDuration('1時間');
      setSelectedTransportMode('walking');
      setSelectedCost(0);
    } catch (error) {
      console.error('관광지 추가 실패:', error);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      searchPlaces();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] flex flex-col">
        <DialogHeader className="flex-shrink-0">
          <DialogTitle className="flex items-center gap-2">
            <Search className="w-5 h-5" />
            観光地検索・追加
          </DialogTitle>
          <DialogDescription>
            観光地を検索して旅行計画に追加できます
          </DialogDescription>
        </DialogHeader>

        <div className="flex flex-col flex-1 min-h-0 space-y-4">
          {/* 검색 입력 */}
          <div className="flex gap-2 flex-shrink-0">
            <Input
              placeholder="観光地名、住所、またはキーワードを入力してください"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyPress={handleKeyPress}
              className="flex-1"
            />
            <Button 
              onClick={searchPlaces} 
              disabled={isSearching || !searchQuery.trim()}
              className="px-6"
            >
              {isSearching ? '検索中...' : '検索'}
            </Button>
          </div>

          {/* 검색 결과 */}
          {searchResults.length > 0 && (
            <div className="space-y-2 flex-1 min-h-0 overflow-y-auto">
              <h3 className="font-medium text-gray-700 flex-shrink-0">検索結果 ({searchResults.length}件)</h3>
              {searchResults.map((place) => {
                console.log('렌더링할 장소:', place);
                return (
                <div
                  key={place.placeId}
                  className={`p-3 border rounded-lg cursor-pointer transition-colors ${
                    selectedSpot?.placeId === place.placeId
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                  onClick={() => setSelectedSpot(place)}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900">{place.name}</h4>
                      <p className="text-sm text-gray-600 mt-1">{place.formattedAddress}</p>
                      
                      {place.rating && (
                        <div className="flex items-center gap-1 mt-2">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="text-sm text-gray-600">
                            {place.rating.toFixed(1)} ({place.userRatingsTotal?.toLocaleString()}개 리뷰)
                          </span>
                        </div>
                      )}
                    </div>
                    <MapPin className="w-5 h-5 text-gray-400" />
                  </div>
                </div>
                );
              })}
            </div>
          )}

          {/* 선택된 관광지 정보 */}
          {selectedSpot && (
            <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg flex-shrink-0">
              <h4 className="font-medium text-blue-900 mb-2">選択された観光地</h4>
              <p className="text-blue-800">{selectedSpot.name}</p>
              <p className="text-sm text-blue-600">{selectedSpot.formattedAddress}</p>
              
              {/* 첫 번째 관광지(숙소)가 아닌 경우에만 체류시간과 이동수단 표시 */}
              {currentSpotCount > 0 && (
                <>
                  {/* 체류 시간 선택 */}
                  <div className="mt-3">
                    <label className="block text-sm font-medium text-blue-900 mb-2">滞在時間</label>
                    <select
                      value={selectedDuration}
                      onChange={(e) => setSelectedDuration(e.target.value)}
                      className="w-full p-2 border border-blue-300 rounded-md bg-white"
                    >
                      <option value="30分">30分</option>
                      <option value="1時間">1時間</option>
                      <option value="1時間30分">1時間30分</option>
                      <option value="2時間">2時間</option>
                      <option value="2時間30分">2時間30分</option>
                      <option value="3時間">3時間</option>
                      <option value="3時間30分">3時間30分</option>
                      <option value="4時間">4時間</option>
                      <option value="4時間30分">4時間30分</option>
                      <option value="5時間">5時間</option>
                    </select>
                  </div>
                  
                  {/* 교통수단 선택 */}
                  <div className="mt-3">
                    <label className="block text-sm font-medium text-blue-900 mb-2">移動手段</label>
                    <select
                      value={selectedTransportMode}
                      onChange={(e) => setSelectedTransportMode(e.target.value as 'walking' | 'driving' | 'transit')}
                      className="w-full p-2 border border-blue-300 rounded-md bg-white"
                    >
                      <option value="walking">🚶 徒歩</option>
                      <option value="driving">🚗 車</option>
                    </select>
                  </div>
                  
                </>
              )}
              
              {/* 비용 입력 (모든 관광지에 대해) */}
              <div className="mt-3">
                <label className="block text-sm font-medium text-blue-900 mb-2">基本費用 (円)</label>
                <input
                  type="number"
                  value={selectedCost}
                  onChange={(e) => setSelectedCost(parseInt(e.target.value) || 0)}
                  placeholder="0"
                  min="0"
                  className="w-full p-2 border border-blue-300 rounded-md bg-white"
                />
                <p className="text-xs text-blue-600 mt-1">
                  {currentSpotCount === 0 ? '宿泊料金や入場料を入力してください' : '入場料や基本料金を入力してください'}
                </p>
              </div>
              
              {/* 첫 번째 관광지인 경우 안내 메시지 */}
              {currentSpotCount === 0 && (
                <div className="mt-3 p-3 bg-green-50 border border-green-200 rounded-md">
                  <p className="text-sm text-green-800">
                    🏨 最初の観光地（宿泊施設）として追加されます。移動手段と滞在時間は自動設定されます。
                  </p>
                </div>
              )}
            </div>
          )}

          {/* 액션 버튼 */}
          <div className="flex justify-end gap-2 pt-4 border-t flex-shrink-0">
            <Button variant="outline" onClick={onClose}>
              キャンセル
            </Button>
            <Button 
              onClick={handleAddSpot}
              disabled={!selectedSpot}
              className="bg-blue-600 hover:bg-blue-700"
            >
              スケジュールに追加
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SpotSearchDialog;
