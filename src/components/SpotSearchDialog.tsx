import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Search, MapPin, Clock, Star } from 'lucide-react';
import { axiosInstance } from '../api/axios';

interface GooglePlaceResponse {
  placeId: string;
  name: string;
  formattedAddress: string;
  latitude: number;
  longitude: number;
  rating?: number;
  userRatingsTotal?: number;
  types?: string[];
}

interface SpotSearchDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onAddSpot: (spot: any) => void;
  day: number;
}

const SpotSearchDialog: React.FC<SpotSearchDialogProps> = ({
  isOpen,
  onClose,
  onAddSpot,
  day
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<GooglePlaceResponse[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [selectedSpot, setSelectedSpot] = useState<GooglePlaceResponse | null>(null);

  const searchPlaces = async () => {
    if (!searchQuery.trim()) return;
    
    setIsSearching(true);
    try {
      const response = await axiosInstance.get(`/api/spots/search?query=${encodeURIComponent(searchQuery)}`);
      setSearchResults(response.data);
    } catch (error) {
      console.error('장소 검색 실패:', error);
      // Mock 데이터 사용 (API 키가 없을 때)
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
    } finally {
      setIsSearching(false);
    }
  };

  const handleAddSpot = async () => {
    if (!selectedSpot) return;

    try {
      // 이동 시간 계산을 위한 API 호출 (이전 관광지가 있는 경우)
      const newSpot = {
        id: Date.now(),
        time: "00:00",
        duration: "1시간",
        icon: <MapPin className="w-4 h-4" />,
        location: selectedSpot.name,
        address: selectedSpot.formattedAddress,
        cost: "¥0",
        latitude: selectedSpot.latitude,
        longitude: selectedSpot.longitude,
        rating: selectedSpot.rating,
        userRatingsTotal: selectedSpot.userRatingsTotal
      };

      onAddSpot(newSpot);
      onClose();
      setSearchQuery('');
      setSearchResults([]);
      setSelectedSpot(null);
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
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-hidden">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Search className="w-5 h-5" />
            관광지 검색 및 추가
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          {/* 검색 입력 */}
          <div className="flex gap-2">
            <Input
              placeholder="관광지명, 주소, 또는 키워드를 입력하세요"
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
              {isSearching ? '검색 중...' : '검색'}
            </Button>
          </div>

          {/* 검색 결과 */}
          {searchResults.length > 0 && (
            <div className="space-y-2 max-h-96 overflow-y-auto">
              <h3 className="font-medium text-gray-700">검색 결과</h3>
              {searchResults.map((place) => (
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
                            {place.rating} ({place.userRatingsTotal?.toLocaleString()}개 리뷰)
                          </span>
                        </div>
                      )}
                    </div>
                    <MapPin className="w-5 h-5 text-gray-400" />
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* 선택된 관광지 정보 */}
          {selectedSpot && (
            <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <h4 className="font-medium text-blue-900 mb-2">선택된 관광지</h4>
              <p className="text-blue-800">{selectedSpot.name}</p>
              <p className="text-sm text-blue-600">{selectedSpot.formattedAddress}</p>
            </div>
          )}

          {/* 액션 버튼 */}
          <div className="flex justify-end gap-2 pt-4 border-t">
            <Button variant="outline" onClick={onClose}>
              취소
            </Button>
            <Button 
              onClick={handleAddSpot}
              disabled={!selectedSpot}
              className="bg-blue-600 hover:bg-blue-700"
            >
              일정에 추가
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SpotSearchDialog;
