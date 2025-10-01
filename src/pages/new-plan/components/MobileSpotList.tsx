import React from 'react';
import { MapPin, Edit, Trash2, Calculator, ArrowRight, Plus } from 'lucide-react';
import SvgIcon from '@/components/ui/SvgIcon';
import { Spot, Expense, Plan } from '@/lib/type';

interface TravelSegment {
  duration: string;
  fromSpot?: Spot;
  toSpot?: Spot;
  transportMode: 'walking' | 'driving' | 'transit';
  isFallback?: boolean;
  originalMode?: 'walking' | 'driving' | 'transit';
  isZeroResults?: boolean;
}

interface MobileSpotListProps {
  spots: Record<number, Spot[]>;
  travelSegments: Record<number, TravelSegment[]>;
  spotExpenses: Record<number, Expense[]>;
  activeDay: number;
  departureTime: { hour: number; minute: number };
  planData: Plan;
  userRole: string;
  onAddSpot: () => void;
  onEditSpot: (spot: Spot) => void;
  onDeleteSpot: (day: number, spotId: number) => void;
  onCalculateCost: (spot: Spot) => void;
  onSetDepartureTime: () => void;
  getEndTime: (startTime: string, duration: string) => string;
}

const MobileSpotList: React.FC<MobileSpotListProps> = ({
  spots,
  travelSegments,
  spotExpenses,
  activeDay,
  departureTime,
  planData,
  userRole,
  onAddSpot,
  onEditSpot,
  onDeleteSpot,
  onCalculateCost,
  onSetDepartureTime,
  getEndTime,
}) => {
  const currentSpots = spots[activeDay] || [];
  const currentSegments = travelSegments[activeDay] || [];

  const dayNames = ['一日目', '二日目', '三日目', '四日目', '五日目', '六日目', '七日目', '八日目', '九日目', '十日目'];
  const weekDays = ['日曜日', '月曜日', '火曜日', '水曜日', '木曜日', '金曜日', '土曜日'];

  const getDayLabel = () => {
    if (planData?.dailyPlans && planData.dailyPlans[activeDay - 1]) {
      const visitDate = new Date(planData.dailyPlans[activeDay - 1].visitDate);
      const dayOfWeek = weekDays[visitDate.getDay()];
      return `${dayNames[activeDay - 1]}: ${dayOfWeek}`;
    }

    // 기본값: startDate와 endDate로 요일 계산
    if (planData?.startDate) {
      const startDate = new Date(planData.startDate);
      const targetDate = new Date(startDate);
      targetDate.setDate(startDate.getDate() + (activeDay - 1));
      const dayOfWeek = weekDays[targetDate.getDay()];
      return `${dayNames[activeDay - 1]}: ${dayOfWeek}`;
    }

    return activeDay === 1 ? '一日目: 火曜日' : activeDay === 2 ? '二日目: 木曜日' : '三日目: 金曜日';
  };

  return (
    <div className="p-3">
      {/* 현재 날짜 정보 */}
      <div className="px-3 py-2 bg-pink-500 text-white rounded-lg mb-3">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium">{getDayLabel()}</span>
          <button
            onClick={onSetDepartureTime}
            className="text-xs bg-white text-pink-600 px-3 py-1 rounded hover:bg-gray-50 transition-colors font-medium"
          >
            ⏰ {departureTime.hour.toString().padStart(2, '0')}:{departureTime.minute.toString().padStart(2, '0')}
          </button>
        </div>
      </div>

      {/* 스팟 리스트 */}
      {currentSpots.length === 0 ? (
        <div className="text-center py-8">
          <MapPin className="w-12 h-12 text-gray-300 mx-auto mb-3" />
          <h3 className="text-base font-medium text-gray-900 mb-2">まだ観光地がありません</h3>
          <p className="text-sm text-gray-500 mb-4">観光地を追加して旅行計画を立ててみましょう</p>
        </div>
      ) : (
        <div className="space-y-3">
          {currentSpots.map((spot, index) => {
            const nextSegment = currentSegments.find(
              (segment) => segment.fromSpot?.id === spot.id && segment.toSpot?.id === currentSpots[index + 1]?.id,
            );

            return (
              <div key={spot.id}>
                {/* 스팟 카드 */}
                <div className="bg-white border border-gray-200 rounded-lg p-3 shadow-sm">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4 text-blue-500" />
                      <h3 className="font-medium text-gray-900 text-sm">{spot.location}</h3>
                    </div>
                    {/* 편집 및 삭제 버튼 - VIEWER 역할이 아닐 때만 표시 */}
                    {userRole !== 'VIEWER' && (
                      <div className="flex items-center space-x-1">
                        <button
                          onClick={() => onEditSpot(spot)}
                          className="p-1 text-gray-400 hover:text-blue-600 transition-colors"
                          title="편집"
                        >
                          <Edit className="w-3 h-3" />
                        </button>
                        <button
                          onClick={() => onDeleteSpot(activeDay, spot.id)}
                          className="p-1 text-gray-400 hover:text-red-600 transition-colors"
                          title="삭제"
                        >
                          <Trash2 className="w-3 h-3" />
                        </button>
                      </div>
                    )}
                  </div>

                  <p className="text-xs text-gray-600 mb-2">{spot.address}</p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3 text-xs text-gray-500">
                      <div className="flex items-center space-x-1">
                        <SvgIcon name="clock" size={12} className="text-gray-500" />
                        <span>
                          {spot.time} - {getEndTime(spot.time, spot.duration)}
                        </span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <SvgIcon name="clock" size={12} className="text-gray-500" />
                        <span>{spot.duration}</span>
                      </div>
                    </div>

                    <div className="flex flex-col items-end space-y-1">
                      {/* 지출 정보 표시 */}
                      {(() => {
                        const expenses = spotExpenses[spot.id];
                        if (expenses && expenses.length > 0) {
                          const total = expenses.reduce((sum: number, expense: Expense) => {
                            return sum + expense.amount;
                          }, 0);
                          return <span className="text-xs font-bold text-gray-900">{total.toLocaleString()}円</span>;
                        }
                        return null;
                      })()}

                      {/* 비용 계산 버튼 - VIEWER 역할이 아닐 때만 표시 */}
                      {userRole !== 'VIEWER' && (
                        <button
                          onClick={() => onCalculateCost(spot)}
                          className="flex items-center space-x-1 px-2 py-1 bg-orange-500 text-white text-xs font-medium rounded hover:bg-orange-600 transition-colors"
                          title="비용 계산"
                        >
                          <Calculator className="w-3 h-3" />
                          <span>コスト</span>
                        </button>
                      )}
                    </div>
                  </div>
                </div>

                {/* 이동 정보 */}
                {nextSegment && (
                  <div className="flex items-center justify-center my-2">
                    <div className="flex items-center space-x-2 bg-gray-50 px-3 py-2 rounded-lg">
                      <SvgIcon
                        name={nextSegment.transportMode === 'walking' ? 'walking' : 'car'}
                        size={12}
                        className="text-gray-600"
                      />
                      <span className="text-xs text-gray-600">{nextSegment.duration}</span>
                      {nextSegment.isZeroResults && (
                        <span className="text-xs text-red-600 bg-red-100 px-2 py-1 rounded">⚠️ 경로없음</span>
                      )}
                      <div className="w-3 h-3 bg-blue-500 rounded flex items-center justify-center">
                        <ArrowRight className="w-2 h-2 text-white" />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}

      {/* 하단 + 버튼 - VIEWER 역할이 아닐 때만 표시 */}
      {userRole !== 'VIEWER' && (
        <div className="mt-4">
          <button
            onClick={onAddSpot}
            className="w-full flex items-center justify-center gap-2 py-3 bg-gray-200 text-gray-600 rounded-lg hover:bg-gray-300 transition-colors"
          >
            <Plus className="w-4 h-4" />
            <span>観光地を追加</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default MobileSpotList;
