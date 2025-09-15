import React, { useState } from 'react';
import SpotSearchDialog from '@/components/SpotSearchDialog';
import GoogleMapView from '@/components/GoogleMapView';
import {
  Plus,
  MapPin,
  Trash2,
  Edit,
  ArrowLeft,
  ArrowRight,
  ChevronUp,
  ChevronDown,
  GripVertical,
  Calculator,
} from 'lucide-react';
import { createExpense } from '@/api/api';
import Header from '@/components/layout/header';
import SvgIcon from '@/components/ui/SvgIcon';
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

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
  transportMode?: 'walking' | 'driving' | 'transit';
  expenses?: ExpenseData[];
}

interface ExpenseData {
  id: number;
  amount: number;
  category: string;
  item: string;
  expenseDate: string;
}

interface TravelSegment {
  duration: string;
  fromSpot?: Spot;
  toSpot?: Spot;
  transportMode: 'walking' | 'driving' | 'transit';
  isFallback?: boolean;
  originalMode?: 'walking' | 'driving' | 'transit';
  isZeroResults?: boolean;
}

// 드래그 앤 드롭을 위한 SortableSpotItem 컴포넌트
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
  spotExpenses: Record<number, ExpenseData[]>;
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
          {/* 드래그 핸들과 순서 변경 버튼 */}
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

          {/* 관광지 정보 */}
          <div className="flex-1">
            <div className="flex items-start justify-between mb-2">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-blue-500" />
                <h3 className="font-medium text-gray-900">{spot.location}</h3>
              </div>
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
                {spotExpenses[spot.id] && spotExpenses[spot.id].length > 0 && (
                  <span className="text-sm font-bold text-gray-900">
                    {spotExpenses[spot.id]
                      .reduce((sum: number, expense: ExpenseData) => sum + expense.amount, 0)
                      .toLocaleString()}
                    円
                  </span>
                )}

                {/* 비용 계산 버튼 */}
                <button
                  onClick={() => onCalculateCost(spot)}
                  className="flex items-center space-x-1 px-3 py-1.5 bg-orange-500 text-white text-sm font-medium rounded-lg hover:bg-orange-600 transition-colors shadow-sm"
                  title="비용 계산"
                >
                  <Calculator className="w-4 h-4" />
                  <span>コスト</span>
                </button>
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

interface DepartureTime {
  hour: number;
  minute: number;
}

const TripPlannerPage = () => {
  const [activeDay, setActiveDay] = useState(2);
  const [isSearchDialogOpen, setIsSearchDialogOpen] = useState(false);
  const [isDepartureTimeDialogOpen, setIsDepartureTimeDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [editingSpot, setEditingSpot] = useState<Spot | null>(null);
  const [isSpotChangeDialogOpen, setIsSpotChangeDialogOpen] = useState(false);
  const [isCostDialogOpen, setIsCostDialogOpen] = useState(false);
  const [costCalculatingSpot, setCostCalculatingSpot] = useState<Spot | null>(null);
  const [expenseInputs, setExpenseInputs] = useState<{
    amount: number;
    category: string;
  }>({
    amount: 0,
    category: 'LODGING',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [spotExpenses, setSpotExpenses] = useState<Record<number, ExpenseData[]>>({});
  const [departureTime, setDepartureTime] = useState<DepartureTime>({ hour: 11, minute: 0 });
  const [leftPanelWidth, setLeftPanelWidth] = useState(40); // 40% (4:6 비율)
  const [isDragging, setIsDragging] = useState(false);
  const [spots, setSpots] = useState<Record<number, Spot[]>>({
    1: [], // 5월 13일
    2: [], // 5월 14일
    3: [], // 5월 15일
  });

  // TRANSIT 모드를 WALKING 모드로 변경하는 함수
  const convertTransitToWalking = (spots: Record<number, Spot[]>) => {
    const convertedSpots: Record<number, Spot[]> = {};
    Object.keys(spots).forEach((day) => {
      const dayNum = parseInt(day);
      convertedSpots[dayNum] = spots[dayNum].map((spot) => ({
        ...spot,
        transportMode: spot.transportMode === 'transit' ? 'walking' : spot.transportMode,
      }));
    });
    return convertedSpots;
  };

  const [travelSegments, setTravelSegments] = useState<Record<number, TravelSegment[]>>({
    1: [],
    2: [],
    3: [],
  });

  // 드래그 앤 드롭을 위한 센서 설정
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
  );

  // 컴포넌트 마운트 시 TRANSIT 모드를 WALKING 모드로 변경
  React.useEffect(() => {
    const hasTransitMode = Object.values(spots).some((daySpots) =>
      daySpots.some((spot) => spot.transportMode === 'transit'),
    );

    if (hasTransitMode) {
      console.log('TRANSIT 모드를 WALKING 모드로 변경합니다.');
      setSpots(convertTransitToWalking(spots));
    }
  }, [spots]); // spots를 의존성 배열에 추가

  // 관광지 추가 함수
  const addSpot = async (
    newSpot: Spot,
    duration: string = '1時間',
    transportMode: 'walking' | 'driving' | 'transit' = 'walking',
  ) => {
    const currentSpots = spots[activeDay];
    let arrivalTime = departureTime;

    // 이전 관광지가 있으면 이동 시간 계산 (첫 번째 스팟은 호텔이므로 이동 시간 계산 안함)
    if (currentSpots.length > 0) {
      const lastSpot = currentSpots[currentSpots.length - 1];
      const travelTime = await calculateTravelTime(lastSpot, newSpot);

      // 이전 관광지의 종료 시간 + 이동 시간 = 도착 시간
      const lastSpotEndTime = getLastSpotEndTime(currentSpots);
      arrivalTime = {
        hour: lastSpotEndTime.hour,
        minute: lastSpotEndTime.minute,
      };

      // 이동 시간 추가
      const totalMinutes = arrivalTime.hour * 60 + arrivalTime.minute + travelTime;
      arrivalTime = {
        hour: Math.floor(totalMinutes / 60) % 24,
        minute: totalMinutes % 60,
      };
    }

    // 첫 번째 스팟(호텔)은 이동 방법을 설정하지 않음
    const spotWithDuration = {
      ...newSpot,
      duration: duration,
      time: `${arrivalTime.hour.toString().padStart(2, '0')}:${arrivalTime.minute.toString().padStart(2, '0')}`,
      transportMode: currentSpots.length === 0 ? undefined : transportMode, // 첫 번째 스팟은 transportMode 없음
    };

    setSpots((prev) => ({
      ...prev,
      [activeDay]: [...prev[activeDay], spotWithDuration],
    }));

    // 이동 시간 세그먼트 추가 (2개 이상일 때만, 첫 번째 스팟은 제외)
    if (currentSpots.length >= 1) {
      const lastSpot = currentSpots[currentSpots.length - 1];
      await addTravelSegment(lastSpot, spotWithDuration);
    }
  };

  // 마지막 관광지의 종료 시간 계산 (체류 시간 포함)
  const getLastSpotEndTime = (spots: Spot[]) => {
    if (spots.length === 0) return departureTime;

    const lastSpot = spots[spots.length - 1];
    const [startHour, startMinute] = lastSpot.time.split(':').map(Number);

    // 체류시간을 분으로 변환
    let durationMinutes = 0;
    if (lastSpot.duration.includes('時間')) {
      const hours = parseInt(lastSpot.duration.match(/(\d+)時間/)?.[1] || '0');
      durationMinutes += hours * 60;
    }
    if (lastSpot.duration.includes('分')) {
      const minutes = parseInt(lastSpot.duration.match(/(\d+)分/)?.[1] || '0');
      durationMinutes += minutes;
    }

    // 종료시간 계산 (시작시간 + 체류시간)
    const totalMinutes = startHour * 60 + startMinute + durationMinutes;
    const endHour = Math.floor(totalMinutes / 60) % 24;
    const endMinute = totalMinutes % 60;

    return { hour: endHour, minute: endMinute };
  };

  // 백엔드 Directions API를 사용한 실제 이동 시간 계산
  const calculateTravelTime = async (fromSpot: Spot, toSpot: Spot): Promise<number> => {
    if (!fromSpot.latitude || !fromSpot.longitude || !toSpot.latitude || !toSpot.longitude) {
      return 15; // 기본값 15분
    }

    try {
      // 목적지 관광지의 교통수단을 사용 (없으면 기본값)
      const mode =
        toSpot.transportMode === 'transit' ? 'TRANSIT' : toSpot.transportMode === 'driving' ? 'DRIVING' : 'WALKING';

      // TRANSIT 모드의 경우 출발시간 정보 추가
      const currentSpots = spots[activeDay] || [];
      const spotIndex = currentSpots.findIndex((spot) => spot.id === toSpot.id);
      let departureTimeParam = '';

      if (mode === 'TRANSIT' && spotIndex > 0) {
        // 이전 관광지의 종료시간을 출발시간으로 사용
        const prevSpot = currentSpots[spotIndex - 1];
        const [hour, minute] = prevSpot.time.split(':').map(Number);

        // 체류시간을 분으로 변환하여 종료시간 계산
        let durationMinutes = 0;
        if (prevSpot.duration.includes('時間')) {
          const hours = parseInt(prevSpot.duration.match(/(\d+)時間/)?.[1] || '0');
          durationMinutes += hours * 60;
        }
        if (prevSpot.duration.includes('分')) {
          const minutes = parseInt(prevSpot.duration.match(/(\d+)分/)?.[1] || '0');
          durationMinutes += minutes;
        }

        const totalMinutes = hour * 60 + minute + durationMinutes;
        const departureHour = Math.floor(totalMinutes / 60) % 24;
        const departureMinute = totalMinutes % 60;

        departureTimeParam = `&departureTime=${departureHour}:${departureMinute.toString().padStart(2, '0')}`;
      }

      // TRANSIT 모드는 제거되었으므로 추가 파라미터 불필요
      const transitParams = '';

      const apiUrl = `http://localhost:8080/api/spots/directions?lat1=${fromSpot.latitude}&lng1=${fromSpot.longitude}&lat2=${toSpot.latitude}&lng2=${toSpot.longitude}&travelMode=${mode}${departureTimeParam}${transitParams}`;
      console.log('API 요청 URL:', apiUrl);
      console.log('요청 파라미터:', {
        from: `${fromSpot.latitude}, ${fromSpot.longitude}`,
        to: `${toSpot.latitude}, ${toSpot.longitude}`,
        mode: mode,
        departureTime: departureTimeParam ? departureTimeParam.split('=')[1] : '없음',
        transitParams: transitParams || '없음',
      });

      const response = await fetch(apiUrl);

      if (!response.ok) {
        console.error('API 응답 오류:', response.status, response.statusText);
        throw new Error(`API 요청 실패: ${response.status}`);
      }

      const data = await response.json();
      console.log('백엔드 API 전체 응답:', data);

      if (data.success && data.data) {
        console.log('백엔드 API data 객체:', data.data);

        // API 오류가 있는 경우 처리
        if (data.data.status === 'API_ERROR' || data.data.status === 'ERROR') {
          console.warn(`백엔드 API 오류 (${mode} 모드):`, data.data.errorMessage);
          return 15; // 기본값
        }

        // 경로를 찾을 수 없는 경우 처리
        if (data.data.status === 'ZERO_RESULTS') {
          console.warn(`경로를 찾을 수 없음 (${mode} 모드):`, data.data.errorMessage);
          console.warn('상세 정보:', {
            from: `${fromSpot.latitude}, ${fromSpot.longitude}`,
            to: `${toSpot.latitude}, ${toSpot.longitude}`,
            mode: mode,
            departureTime: departureTimeParam ? departureTimeParam.split('=')[1] : '없음',
            fromLocation: fromSpot.location,
            toLocation: toSpot.location,
          });

          // 경로를 찾을 수 없으면 기본값 반환
          console.log(`${mode} 모드에서 경로를 찾을 수 없어 기본값(15분) 사용`);
          return 15; // 기본값
        }

        // 백엔드 응답 구조: data.routes[0].legs[0].duration.text
        if (
          data.data.routes &&
          data.data.routes.length > 0 &&
          data.data.routes[0].legs &&
          data.data.routes[0].legs.length > 0 &&
          data.data.routes[0].legs[0].duration
        ) {
          const durationText = data.data.routes[0].legs[0].duration.text;
          console.log(`백엔드 API 이동 시간: ${durationText} - ${mode} 모드`);

          // 텍스트에서 분 추출 (예: "15분", "1시간 30분")
          const minutes = parseDurationToMinutes(durationText);
          return Math.max(1, minutes); // 최소 1분
        } else {
          console.warn('백엔드 API 응답에 경로 정보가 없음:', data.data);
          return 15; // 기본값
        }
      } else {
        console.warn('백엔드 API 응답에서 경로를 찾을 수 없음:', data);
        return 15; // 기본값
      }
    } catch (error) {
      console.error('백엔드 Directions API 호출 실패:', error);
      return 15; // 기본값
    }
  };

  // 시간 텍스트를 분으로 변환하는 함수
  const parseDurationToMinutes = (durationText: string): number => {
    console.log('파싱할 시간 텍스트:', durationText);

    // 영어 형태: "56 mins", "1 hour 30 mins", "2 hours" 등
    const hourMatchEn = durationText.match(/(\d+)\s*hour/);
    const minuteMatchEn = durationText.match(/(\d+)\s*min/);

    // 한국어/일본어 형태: "15분", "1시간 30분", "2시간" 등
    const hourMatchKo = durationText.match(/(\d+)시간/);
    const minuteMatchKo = durationText.match(/(\d+)분/);

    let totalMinutes = 0;

    // 영어 형태 처리
    if (hourMatchEn) {
      totalMinutes += parseInt(hourMatchEn[1]) * 60;
    }
    if (minuteMatchEn) {
      totalMinutes += parseInt(minuteMatchEn[1]);
    }

    // 한국어/일본어 형태 처리
    if (hourMatchKo) {
      totalMinutes += parseInt(hourMatchKo[1]) * 60;
    }
    if (minuteMatchKo) {
      totalMinutes += parseInt(minuteMatchKo[1]);
    }

    console.log('파싱된 총 분:', totalMinutes);
    return totalMinutes || 15; // 기본값 15분
  };

  // 이동 시간 세그먼트 추가
  const addTravelSegment = async (fromSpot: Spot, toSpot: Spot) => {
    const travelTime = await calculateTravelTime(fromSpot, toSpot);

    // 기본값(15분)이 사용된 경우 경로를 찾을 수 없음을 표시 (좌표가 없는 경우만)
    const isZeroResults =
      travelTime === 15 && (!fromSpot.latitude || !fromSpot.longitude || !toSpot.latitude || !toSpot.longitude);

    const newSegment: TravelSegment = {
      duration: `約${travelTime}分`,
      fromSpot: fromSpot,
      toSpot: toSpot,
      transportMode: toSpot.transportMode || 'walking',
      isZeroResults: isZeroResults,
    };

    setTravelSegments((prev) => ({
      ...prev,
      [activeDay]: [...prev[activeDay], newSegment],
    }));

    return travelTime; // 이동 시간을 반환
  };

  // 교통수단 변경 시 이동 시간 재계산 및 도착시간 업데이트 (첫 번째 스팟 제외)
  const recalculateTravelTimes = async (updatedSpots?: Spot[]) => {
    const currentSpots = updatedSpots || spots[activeDay];
    if (currentSpots.length < 2) return;

    const newSegments: TravelSegment[] = [];
    const updatedSpotsWithTimes: Spot[] = [...currentSpots];

    // 첫 번째 스팟(호텔)은 제외하고 두 번째 스팟부터 계산
    // i번째 스팟의 교통수단은 i-1번째 스팟에서 i번째 스팟으로 가는 이동수단
    for (let i = 1; i < currentSpots.length; i++) {
      const fromSpot = updatedSpotsWithTimes[i - 1]; // 이전 스팟 (업데이트된 시간 포함)
      const toSpot = currentSpots[i]; // 현재 스팟
      const travelTime = await calculateTravelTime(fromSpot, toSpot);

      // 기본값(15분)이 사용된 경우 경로를 찾을 수 없음을 표시 (좌표가 없는 경우만)
      const isZeroResults =
        travelTime === 15 && (!fromSpot.latitude || !fromSpot.longitude || !toSpot.latitude || !toSpot.longitude);

      // 이전 스팟의 종료 시간 계산
      const [prevStartHour, prevStartMinute] = fromSpot.time.split(':').map(Number);
      let prevDurationMinutes = 0;
      if (fromSpot.duration.includes('時間')) {
        const hours = parseInt(fromSpot.duration.match(/(\d+)時間/)?.[1] || '0');
        prevDurationMinutes += hours * 60;
      }
      if (fromSpot.duration.includes('分')) {
        const minutes = parseInt(fromSpot.duration.match(/(\d+)分/)?.[1] || '0');
        prevDurationMinutes += minutes;
      }

      // 이전 스팟 종료 시간 + 이동 시간 = 현재 스팟 도착 시간
      const totalMinutes = prevStartHour * 60 + prevStartMinute + prevDurationMinutes + travelTime;
      const arrivalHour = Math.floor(totalMinutes / 60) % 24;
      const arrivalMinute = totalMinutes % 60;
      const arrivalTime = `${arrivalHour.toString().padStart(2, '0')}:${arrivalMinute.toString().padStart(2, '0')}`;

      // 현재 스팟의 도착시간 업데이트
      updatedSpotsWithTimes[i] = {
        ...toSpot,
        time: arrivalTime,
      };

      newSegments.push({
        duration: `約${travelTime}分`,
        fromSpot: fromSpot,
        toSpot: updatedSpotsWithTimes[i],
        transportMode: toSpot.transportMode || 'walking',
        isZeroResults: isZeroResults,
      });
    }

    // 업데이트된 spots와 travel segments를 동시에 설정
    setSpots((prev) => ({
      ...prev,
      [activeDay]: updatedSpotsWithTimes,
    }));

    setTravelSegments((prev) => ({
      ...prev,
      [activeDay]: newSegments,
    }));
  };

  // 드래그 앤 드롭 핸들러
  const handleDragEnd = async (event: DragEndEvent) => {
    const { active, over } = event;

    if (over && active.id !== over.id) {
      const currentSpots = spots[activeDay];
      const oldIndex = currentSpots.findIndex((spot) => spot.id === active.id);
      const newIndex = currentSpots.findIndex((spot) => spot.id === over.id);

      if (oldIndex !== -1 && newIndex !== -1) {
        const reorderedSpots = arrayMove(currentSpots, oldIndex, newIndex);

        // 순서 변경 후 이동시간 재계산
        await recalculateTravelTimes(reorderedSpots);
      }
    }
  };

  // 위로 이동 함수
  const moveSpotUp = async (day: number, spotIndex: number) => {
    if (spotIndex === 0) return;

    const currentSpots = spots[day];
    const reorderedSpots = arrayMove(currentSpots, spotIndex, spotIndex - 1);

    // 순서 변경 후 이동시간 재계산
    await recalculateTravelTimes(reorderedSpots);
  };

  // 아래로 이동 함수
  const moveSpotDown = async (day: number, spotIndex: number) => {
    const currentSpots = spots[day];
    if (spotIndex === currentSpots.length - 1) return;

    const reorderedSpots = arrayMove(currentSpots, spotIndex, spotIndex + 1);

    // 순서 변경 후 이동시간 재계산
    await recalculateTravelTimes(reorderedSpots);
  };

  // 관광지 편집 함수
  const editSpot = (spot: Spot) => {
    setEditingSpot(spot);
    setIsEditDialogOpen(true);
  };

  // 비용 계산 함수
  const calculateCost = async (spot: Spot) => {
    setCostCalculatingSpot(spot);
    setIsCostDialogOpen(true);

    // 입력 필드 초기화
    setExpenseInputs({
      amount: 0,
      category: 'LODGING',
    });
  };

  // 지출 저장 함수
  const saveExpenses = async () => {
    if (!costCalculatingSpot || expenseInputs.amount <= 0) {
      alert('금액을 입력해주세요.');
      return;
    }

    try {
      setIsLoading(true);

      // 상세한 디버깅 정보 출력
      console.log('=== 지출 저장 시작 ===');
      console.log('현재 시간:', new Date().toISOString());
      console.log('spotId:', costCalculatingSpot.id);
      console.log('spot 정보:', costCalculatingSpot);
      console.log('입력 데이터:', expenseInputs);

      const expenseData = {
        planId: 1, // 플랜 ID 1 사용 (test-data.sql에 존재)
        spotId: costCalculatingSpot.id,
        item: `${costCalculatingSpot.location} - ${expenseInputs.category}`,
        amount: expenseInputs.amount,
        category: expenseInputs.category,
        expenseDate: new Date().toISOString().split('T')[0],
      };

      console.log('=== API 요청 데이터 ===');
      console.log('요청 URL:', 'http://localhost:8080/api/expenses');
      console.log('요청 데이터:', JSON.stringify(expenseData, null, 2));

      const result = await createExpense(expenseData);

      console.log('=== API 응답 성공 ===');
      console.log('응답 데이터:', JSON.stringify(result, null, 2));

      // 저장된 지출 데이터를 상태에 추가
      if (result && result.data) {
        const newExpense: ExpenseData = {
          id: result.data.id,
          amount: result.data.amount,
          category: result.data.category,
          item: result.data.item,
          expenseDate: result.data.expenseDate,
        };

        setSpotExpenses((prev) => ({
          ...prev,
          [costCalculatingSpot.id]: [...(prev[costCalculatingSpot.id] || []), newExpense],
        }));
      }

      // 성공 메시지 표시
      alert('지출이 성공적으로 저장되었습니다!');

      // 다이얼로그 닫기
      setIsCostDialogOpen(false);
      setCostCalculatingSpot(null);
    } catch (error: unknown) {
      console.error('=== 지출 저장 실패 ===');
      console.error('오류 발생 시간:', new Date().toISOString());
      console.error('오류 객체:', error);
      console.error('오류 메시지:', error instanceof Error ? error.message : 'Unknown error');
      console.error('오류 스택:', error instanceof Error ? error.stack : 'No stack trace');

      if (error && typeof error === 'object' && 'response' in error && error.response) {
        console.error('=== HTTP 응답 오류 ===');
        console.error('상태 코드:', (error.response as any).status);
        console.error('상태 텍스트:', (error.response as any).statusText);
        console.error('응답 헤더:', (error.response as any).headers);
        console.error('응답 데이터:', (error.response as any).data);
      } else if (error && typeof error === 'object' && 'request' in error && error.request) {
        console.error('=== 네트워크 오류 ===');
        console.error('요청 객체:', (error as any).request);
      } else {
        console.error('=== 기타 오류 ===');
        console.error('오류 설정:', (error as any).config);
      }

      // 401 오류인 경우 특별 처리
      if (error && typeof error === 'object' && 'response' in error && 
          error.response && typeof error.response === 'object' && 'status' in error.response &&
          error.response.status === 401) {
        console.error('401 인증 오류 발생 - SecurityConfig 설정 확인 필요');
        alert('인증 오류가 발생했습니다. 백엔드 서버를 재시작해주세요.');
        return;
      }

      alert(`지출 저장에 실패했습니다.\n오류: ${error instanceof Error ? error.message : 'Unknown error'}`);
    } finally {
      setIsLoading(false);
      console.log('=== 지출 저장 완료 ===');
    }
  };

  // 관광지 이동 수단 업데이트 함수
  const updateSpotTransportMode = async (spotId: number, newTransportMode: 'walking' | 'driving' | 'transit') => {
    // 먼저 spots 상태를 업데이트하고 업데이트된 spots를 받아옴
    const updatedSpots = spots[activeDay].map((spot) =>
      spot.id === spotId ? { ...spot, transportMode: newTransportMode } : spot,
    );

    // 편집 중인 관광지 정보도 업데이트 (다이얼로그가 열린 상태 유지)
    setEditingSpot((prev) => (prev ? { ...prev, transportMode: newTransportMode } : null));

    // 업데이트된 spots로 이동 시간 재계산 (이 함수에서 spots 상태도 업데이트됨)
    await recalculateTravelTimes(updatedSpots);
  };

  // 관광지 변경 함수
  const changeSpot = async (
    newSpot: Spot,
    duration: string = '1時間',
    transportMode: 'walking' | 'driving' | 'transit' = 'walking',
  ) => {
    if (!editingSpot) return;

    const currentSpots = spots[activeDay];
    const spotIndex = currentSpots.findIndex((spot) => spot.id === editingSpot.id);

    if (spotIndex === -1) return;

    // 새로운 스팟으로 교체
    const updatedSpot = {
      ...newSpot,
      id: editingSpot.id, // 기존 ID 유지
      duration: duration,
      time: editingSpot.time, // 기존 시간 유지
      transportMode: spotIndex === 0 ? undefined : transportMode, // 첫 번째 스팟은 이동수단 없음
    };

    setSpots((prev) => ({
      ...prev,
      [activeDay]: prev[activeDay].map((spot) => (spot.id === editingSpot.id ? updatedSpot : spot)),
    }));

    // 이동 시간 재계산
    await recalculateTravelTimes();
    setIsSpotChangeDialogOpen(false);
    setIsEditDialogOpen(false);
    setEditingSpot(null);
  };

  // 관광지 삭제 함수
  const deleteSpot = (day: number, spotId: number) => {
    const currentSpots = spots[day];
    const spotIndex = currentSpots.findIndex((spot) => spot.id === spotId);

    if (spotIndex === -1) return;

    // 관광지 삭제
    setSpots((prev) => ({
      ...prev,
      [day]: prev[day].filter((spot) => spot.id !== spotId),
    }));

    // 이동 시간 세그먼트 재구성 (첫 번째 스팟 제외)
    setTravelSegments((prev) => {
      const newSegments: TravelSegment[] = [];
      const remainingSpots = currentSpots.filter((spot) => spot.id !== spotId);

      // 남은 관광지들 사이의 이동 시간만 계산 (첫 번째 스팟은 제외)
      // i번째 스팟의 교통수단은 i-1번째 스팟에서 i번째 스팟으로 가는 이동수단
      for (let i = 1; i < remainingSpots.length; i++) {
        const fromSpot = remainingSpots[i - 1]; // 이전 스팟
        const toSpot = remainingSpots[i]; // 현재 스팟

        // 기존 세그먼트에서 찾기
        const existingSegment = prev[day].find(
          (segment) => segment.fromSpot?.id === fromSpot.id && segment.toSpot?.id === toSpot.id,
        );

        if (existingSegment) {
          newSegments.push(existingSegment);
        }
      }

      return {
        ...prev,
        [day]: newSegments,
      };
    });
  };

  // 총 비용 계산 (기존 cost + 지출 데이터)
  const calculateTotalCost = (daySpots: Spot[]) => {
    return daySpots.reduce((total, spot) => {
      const cost = parseInt(spot.cost.replace(/[^\d]/g, '') || '0');
      const expenses = spotExpenses[spot.id] || [];
      const expenseTotal = expenses.reduce((sum, expense) => sum + expense.amount, 0);
      return total + cost + expenseTotal;
    }, 0);
  };

  // 종료시간 계산 함수
  const getEndTime = (startTime: string, duration: string): string => {
    const [startHour, startMinute] = startTime.split(':').map(Number);

    // 체류시간을 분으로 변환
    let durationMinutes = 0;
    if (duration.includes('時間')) {
      const hours = parseInt(duration.match(/(\d+)時間/)?.[1] || '0');
      durationMinutes += hours * 60;
    }
    if (duration.includes('分')) {
      const minutes = parseInt(duration.match(/(\d+)分/)?.[1] || '0');
      durationMinutes += minutes;
    }

    // 종료시간 계산
    const totalMinutes = startHour * 60 + startMinute + durationMinutes;
    const endHour = Math.floor(totalMinutes / 60) % 24;
    const endMinute = totalMinutes % 60;

    return `${endHour.toString().padStart(2, '0')}:${endMinute.toString().padStart(2, '0')}`;
  };

  // 드래그 시작 핸들러
  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  // 드래그 중 핸들러
  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;

    const containerWidth = window.innerWidth;
    const newLeftWidth = (e.clientX / containerWidth) * 100;

    // 최소 20%, 최대 80%로 제한
    const clampedWidth = Math.min(Math.max(newLeftWidth, 20), 80);
    setLeftPanelWidth(clampedWidth);
  };

  // 드래그 종료 핸들러
  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // 마우스 이벤트 리스너 등록/해제
  React.useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      document.body.style.cursor = 'col-resize';
      document.body.style.userSelect = 'none';
    } else {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.body.style.cursor = '';
      document.body.style.userSelect = '';
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.body.style.cursor = '';
      document.body.style.userSelect = '';
    };
  }, [isDragging, handleMouseMove]);

  // 모바일용 스팟 리스트 컴포넌트
  const MobileSpotList = () => {
    const currentSpots = spots[activeDay] || [];
    const currentSegments = travelSegments[activeDay] || [];

    return (
      <div className="p-3">
        {/* 현재 날짜 정보 */}
        <div className="px-3 py-2 bg-pink-500 text-white rounded-lg mb-3">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">
              {activeDay === 1 ? '一日目' : activeDay === 2 ? '二日目' : '三日目'}:
              {activeDay === 1 ? '火曜日' : activeDay === 2 ? '木曜日' : '金曜日'}
            </span>
            <button
              onClick={() => setIsDepartureTimeDialogOpen(true)}
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
                      <div className="flex items-center space-x-1">
                        <button
                          onClick={() => editSpot(spot)}
                          className="p-1 text-gray-400 hover:text-blue-600 transition-colors"
                          title="편집"
                        >
                          <Edit className="w-3 h-3" />
                        </button>
                        <button
                          onClick={() => deleteSpot(activeDay, spot.id)}
                          className="p-1 text-gray-400 hover:text-red-600 transition-colors"
                          title="삭제"
                        >
                          <Trash2 className="w-3 h-3" />
                        </button>
                      </div>
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
                        {spotExpenses[spot.id] && spotExpenses[spot.id].length > 0 && (
                          <span className="text-xs font-bold text-gray-900">
                            {spotExpenses[spot.id]
                              .reduce((sum: number, expense: ExpenseData) => sum + expense.amount, 0)
                              .toLocaleString()}
                            円
                          </span>
                        )}

                        {/* 비용 계산 버튼 */}
                        <button
                          onClick={() => calculateCost(spot)}
                          className="flex items-center space-x-1 px-2 py-1 bg-orange-500 text-white text-xs font-medium rounded hover:bg-orange-600 transition-colors"
                          title="비용 계산"
                        >
                          <Calculator className="w-3 h-3" />
                          <span>コスト</span>
                        </button>
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

        {/* 하단 + 버튼 */}
        <div className="mt-4">
          <button
            onClick={() => setIsSearchDialogOpen(true)}
            className="w-full flex items-center justify-center gap-2 py-3 bg-gray-200 text-gray-600 rounded-lg hover:bg-gray-300 transition-colors"
          >
            <Plus className="w-4 h-4" />
            <span>観光地を追加</span>
          </button>
        </div>
      </div>
    );
  };

  // 일정 컴포넌트
  const ItineraryPlanner = () => {
    const currentSpots = spots[activeDay] || [];
    const currentSegments = travelSegments[activeDay] || [];
    const dayTotal = calculateTotalCost(currentSpots);
    const tripTotal = Object.values(spots)
      .flat()
      .reduce((total, spot) => {
        const cost = parseInt(spot.cost.replace(/[^\d]/g, '') || '0');
        const expenses = spotExpenses[spot.id] || [];
        const expenseTotal = expenses.reduce((sum, expense) => sum + expense.amount, 0);
        return total + cost + expenseTotal;
      }, 0);

    return (
      <div className="flex flex-col h-full bg-white">
        {/* 헤더 */}
        <div className="p-3 bg-white border-b">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4 text-gray-600" />
              <h1 className="text-lg font-bold text-gray-900">東京2泊3日旅</h1>
              <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">W</span>
              </div>
            </div>
            <div className="text-right">
              <p className="text-xs text-gray-600">旅行総額: {tripTotal.toLocaleString()} ¥</p>
              <p className="text-xs text-gray-600">今日の合計: {dayTotal.toLocaleString()} ¥</p>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <p className="text-xs text-gray-500">2026.05.13 - 2026.05.15</p>

            {/* 날짜 탭 */}
            <div className="flex items-center gap-1">
              <ArrowLeft className="w-3 h-3 text-gray-400" />
              {[1, 2, 3].map((day) => (
                <button
                  key={day}
                  onClick={() => setActiveDay(day)}
                  className={`px-2 py-1 rounded text-xs font-medium transition-colors ${
                    activeDay === day ? 'bg-pink-500 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {day === 1 ? '13일' : day === 2 ? '14일' : '15일'}
                </button>
              ))}
              <ArrowRight className="w-3 h-3 text-gray-400" />
            </div>
          </div>
        </div>

        {/* 현재 날짜 정보 */}
        <div className="px-3 py-2 bg-pink-500 text-white">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">
              {activeDay === 1 ? '一日目' : activeDay === 2 ? '二日目' : '三日目'}:
              {activeDay === 1 ? '火曜日' : activeDay === 2 ? '木曜日' : '金曜日'}
            </span>
            <button
              onClick={() => setIsDepartureTimeDialogOpen(true)}
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
          ) : (
            <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
              <SortableContext items={currentSpots.map((spot) => spot.id)} strategy={verticalListSortingStrategy}>
                <div className="space-y-4">
                  {currentSpots.map((spot, index) => {
                    const nextSegment = currentSegments.find(
                      (segment) =>
                        segment.fromSpot?.id === spot.id && segment.toSpot?.id === currentSpots[index + 1]?.id,
                    );

                    return (
                      <SortableSpotItem
                        key={spot.id}
                        spot={spot}
                        spotIndex={index}
                        totalSpots={currentSpots.length}
                        onEdit={editSpot}
                        onDelete={deleteSpot}
                        onMoveUp={moveSpotUp}
                        onMoveDown={moveSpotDown}
                        onCalculateCost={calculateCost}
                        day={activeDay}
                        getEndTime={getEndTime}
                        nextSegment={nextSegment}
                        spotExpenses={spotExpenses}
                      />
                    );
                  })}
                </div>
              </SortableContext>
            </DndContext>
          )}
        </div>

        {/* 하단 + 버튼 */}
        <div className="p-4 border-t bg-gray-50">
          <button
            onClick={() => setIsSearchDialogOpen(true)}
            className="w-full flex items-center justify-center gap-2 py-3 bg-gray-200 text-gray-600 rounded-lg hover:bg-gray-300 transition-colors"
          >
            <Plus className="w-5 h-5" />
            <span>観光地を追加</span>
          </button>{' '}
        </div>
      </div>
    );
  };

  // 총 비용 계산 (모바일 헤더에서 사용)
  const calculateTotalCosts = () => {
    const dayTotal = calculateTotalCost(spots[activeDay] || []);
    const tripTotal = Object.values(spots)
      .flat()
      .reduce((total, spot) => {
        const cost = parseInt(spot.cost.replace(/[^\d]/g, '') || '0');
        const expenses = spotExpenses[spot.id] || [];
        const expenseTotal = expenses.reduce((sum, expense) => sum + expense.amount, 0);
        return total + cost + expenseTotal;
      }, 0);
    return { dayTotal, tripTotal };
  };

  const { dayTotal, tripTotal } = calculateTotalCosts();

  return (
    <div className="h-screen bg-gray-50 flex flex-col">
      <Header />

      {/* 모바일: 세로 배치 */}
      <div className="flex flex-col lg:hidden flex-1 overflow-hidden">
        {/* 모바일 여행 정보 헤더 */}
        <div className="p-3 bg-white border-b">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4 text-gray-600" />
              <h1 className="text-lg font-bold text-gray-900">東京2泊3日旅</h1>
              <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">W</span>
              </div>
            </div>
            <div className="text-right">
              <p className="text-xs text-gray-600">旅行総額: {tripTotal.toLocaleString()} ¥</p>
              <p className="text-xs text-gray-600">今日の合計: {dayTotal.toLocaleString()} ¥</p>
            </div>
          </div>
          <p className="text-xs text-gray-500">2026.05.13 - 2026.05.15</p>
        </div>

        {/* 모바일 지도 */}
        <div className="h-80 bg-white border-b">
          <GoogleMapView
            spots={spots[activeDay] || []}
            travelSegments={travelSegments[activeDay] || []}
            activeDay={activeDay}
          />
        </div>

        {/* 모바일 날짜 탭 */}
        <div className="p-3 bg-white border-b">
          <div className="flex items-center justify-center gap-2">
            <ArrowLeft className="w-3 h-3 text-gray-400" />
            {[1, 2, 3].map((day) => (
              <button
                key={day}
                onClick={() => setActiveDay(day)}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeDay === day ? 'bg-pink-500 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {day === 1 ? '13일' : day === 2 ? '14일' : '15일'}
              </button>
            ))}
            <ArrowRight className="w-3 h-3 text-gray-400" />
          </div>
        </div>

        {/* 모바일 스팟 리스트 */}
        <div className="flex-1 overflow-y-auto">
          <MobileSpotList />
        </div>
      </div>

      {/* 데스크톱: 가로 배치 (플랜 왼쪽, 지도 오른쪽) */}
      <div className="hidden lg:flex flex-1 overflow-hidden">
        {/* Left Column - Itinerary Planner */}
        <div className="flex flex-col bg-white" style={{ width: `${leftPanelWidth}%` }}>
          <ItineraryPlanner />
        </div>

        {/* Resizable Divider - 데스크톱에서만 표시 */}
        <div
          className={`w-1 bg-gray-300 hover:bg-gray-400 cursor-col-resize transition-all duration-200 relative group ${
            isDragging ? 'bg-blue-400 shadow-lg' : ''
          }`}
          onMouseDown={handleMouseDown}
        >
          {/* 드래그 핸들 시각적 표시 */}
          <div className="absolute inset-y-0 -left-2 -right-2 flex items-center justify-center">
            <div
              className={`w-1 h-12 rounded-full transition-all duration-200 ${
                isDragging ? 'bg-blue-500 shadow-md' : 'bg-gray-400 group-hover:bg-gray-500 group-hover:h-16'
              }`}
            ></div>
          </div>

          {/* 드래그 중일 때 좌우 영역 표시 */}
          {isDragging && (
            <>
              <div className="absolute inset-y-0 -left-1 w-1 bg-blue-200 opacity-50"></div>
              <div className="absolute inset-y-0 -right-1 w-1 bg-blue-200 opacity-50"></div>
            </>
          )}
        </div>

        {/* Right Column - Map View */}
        <div className="flex flex-col" style={{ width: `${100 - leftPanelWidth}%` }}>
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
        currentSpotCount={spots[activeDay]?.length || 0}
      />

      {/* 출발 시간 설정 다이얼로그 */}
      {isDepartureTimeDialogOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-96">
            <h3 className="text-lg font-semibold mb-4">出発時間設定</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">時間</label>
                <select
                  value={departureTime.hour}
                  onChange={(e) => setDepartureTime((prev) => ({ ...prev, hour: parseInt(e.target.value) }))}
                  className="w-full p-2 border border-gray-300 rounded-md"
                >
                  {Array.from({ length: 24 }, (_, i) => (
                    <option key={i} value={i}>
                      {i.toString().padStart(2, '0')}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">分</label>
                <select
                  value={departureTime.minute}
                  onChange={(e) => setDepartureTime((prev) => ({ ...prev, minute: parseInt(e.target.value) }))}
                  className="w-full p-2 border border-gray-300 rounded-md"
                >
                  {Array.from({ length: 60 }, (_, i) => (
                    <option key={i} value={i}>
                      {i.toString().padStart(2, '0')}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="flex justify-end gap-2 mt-6">
              <button
                onClick={() => setIsDepartureTimeDialogOpen(false)}
                className="px-4 py-2 text-gray-600 border border-gray-300 rounded-md hover:bg-gray-50"
              >
                キャンセル
              </button>
              <button
                onClick={() => setIsDepartureTimeDialogOpen(false)}
                className="px-4 py-2 bg-pink-500 text-white rounded-md hover:bg-pink-600"
              >
                確認
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 관광지 편집 다이얼로그 */}
      {isEditDialogOpen && editingSpot && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-96">
            <h3 className="text-lg font-semibold mb-4">観光地編集</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-gray-900 mb-2">{editingSpot.location}</h4>
                <p className="text-sm text-gray-600 mb-4">{editingSpot.address}</p>
              </div>
              {/* 첫 번째 스팟(호텔)이 아닐 때만 이동 방법과 체류시간 선택 표시 */}
              {(() => {
                const currentSpots = spots[activeDay] || [];
                const spotIndex = currentSpots.findIndex((spot) => spot.id === editingSpot.id);
                const isFirstSpot = spotIndex === 0;

                if (isFirstSpot) {
                  return (
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">移動手段</label>
                        <div className="w-full p-2 border border-gray-300 rounded-md bg-gray-100 text-gray-500">
                          🏨 ホテル (移動手段不要)
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">滞在時間</label>
                        <div className="w-full p-2 border border-gray-300 rounded-md bg-gray-100 text-gray-500">
                          🏨 ホテル (滞在時間自動設定)
                        </div>
                      </div>
                    </div>
                  );
                }

                return (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">移動手段</label>
                      <select
                        value={editingSpot.transportMode || 'walking'}
                        onChange={(e) => {
                          const newMode = e.target.value as 'walking' | 'driving' | 'transit';
                          updateSpotTransportMode(editingSpot.id, newMode);
                        }}
                        className="w-full p-2 border border-gray-300 rounded-md"
                      >
                        <option value="walking">🚶 徒歩</option>
                        <option value="driving">🚗 車</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">滞在時間</label>
                      <select
                        value={editingSpot.duration}
                        onChange={async (e) => {
                          const newDuration = e.target.value;
                          // 먼저 spots 상태를 업데이트하고 업데이트된 spots를 받아옴
                          const updatedSpots = spots[activeDay].map((spot) =>
                            spot.id === editingSpot.id ? { ...spot, duration: newDuration } : spot,
                          );

                          // 편집 중인 관광지 정보도 업데이트
                          setEditingSpot((prev) => (prev ? { ...prev, duration: newDuration } : null));

                          // 업데이트된 spots로 이동시간 재계산 (이 함수에서 spots 상태도 업데이트됨)
                          await recalculateTravelTimes(updatedSpots);
                        }}
                        className="w-full p-2 border border-gray-300 rounded-md"
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
                  </div>
                );
              })()}
            </div>
            <div className="flex justify-between items-center mt-6">
              <button
                onClick={() => {
                  setIsEditDialogOpen(false);
                  setIsSpotChangeDialogOpen(true);
                }}
                className="px-3 py-2 text-sm text-blue-600 border border-blue-300 rounded-md hover:bg-blue-50 transition-colors"
              >
                📍 観光地変更
              </button>
              <div className="flex gap-2">
                <button
                  onClick={() => {
                    setIsEditDialogOpen(false);
                    setEditingSpot(null);
                  }}
                  className="px-3 py-2 text-sm text-gray-600 border border-gray-300 rounded-md hover:bg-gray-50"
                >
                  キャンセル
                </button>
                <button
                  onClick={() => {
                    setIsEditDialogOpen(false);
                    setEditingSpot(null);
                  }}
                  className="px-3 py-2 text-sm bg-pink-500 text-white rounded-md hover:bg-pink-600"
                >
                  保存
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 관광지 변경 다이얼로그 */}
      {isSpotChangeDialogOpen && editingSpot && (
        <SpotSearchDialog
          isOpen={isSpotChangeDialogOpen}
          onClose={() => {
            setIsSpotChangeDialogOpen(false);
            setEditingSpot(null);
          }}
          onAddSpot={changeSpot}
          day={activeDay}
          currentSpotCount={spots[activeDay]?.length || 0}
        />
      )}

      {/* 비용 추가 다이얼로그 */}
      {isCostDialogOpen && costCalculatingSpot && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-6 w-[400px] shadow-2xl">
            {/* 제목 */}
            <h3 className="text-xl font-bold text-orange-500 mb-6 text-center">費用追加</h3>

            {/* 金額入力 */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">金額入力(円)</label>
              <input
                type="text"
                value={expenseInputs.amount || ''}
                onChange={(e) => {
                  const value = e.target.value.replace(/[^\d]/g, '');
                  setExpenseInputs((prev) => ({ ...prev, amount: parseInt(value) || 0 }));
                }}
                placeholder="1,000"
                className="w-full p-3 text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              />
            </div>

            {/* カテゴリ選択 */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-3">カテゴリ</label>
              <div className="grid grid-cols-7 gap-2">
                {[
                  { key: 'LODGING', icon: 'lodging', label: '宿泊' },
                  { key: 'AVIATION', icon: 'airplane', label: '航空' },
                  { key: 'TRANSPORT', icon: 'traffic', label: '交通' },
                  { key: 'FOOD', icon: 'restaurant', label: '食費' },
                  { key: 'SHOPPING', icon: 'shopping', label: '買い物' },
                  { key: 'SIGHTSEEING', icon: 'ticket', label: '観光' },
                  { key: 'OTHER', icon: 'etc', label: 'その他' },
                ].map((category) => (
                  <button
                    key={category.key}
                    onClick={() => setExpenseInputs((prev) => ({ ...prev, category: category.key }))}
                    className={`flex flex-col items-center p-2 rounded-lg transition-all duration-200 ${
                      expenseInputs.category === category.key
                        ? 'bg-orange-500 text-white'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    <img
                      src={`/svg/${category.icon}.svg`}
                      alt={category.label}
                      className={`w-6 h-6 mb-1 ${expenseInputs.category === category.key ? 'brightness-0 invert' : ''}`}
                    />
                    <span className="text-xs font-medium">{category.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* 버튼 */}
            <div className="flex gap-3">
              <button
                onClick={() => {
                  setIsCostDialogOpen(false);
                  setCostCalculatingSpot(null);
                }}
                className="flex-1 px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors font-medium"
                disabled={isLoading}
              >
                キャンセル
              </button>
              <button
                onClick={saveExpenses}
                className="flex-1 px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={isLoading}
              >
                {isLoading ? '登録中...' : '登録'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TripPlannerPage;
