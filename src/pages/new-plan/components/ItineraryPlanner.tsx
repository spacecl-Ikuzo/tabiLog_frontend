import React from 'react';
import { ArrowLeft, ArrowRight, MapPin, Plus } from 'lucide-react';
import { DndContext, closestCenter, KeyboardSensor, PointerSensor, useSensor, useSensors } from '@dnd-kit/core';
import { SortableContext, sortableKeyboardCoordinates, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { Plan, Spot, Expense, PlanMember, DailyPlan } from '@/lib/type';
import SortableSpotItem from './SortableSpotItem';
import { getDayDate } from '../utils/tripPlannerUtils';

interface TravelSegment {
  duration: string;
  fromSpot?: Spot;
  toSpot?: Spot;
  transportMode: 'walking' | 'driving' | 'transit';
  isFallback?: boolean;
  originalMode?: 'walking' | 'driving' | 'transit';
  isZeroResults?: boolean;
}

interface ItineraryPlannerProps {
  planData: Plan;
  isLoadingPlan: boolean;
  spots: Record<number, Spot[]>;
  travelSegments: Record<number, TravelSegment[]>;
  spotExpenses: Record<number, Expense[]>;
  activeDay: number;
  departureTime: { hour: number; minute: number };
  tripTotal: number;
  dayTotal: number;
  userRole: string;
  onBackClick: () => void;
  onAddSpot: () => void;
  onEditSpot: (spot: Spot) => void;
  onDeleteSpot: (day: number, spotId: number) => void;
  onMoveSpotUp: (day: number, spotIndex: number) => void;
  onMoveSpotDown: (day: number, spotIndex: number) => void;
  onCalculateCost: (spot: Spot) => void;
  onSetActiveDay: (day: number) => void;
  onSetDepartureTime: () => void;
  onDragEnd: (event: any) => void;
  getEndTime: (startTime: string, duration: string) => string;
}

const ItineraryPlanner: React.FC<ItineraryPlannerProps> = ({
  planData,
  isLoadingPlan,
  spots,
  travelSegments,
  spotExpenses,
  activeDay,
  departureTime,
  tripTotal,
  dayTotal,
  userRole,
  onBackClick,
  onAddSpot,
  onEditSpot,
  onDeleteSpot,
  onMoveSpotUp,
  onMoveSpotDown,
  onCalculateCost,
  onSetActiveDay,
  onSetDepartureTime,
  onDragEnd,
  getEndTime,
}) => {
  const currentSpots = spots[activeDay] || [];
  const currentSegments = travelSegments[activeDay] || [];

  // 드래그 앤 드롭을 위한 센서 설정
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
  );

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

  const renderDayTabs = () => {
    if (planData?.startDate && planData?.endDate) {
      // dailyPlans가 없으면 startDate와 endDate로 날짜 생성
      const startDate = new Date(planData.startDate);
      const endDate = new Date(planData.endDate);
      const days = [];

      for (let d = new Date(startDate); d <= endDate; d.setDate(d.getDate() + 1)) {
        days.push(new Date(d));
      }

      return days.map((_, index) => {
        const dayNumber = index + 1;

        return (
          <button
            key={dayNumber}
            onClick={() => onSetActiveDay(dayNumber)}
            className={`px-2 py-1 rounded text-xs font-medium transition-colors ${
              activeDay === dayNumber ? 'bg-pink-500 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {getDayDate(dayNumber, planData.startDate)}
          </button>
        );
      });
    } else if (planData?.dailyPlans && planData.dailyPlans.length > 0) {
      // dailyPlans가 있으면 그것을 사용
      return planData.dailyPlans.map((_: DailyPlan, index: number) => {
        const dayNumber = index + 1;

        return (
          <button
            key={dayNumber}
            onClick={() => onSetActiveDay(dayNumber)}
            className={`px-2 py-1 rounded text-xs font-medium transition-colors ${
              activeDay === dayNumber ? 'bg-pink-500 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {getDayDate(dayNumber, planData.startDate)}
          </button>
        );
      });
    } else {
      // 기본값
      return [1, 2, 3].map((day) => (
        <button
          key={day}
          onClick={() => onSetActiveDay(day)}
          className={`px-2 py-1 rounded text-xs font-medium transition-colors ${
            activeDay === day ? 'bg-pink-500 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          {getDayDate(day, planData?.startDate)}
        </button>
      ));
    }
  };

  return (
    <div className="flex flex-col h-full bg-white">
      {/* 헤더 */}
      <div className="p-3 bg-white border-b">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <button onClick={onBackClick} className="p-1 hover:bg-gray-100 rounded transition-colors" title="뒤로가기">
              <ArrowLeft className="w-4 h-4 text-gray-600" />
            </button>
            <h1 className="text-lg font-bold text-gray-900">
              {isLoadingPlan ? '로딩 중...' : planData?.title || '東京2泊3日旅'}
            </h1>
            <div className="flex items-center gap-1">
              {planData?.members?.slice(0, 3).map((member: PlanMember, index: number) => (
                <div
                  key={member.id || index}
                  className="w-4 h-4 bg-orange-500 rounded-full flex items-center justify-center"
                >
                  <span className="text-white text-xs font-bold">{member.userNickname?.charAt(0) || 'U'}</span>
                </div>
              )) || (
                <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">W</span>
                </div>
              )}
            </div>
          </div>
          <div className="text-right">
            <p className="text-xs text-gray-600">旅行総額: {tripTotal.toLocaleString()} ¥</p>
            <p className="text-xs text-gray-600">今日の合計: {dayTotal.toLocaleString()} ¥</p>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <p className="text-xs text-gray-500">
            {isLoadingPlan ? '로딩 중...' : planData ? `${planData.startDate} - ${planData.endDate}` : '날짜 정보 없음'}
          </p>

          {/* 날짜 탭 */}
          <div className="flex items-center gap-1">
            <ArrowLeft className="w-3 h-3 text-gray-400" />
            {renderDayTabs()}
            <ArrowRight className="w-3 h-3 text-gray-400" />
          </div>
        </div>
      </div>

      {/* 현재 날짜 정보 */}
      <div className="px-3 py-2 bg-pink-500 text-white">
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

      {/* 일정 목록 */}
      <div className="flex-1 overflow-y-auto p-4 min-h-0">
        {currentSpots.length === 0 ? (
          <div className="text-center py-12">
            <MapPin className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">まだ観光地がありません</h3>
            <p className="text-gray-500 mb-4">観光地を追加して旅行計画を立ててみましょう</p>
          </div>
        ) : userRole !== 'VIEWER' ? (
          <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={onDragEnd}>
            <SortableContext items={currentSpots.map((spot) => spot.id)} strategy={verticalListSortingStrategy}>
              <div className="space-y-4">
                {currentSpots.map((spot, index) => {
                  const nextSegment = currentSegments.find(
                    (segment) => segment.fromSpot?.id === spot.id && segment.toSpot?.id === currentSpots[index + 1]?.id,
                  );

                  return (
                    <SortableSpotItem
                      key={spot.id}
                      spot={spot}
                      spotIndex={index}
                      totalSpots={currentSpots.length}
                      onEdit={onEditSpot}
                      onDelete={onDeleteSpot}
                      onMoveUp={onMoveSpotUp}
                      onMoveDown={onMoveSpotDown}
                      onCalculateCost={onCalculateCost}
                      day={activeDay}
                      getEndTime={getEndTime}
                      nextSegment={nextSegment}
                      spotExpenses={spotExpenses}
                      userRole={userRole}
                    />
                  );
                })}
              </div>
            </SortableContext>
          </DndContext>
        ) : (
          // VIEWER 역할일 때는 드래그 앤 드롭 없이 일반 리스트로 표시
          <div className="space-y-4">
            {currentSpots.map((spot, index) => {
              const nextSegment = currentSegments.find(
                (segment) => segment.fromSpot?.id === spot.id && segment.toSpot?.id === currentSpots[index + 1]?.id,
              );

              return (
                <SortableSpotItem
                  key={spot.id}
                  spot={spot}
                  spotIndex={index}
                  totalSpots={currentSpots.length}
                  onEdit={onEditSpot}
                  onDelete={onDeleteSpot}
                  onMoveUp={onMoveSpotUp}
                  onMoveDown={onMoveSpotDown}
                  onCalculateCost={onCalculateCost}
                  day={activeDay}
                  getEndTime={getEndTime}
                  nextSegment={nextSegment}
                  spotExpenses={spotExpenses}
                  userRole={userRole}
                />
              );
            })}
          </div>
        )}
      </div>

      {/* 하단 + 버튼 - VIEWER 역할이 아닐 때만 표시 */}
      {userRole !== 'VIEWER' && (
        <div className="p-4 border-t bg-gray-50">
          <button
            onClick={onAddSpot}
            className="w-full flex items-center justify-center gap-2 py-3 bg-gray-200 text-gray-600 rounded-lg hover:bg-gray-300 transition-colors"
          >
            <Plus className="w-5 h-5" />
            <span>観光地を追加</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default ItineraryPlanner;
