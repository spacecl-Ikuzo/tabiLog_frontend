import React from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { MapPin, Edit, Trash2, ChevronUp, ChevronDown, GripVertical, Calculator, ArrowRight } from 'lucide-react';
import SvgIcon from '@/components/ui/SvgIcon';
import { Spot, Expense } from '@/lib/type';

interface TravelSegment {
  duration: string;
  fromSpot?: Spot;
  toSpot?: Spot;
  transportMode: 'walking' | 'driving' | 'transit';
  isFallback?: boolean;
  originalMode?: 'walking' | 'driving' | 'transit';
  isZeroResults?: boolean;
}

interface SortableSpotItemProps {
  spot: Spot;
  spotIndex: number;
  totalSpots: number;
  onEdit: (spot: Spot) => void;
  onDelete: (day: number, spotId: number) => void;
  onMoveUp: (day: number, spotIndex: number) => void;
  onMoveDown: (day: number, spotIndex: number) => void;
  onCalculateCost: (spot: Spot) => void;
  day: number;
  getEndTime: (startTime: string, duration: string) => string;
  nextSegment?: TravelSegment;
  spotExpenses: Record<number, Expense[]>;
  userRole: string;
}

const SortableSpotItem: React.FC<SortableSpotItemProps> = ({
  spot,
  spotIndex,
  totalSpots,
  onEdit,
  onDelete,
  onMoveUp,
  onMoveDown,
  onCalculateCost,
  day,
  getEndTime,
  nextSegment,
  spotExpenses,
  userRole,
}) => {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id: spot.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  };

  return (
    <div ref={setNodeRef} style={style} className="relative">
      <div className="bg-white border border-gray-200 rounded-lg p-4 mb-4 shadow-sm hover:shadow-md transition-shadow">
        <div className="flex items-start justify-between">
          {/* 드래그 핸들과 순서 변경 버튼 - VIEWER 역할이 아닐 때만 표시 */}
          {userRole !== 'VIEWER' && (
            <div className="flex flex-col items-center mr-3 space-y-1">
              <button
                {...attributes}
                {...listeners}
                className="p-1 text-gray-400 hover:text-gray-600 transition-colors cursor-grab active:cursor-grabbing"
                title="드래그하여 순서 변경"
              >
                <GripVertical className="w-4 h-4" />
              </button>
              <div className="flex flex-col space-y-1">
                <button
                  onClick={() => onMoveUp(day, spotIndex)}
                  disabled={spotIndex === 0}
                  className={`p-1 rounded transition-colors ${
                    spotIndex === 0
                      ? 'text-gray-300 cursor-not-allowed'
                      : 'text-gray-400 hover:text-gray-600 hover:bg-gray-100'
                  }`}
                  title="위로 이동"
                >
                  <ChevronUp className="w-3 h-3" />
                </button>
                <button
                  onClick={() => onMoveDown(day, spotIndex)}
                  disabled={spotIndex === totalSpots - 1}
                  className={`p-1 rounded transition-colors ${
                    spotIndex === totalSpots - 1
                      ? 'text-gray-300 cursor-not-allowed'
                      : 'text-gray-400 hover:text-gray-600 hover:bg-gray-100'
                  }`}
                  title="아래로 이동"
                >
                  <ChevronDown className="w-3 h-3" />
                </button>
              </div>
            </div>
          )}

          {/* 관광지 정보 */}
          <div className="flex-1">
            <div className="flex items-start justify-between mb-2">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-blue-500" />
                <h3 className="font-medium text-gray-900">{spot.location}</h3>
              </div>
              {/* 편집 및 삭제 버튼 - VIEWER 역할이 아닐 때만 표시 */}
              {userRole !== 'VIEWER' && (
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => onEdit(spot)}
                    className="p-1 text-gray-400 hover:text-blue-600 transition-colors"
                    title="편집"
                  >
                    <Edit className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => onDelete(day, spot.id)}
                    className="p-1 text-gray-400 hover:text-red-600 transition-colors"
                    title="삭제"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              )}
            </div>

            <p className="text-sm text-gray-600 mb-2">{spot.address}</p>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4 text-sm text-gray-500">
                <div className="flex items-center space-x-1">
                  <SvgIcon name="clock" size={16} className="text-gray-500" />
                  <span>
                    {spot.time} - {getEndTime(spot.time, spot.duration)}
                  </span>
                </div>
                <div className="flex items-center space-x-1">
                  <SvgIcon name="clock" size={16} className="text-gray-500" />
                  <span>{spot.duration}</span>
                </div>
                {spot.rating && spot.rating > 0 && (
                  <div className="flex items-center space-x-1">
                    <span>⭐</span>
                    <span>
                      {spot.rating.toFixed(1)} ({spot.userRatingsTotal?.toLocaleString()}件のレビュー)
                    </span>
                  </div>
                )}
              </div>

              <div className="flex flex-col items-end space-y-2">
                {/* 지출 정보 표시 */}
                {(() => {
                  const expenses = spotExpenses[spot.id];
                  if (expenses && expenses.length > 0) {
                    const total = expenses.reduce((sum: number, expense: Expense) => sum + expense.amount, 0);
                    return <span className="text-sm font-bold text-gray-900">{total.toLocaleString()}円</span>;
                  }
                  return null;
                })()}

                {/* 비용 계산 버튼 - VIEWER 역할이 아닐 때만 표시 */}
                {userRole !== 'VIEWER' && (
                  <button
                    onClick={() => onCalculateCost(spot)}
                    className="flex items-center space-x-1 px-3 py-1.5 bg-orange-500 text-white text-sm font-medium rounded-lg hover:bg-orange-600 transition-colors shadow-sm"
                    title="비용 계산"
                  >
                    <Calculator className="w-4 h-4" />
                    <span>コスト</span>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 이동 정보 */}
      {nextSegment && (
        <div className="flex items-center justify-center mb-4">
          <div className="flex items-center space-x-2 bg-gray-50 px-3 py-2 rounded-lg">
            <SvgIcon
              name={nextSegment.transportMode === 'walking' ? 'walking' : 'car'}
              size={16}
              className="text-gray-600"
            />
            <span className="text-sm text-gray-600">{nextSegment.duration}</span>
            {nextSegment.isZeroResults && (
              <span className="text-xs text-red-600 bg-red-100 px-2 py-1 rounded">⚠️ 경로없음</span>
            )}
            <div className="w-4 h-4 bg-blue-500 rounded flex items-center justify-center">
              <ArrowRight className="w-3 h-3 text-white" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SortableSpotItem;
