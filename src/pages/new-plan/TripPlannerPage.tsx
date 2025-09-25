import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import SpotSearchDialog from '@/components/SpotSearchDialog';
import GoogleMapView from '@/components/GoogleMapView';
import { axiosInstance } from '@/api/axios';
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
  Save,
  X,
} from 'lucide-react';
<<<<<<< HEAD
import { createExpense, getExpensesByPlan } from '@/api/api';
=======
import { getExpensesByPlan } from '@/api/api';
import Header from '@/components/layout/header';
>>>>>>> origin/main
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
  location?: string; // 위치 정보 (매칭용)
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
                      {(() => {
                        const expenses = spotExpenses[spot.id];
                        console.log(`=== 지출 정보 표시 (spotId: ${spot.id}) ===`);
                        console.log('spotExpenses 전체:', spotExpenses);
                        console.log('현재 spot.id:', spot.id);
                        console.log('expenses:', expenses);
                        console.log('expenses length:', expenses?.length);
                        console.log('expenses type:', typeof expenses);
                        
                        if (expenses && expenses.length > 0) {
                          const total = expenses.reduce((sum: number, expense: ExpenseData) => {
                            console.log('expense:', expense, 'amount:', expense.amount);
                            return sum + expense.amount;
                          }, 0);
                          console.log('total amount:', total);
                          return (
                  <span className="text-sm font-bold text-gray-900">
                              {total.toLocaleString()}円
                  </span>
                          );
                        } else {
                          console.log('expenses가 없거나 비어있음');
                        }
                        return null;
                      })()}

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
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const planId = searchParams.get('planId');

  const [activeDay, setActiveDay] = useState(1);
  const [isSearchDialogOpen, setIsSearchDialogOpen] = useState(false);
  const [planData, setPlanData] = useState<any>(null);
  const [isLoadingPlan, setIsLoadingPlan] = useState(false);
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
  
  // spotExpenses 상태 변경 감지
  useEffect(() => {
    console.log('=== spotExpenses 상태 변경 감지 ===');
    console.log('새로운 spotExpenses:', spotExpenses);
    console.log('spotExpenses 키들:', Object.keys(spotExpenses));
  }, [spotExpenses]);
  
  const [leftPanelWidth, setLeftPanelWidth] = useState(40); // 40% (4:6 비율)
  const [isDragging, setIsDragging] = useState(false);
  const [spots, setSpots] = useState<Record<number, Spot[]>>({});
  
  // spots 상태 변경 시 spotExpenses 매칭 재수행
  useEffect(() => {
    const currentSpots = Object.values(spots).flat();
    if (currentSpots.length > 0) {
      console.log('=== spots 상태 변경 감지, spotExpenses 매칭 재수행 ===');
      console.log('현재 Spots:', currentSpots.map(spot => ({ id: spot.id, location: spot.location })));
      
      // localStorage에서 spotExpenses 데이터 가져오기
      const savedSpotExpenses = localStorage.getItem('spotExpenses');
      if (savedSpotExpenses) {
        try {
          const parsedExpenses = JSON.parse(savedSpotExpenses);
          console.log('localStorage에서 복구된 데이터:', parsedExpenses);
          
          const matchedExpenses: Record<number, ExpenseData[]> = {};
          
          // 각 현재 Spot에 대해 Expense 데이터 매칭
          currentSpots.forEach(spot => {
            // 1. 정확한 ID 매칭 시도
            if (parsedExpenses[spot.id]) {
              matchedExpenses[spot.id] = parsedExpenses[spot.id];
              console.log(`Spot ${spot.id} (${spot.location}): ID 매칭 성공`);
            } else {
              // 2. 위치(location) 기준 매칭 시도
              const matchedByLocation = Object.entries(parsedExpenses).find(([oldSpotId, expenses]) => {
                const expenseArray = expenses as ExpenseData[];
                const expense = expenseArray[0];
                return expense && (
                  (expense.location && expense.location === spot.location) ||
                  (expense.item && expense.item.includes(spot.location))
                );
              });
              
              if (matchedByLocation) {
                matchedExpenses[spot.id] = matchedByLocation[1] as ExpenseData[];
                console.log(`Spot ${spot.id} (${spot.location}): 위치 매칭 성공 (이전 ID: ${matchedByLocation[0]})`);
              } else {
                console.log(`Spot ${spot.id} (${spot.location}): 매칭 실패`);
              }
            }
          });
          
          console.log('=== spots 변경 후 최종 매칭된 Expense 데이터 ===');
          console.log('matchedExpenses:', matchedExpenses);
          setSpotExpenses(matchedExpenses);
        } catch (error) {
          console.error('localStorage 데이터 파싱 실패:', error);
        }
      }
    }
  }, [spots]);
  const [isSaveConfirmationOpen, setIsSaveConfirmationOpen] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  // localStorage에서 spots 데이터 복원 (초기 로드 시에만)
  useEffect(() => {
    if (!planId || !isInitialLoad) return;

    const savedSpots = localStorage.getItem(`trip_spots_${planId}`);
    if (savedSpots) {
      try {
        const parsedSpots = JSON.parse(savedSpots);
        console.log('=== localStorage에서 spots 데이터 복원 ===', parsedSpots);
        setSpots(parsedSpots);
      } catch (error) {
        console.error('저장된 spots 데이터 파싱 실패:', error);
      }
    }
  }, [planId, isInitialLoad]);

  // spots가 변경될 때마다 localStorage에 저장 (초기 로드 제외)
  useEffect(() => {
    if (Object.keys(spots).length > 0 && planId && !isInitialLoad && planData?.startDate && planData?.endDate) {
      // 플랜 기간에 맞게 spots 데이터 정리
      const startDate = new Date(planData.startDate);
      const endDate = new Date(planData.endDate);
      const totalDays = Math.ceil((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24)) + 1;

      const cleanedSpots: Record<number, Spot[]> = {};
      for (let day = 1; day <= totalDays; day++) {
        if (spots[day]) {
          cleanedSpots[day] = spots[day];
        }
      }

      localStorage.setItem(`trip_spots_${planId}`, JSON.stringify(cleanedSpots));
      // 관광지가 변경되면 저장 상태 초기화 (새로운 임시 데이터가 됨)
      localStorage.removeItem(`trip_saved_${planId}`);
      console.log('=== localStorage에 spots 데이터 저장 (임시 상태) ===', cleanedSpots);
    }
  }, [spots, planId, isInitialLoad, planData?.startDate, planData?.endDate]);

  // activeDay가 변경될 때 해당 날짜의 spots와 travelSegments가 없으면 빈 배열로 초기화
  useEffect(() => {
    // 플랜 기간을 벗어나는 날짜는 초기화하지 않음
    if (planData?.startDate && planData?.endDate) {
      const startDate = new Date(planData.startDate);
      const endDate = new Date(planData.endDate);
      const targetDate = new Date(startDate);
      targetDate.setDate(startDate.getDate() + activeDay - 1);

      if (targetDate >= startDate && targetDate <= endDate) {
        setSpots((prev) => ({
          ...prev,
          [activeDay]: prev[activeDay] || [],
        }));
        setTravelSegments((prev) => ({
          ...prev,
          [activeDay]: prev[activeDay] || [],
        }));
      }
    } else {
      // planData가 없으면 기본 동작
      setSpots((prev) => ({
        ...prev,
        [activeDay]: prev[activeDay] || [],
      }));
      setTravelSegments((prev) => ({
        ...prev,
        [activeDay]: prev[activeDay] || [],
      }));
    }
  }, [activeDay, planData]);

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

  const [travelSegments, setTravelSegments] = useState<Record<number, TravelSegment[]>>({});

  // 드래그 앤 드롭을 위한 센서 설정
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
  );

  // 계획 데이터 로드
  useEffect(() => {
    const loadPlanData = async () => {
      if (!planId) return;

      setIsLoadingPlan(true);
      try {
        console.log('=== 계획 데이터 로드 시작 ===');
        console.log('Plan ID:', planId);

        const response = await axiosInstance.get(`/api/plans/${planId}`);
        console.log('=== 계획 데이터 응답 ===', response.data);

        // 백엔드 응답 구조: { success: true, data: { ... } }
        const planData = response.data.data;
        console.log('=== 실제 계획 데이터 ===', planData);
        console.log('=== 데이터 구조 분석 ===', {
          title: planData?.title,
          startDate: planData?.startDate,
          endDate: planData?.endDate,
          dailyPlans: planData?.dailyPlans,
          members: planData?.members,
        });

        setPlanData(planData);

        // localStorage에 저장된 데이터가 있는지 확인
        const savedSpots = localStorage.getItem(`trip_spots_${planId}`);
        const isSaved = localStorage.getItem(`trip_saved_${planId}`) === 'true';
        let hasLocalStorageData = false;

        if (savedSpots) {
          try {
            const parsedSpots = JSON.parse(savedSpots);
            hasLocalStorageData = Object.keys(parsedSpots).length > 0;
          } catch (error) {
            console.error('localStorage 데이터 파싱 실패:', error);
            hasLocalStorageData = false;
          }
        }

        console.log('=== localStorage 데이터 확인 ===', {
          hasLocalStorageData,
          savedSpots,
          isSaved,
        });

        // localStorage 데이터가 있으면 플랜 기간에 맞게 정리
        if (hasLocalStorageData && savedSpots && planData?.startDate && planData?.endDate) {
          try {
            const parsedSpots = JSON.parse(savedSpots);
            const startDate = new Date(planData.startDate);
            const endDate = new Date(planData.endDate);
            const totalDays = Math.ceil((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24)) + 1;

            // 플랜 기간을 벗어나는 날짜 데이터 제거
            const cleanedSpots: Record<number, Spot[]> = {};
            for (let day = 1; day <= totalDays; day++) {
              if (parsedSpots[day]) {
                cleanedSpots[day] = parsedSpots[day];
              }
            }

            // 정리된 데이터를 localStorage에 다시 저장
            localStorage.setItem(`spots_${planId}`, JSON.stringify(cleanedSpots));
            console.log('=== localStorage 데이터 정리 완료 ===', {
              원본_날짜_수: Object.keys(parsedSpots).length,
              정리된_날짜_수: Object.keys(cleanedSpots).length,
              플랜_기간: `${planData.startDate} ~ ${planData.endDate}`,
            });
          } catch (error) {
            console.error('localStorage 데이터 정리 중 오류:', error);
          }
        }

        // localStorage에 임시 데이터가 없거나 저장된 상태일 때 백엔드에서 데이터 로드
        if (!hasLocalStorageData || isSaved) {
          console.log('=== 백엔드에서 spots 데이터 로드 시작 ===');

          // 계획 데이터를 기반으로 spots 초기화
          if (planData && planData.dailyPlans) {
            const newSpots: Record<number, Spot[]> = {};

            // 플랜 기간 계산
            const startDate = new Date(planData.startDate);
            const endDate = new Date(planData.endDate);
            const totalDays = Math.ceil((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24)) + 1;

            // 각 일별 계획의 스팟 데이터 로드 (플랜 기간 내에서만)
            for (let i = 0; i < Math.min(planData.dailyPlans.length, totalDays); i++) {
              const dailyPlan = planData.dailyPlans[i];
              const dayNumber = i + 1;

              // 플랜 기간을 벗어나는 날짜는 건너뛰기
              const targetDate = new Date(startDate);
              targetDate.setDate(startDate.getDate() + dayNumber - 1);

              if (targetDate < startDate || targetDate > endDate) {
                console.log(`${dayNumber}일차는 플랜 기간을 벗어나므로 스팟 로드를 건너뜀`);
                continue;
              }

              try {
                // 해당 일별 계획의 스팟 데이터 가져오기
                const spotsResponse = await axiosInstance.get(`/api/spots/daily-plans/${dailyPlan.id}`);
                console.log(`=== ${dayNumber}일차 스팟 데이터 ===`, spotsResponse.data);

                if (spotsResponse.data && spotsResponse.data.data) {
                  // 백엔드 SpotResponse를 프론트엔드 Spot 형식으로 변환
                  const convertedSpots: Spot[] = spotsResponse.data.data.map((spot: any) => ({
                    id: spot.id,
                    time: `${departureTime.hour.toString().padStart(2, '0')}:${departureTime.minute.toString().padStart(2, '0')}`, // 사용자 설정 출발시간
                    duration: spot.duration || '1時間', // 기본값
                    icon: <MapPin className="w-4 h-4" />,
                    location: spot.name,
                    address: spot.address,
                    cost: spot.cost ? `${spot.cost}円` : '0円',
                    latitude: spot.latitude,
                    longitude: spot.longitude,
                    rating: 0, // 기본값 (백엔드에 rating 필드가 없음)
                    userRatingsTotal: 0, // 기본값 (백엔드에 userRatingsTotal 필드가 없음)
                    transportMode: 'walking', // 기본값 (백엔드에 transportMode 필드가 없음)
                    expenses: [],
                  }));

                  newSpots[dayNumber] = convertedSpots;
                } else {
                  newSpots[dayNumber] = [];
                }
              } catch (error) {
                console.error(`${dayNumber}일차 스팟 데이터 로드 실패:`, error);
                newSpots[dayNumber] = [];
              }
            }

            setSpots(newSpots);
          } else if (planData?.startDate && planData?.endDate) {
            // dailyPlans가 없으면 startDate와 endDate로 빈 spots 생성
            const startDate = new Date(planData.startDate);
            const endDate = new Date(planData.endDate);
            const newSpots: Record<number, Spot[]> = {};

            let dayNumber = 1;
            for (let d = new Date(startDate); d <= endDate; d.setDate(d.getDate() + 1)) {
              newSpots[dayNumber] = [];
              dayNumber++;
            }

            setSpots(newSpots);

            // 백엔드에서 데이터를 성공적으로 로드했으면 저장 상태 초기화
            if (isSaved) {
              localStorage.removeItem(`trip_saved_${planId}`);
              console.log('=== 백엔드 데이터 로드 완료, 저장 상태 초기화 ===');
            }
          }
        } else {
          console.log('=== localStorage 데이터가 있어서 백엔드 데이터 로드 건너뜀 ===');
        }

        // travelSegments 초기화 (localStorage 데이터 여부와 관계없이)
        if (planData && planData.dailyPlans) {
          const newTravelSegments: Record<number, TravelSegment[]> = {};
          for (let i = 0; i < planData.dailyPlans.length; i++) {
            newTravelSegments[i + 1] = [];
          }
          setTravelSegments(newTravelSegments);
        } else if (planData?.startDate && planData?.endDate) {
          // dailyPlans가 없으면 startDate와 endDate로 빈 travelSegments 생성
          const startDate = new Date(planData.startDate);
          const endDate = new Date(planData.endDate);
          const newTravelSegments: Record<number, TravelSegment[]> = {};

          let dayNumber = 1;
          for (let d = new Date(startDate); d <= endDate; d.setDate(d.getDate() + 1)) {
            newTravelSegments[dayNumber] = [];
            dayNumber++;
          }

          setTravelSegments(newTravelSegments);
        }

        // 지출 데이터 로드 (localStorage 우선, 서버 API 백업)
        console.log('=== 지출 데이터 로드 시작 ===');
        
        // 1. localStorage에서 데이터 복구 시도
        const savedSpotExpenses = localStorage.getItem('spotExpenses');
        if (savedSpotExpenses) {
          try {
            const parsedExpenses = JSON.parse(savedSpotExpenses);
            console.log('=== localStorage에서 spotExpenses 복구 ===');
            console.log('복구된 데이터:', parsedExpenses);
            console.log('복구된 spotId들:', Object.keys(parsedExpenses));
            
            // spots 상태가 로드될 때까지 대기 후 매칭 수행
            console.log('=== spots 상태 확인 ===');
            console.log('현재 spots 상태:', spots);
            console.log('spots 키들:', Object.keys(spots));
            
            // spots가 아직 로드되지 않았으면 일단 복구된 데이터를 그대로 설정
            const currentSpots = Object.values(spots).flat();
            if (currentSpots.length === 0) {
              console.log('=== spots가 아직 로드되지 않음, 복구된 데이터를 그대로 설정 ===');
              setSpotExpenses(parsedExpenses);
            } else {
              console.log('=== spots 로드 완료, 매칭 수행 ===');
              console.log('현재 Spots:', currentSpots.map(spot => ({ id: spot.id, location: spot.location })));
              
              const matchedExpenses: Record<number, ExpenseData[]> = {};
              
              // 각 현재 Spot에 대해 Expense 데이터 매칭
              currentSpots.forEach(spot => {
                // 1. 정확한 ID 매칭 시도
                if (parsedExpenses[spot.id]) {
                  matchedExpenses[spot.id] = parsedExpenses[spot.id];
                  console.log(`Spot ${spot.id} (${spot.location}): ID 매칭 성공`);
                } else {
                  // 2. 위치(location) 기준 매칭 시도
                  const matchedByLocation = Object.entries(parsedExpenses).find(([oldSpotId, expenses]) => {
                    const expenseArray = expenses as ExpenseData[];
                    const expense = expenseArray[0];
                    return expense && (
                      (expense.location && expense.location === spot.location) ||
                      (expense.item && expense.item.includes(spot.location))
                    );
                  });
                  
                  if (matchedByLocation) {
                    matchedExpenses[spot.id] = matchedByLocation[1] as ExpenseData[];
                    console.log(`Spot ${spot.id} (${spot.location}): 위치 매칭 성공 (이전 ID: ${matchedByLocation[0]})`);
                  } else {
                    console.log(`Spot ${spot.id} (${spot.location}): 매칭 실패`);
                  }
                }
              });
              
              console.log('=== 최종 매칭된 Expense 데이터 ===');
              console.log('matchedExpenses:', matchedExpenses);
              setSpotExpenses(matchedExpenses);
            }
          } catch (error) {
            console.error('localStorage 데이터 파싱 실패:', error);
            setSpotExpenses({});
          }
        } else {
          console.log('=== localStorage에 spotExpenses 데이터 없음 ===');
          
          // 2. 서버 API에서 데이터 로드 시도 (백업)
        if (planId) {
          try {
              console.log('planId:', planId);
            const expensesResponse = await getExpensesByPlan(parseInt(planId));
            console.log('=== 지출 데이터 응답 ===', expensesResponse);

            if (expensesResponse && expensesResponse.data) {
              const expenses = expensesResponse.data;
              console.log('=== 지출 데이터 ===', expenses);
                console.log('지출 데이터 개수:', expenses.length);

              // spotId별로 지출 데이터 그룹화
              const groupedExpenses: Record<number, ExpenseData[]> = {};
              expenses.forEach((expense: any) => {
                  console.log('처리 중인 expense:', expense);
                if (expense.spotId) {
                  if (!groupedExpenses[expense.spotId]) {
                    groupedExpenses[expense.spotId] = [];
                  }
                    const expenseData = {
                    id: expense.id,
                    amount: expense.amount,
                    category: expense.category,
                    item: expense.item,
                    expenseDate: expense.expenseDate,
                    };
                    groupedExpenses[expense.spotId].push(expenseData);
                    console.log(`spotId ${expense.spotId}에 expense 추가:`, expenseData);
                  } else {
                    console.log('spotId가 없는 expense:', expense);
                }
              });

              console.log('=== 그룹화된 지출 데이터 ===', groupedExpenses);
                console.log('그룹화된 spotId들:', Object.keys(groupedExpenses));
              setSpotExpenses(groupedExpenses);
                
                // 서버 데이터를 localStorage에도 저장
                localStorage.setItem('spotExpenses', JSON.stringify(groupedExpenses));
                console.log('=== 서버 데이터를 localStorage에 저장 ===');
              } else {
                console.log('=== 서버에 지출 데이터가 없음 ===');
                setSpotExpenses({});
            }
          } catch (error) {
              console.error('서버 지출 데이터 로드 실패:', error);
              console.error('오류 상세:', error);
              setSpotExpenses({});
            }
          } else {
            console.log('=== planId가 없어서 지출 데이터 로드 건너뜀 ===');
            setSpotExpenses({});
          }
        }
      } catch (error) {
        console.error('계획 데이터 로드 실패:', error);
        console.error('에러 상세 정보:', {
          message: error instanceof Error ? error.message : 'Unknown error',
          status:
            error && typeof error === 'object' && 'response' in error ? (error as any).response?.status : 'No status',
          data: error && typeof error === 'object' && 'response' in error ? (error as any).response?.data : 'No data',
        });

        // 에러 발생 시 기본 데이터 설정
        setPlanData({
          title: '東京2泊3日旅',
          startDate: '2026.05.13',
          endDate: '2026.05.15',
          dailyPlans: [],
        });
      } finally {
        setIsLoadingPlan(false);
        setIsInitialLoad(false); // 초기 로드 완료
      }
    };

    loadPlanData();
  }, [planId]);

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

  // spots가 변경될 때마다 이동 시간 재계산
  useEffect(() => {
    // 초기 로드가 완료되고, 현재 활성 날짜에 스팟이 2개 이상 있을 때만 재계산
    if (!isInitialLoad && spots[activeDay] && spots[activeDay].length >= 2) {
      console.log('=== spots 변경 감지, 이동 시간 재계산 시작 ===');
      recalculateTravelTimes();
    }
  }, [activeDay, isInitialLoad]);

  // 출발시간 변경 시 기존 일정 재계산
  useEffect(() => {
    if (!isInitialLoad && spots[activeDay] && spots[activeDay].length > 0) {
      console.log('=== 출발시간 변경 감지, 일정 재계산 시작 ===');
      console.log('새로운 출발시간:', `${departureTime.hour.toString().padStart(2, '0')}:${departureTime.minute.toString().padStart(2, '0')}`);
      
      // 현재 날짜의 모든 스팟 시간 재계산
      recalculateAllSpotTimes();
    }
  }, [departureTime, isInitialLoad]);

  // 관광지 추가 함수
  const addSpot = async (
    newSpot: Spot,
    duration: string = '1時間',
    transportMode: 'walking' | 'driving' | 'transit' = 'walking',
  ) => {
    // 플랜 기간을 벗어나는 날짜에는 스팟을 추가할 수 없음
    if (planData?.startDate && planData?.endDate) {
      const startDate = new Date(planData.startDate);
      const endDate = new Date(planData.endDate);
      const targetDate = new Date(startDate);
      targetDate.setDate(startDate.getDate() + activeDay - 1);

      if (targetDate < startDate || targetDate > endDate) {
        console.warn(`${activeDay}일차는 플랜 기간을 벗어나므로 스팟을 추가할 수 없습니다.`);
        return;
      }
    }

    const currentSpots = spots[activeDay] || [];
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
      [activeDay]: [...(prev[activeDay] || []), spotWithDuration],
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
      [activeDay]: [...(prev[activeDay] || []), newSegment],
    }));

    return travelTime; // 이동 시간을 반환
  };

  // 교통수단 변경 시 이동 시간 재계산 및 도착시간 업데이트 (첫 번째 스팟 제외)
  const recalculateTravelTimes = async (updatedSpots?: Spot[]) => {
    const currentSpots = updatedSpots || spots[activeDay] || [];
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
      const currentSpots = spots[activeDay] || [];
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

    const currentSpots = spots[day] || [];
    const reorderedSpots = arrayMove(currentSpots, spotIndex, spotIndex - 1);

    // 순서 변경 후 이동시간 재계산
    await recalculateTravelTimes(reorderedSpots);
  };

  // 아래로 이동 함수
  const moveSpotDown = async (day: number, spotIndex: number) => {
    const currentSpots = spots[day] || [];
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

    // 현재 spot의 기존 코스트 값을 spotExpenses에서 가져와서 입력 필드에 설정
    const currentExpenses = spotExpenses[spot.id];
    let currentCost = 0;
    let currentCategory = 'LODGING';
    
    if (currentExpenses && currentExpenses.length > 0) {
      currentCost = currentExpenses[0].amount;
      currentCategory = currentExpenses[0].category;
      console.log('=== 기존 Expense 데이터에서 코스트 로드 ===');
      console.log('spotId:', spot.id);
      console.log('currentCost:', currentCost);
      console.log('currentCategory:', currentCategory);
    } else {
      // spotExpenses에 데이터가 없으면 spot.cost에서 가져오기 (백업)
      currentCost = parseInt(spot.cost.replace(/[^\d]/g, '') || '0');
      console.log('=== spot.cost에서 코스트 로드 (백업) ===');
      console.log('spotId:', spot.id);
      console.log('currentCost:', currentCost);
    }
    
    setExpenseInputs({
      amount: currentCost,
      category: currentCategory,
    });
  };

  // 코스트 수정 함수
  const saveExpenses = async () => {
    if (!costCalculatingSpot || expenseInputs.amount <= 0) {
      alert('金額を入力してください。');
      return;
    }

    try {
      setIsLoading(true);

      // 상세한 디버깅 정보 출력
      console.log('=== 코스트 수정 시작 ===');
      console.log('현재 시간:', new Date().toISOString());
      console.log('spotId:', costCalculatingSpot.id);
      console.log('spot 정보:', costCalculatingSpot);
      console.log('입력 데이터:', expenseInputs);

      // 기존 spot의 코스트는 업데이트하지 않음 (Expense 데이터만 사용하여 중복 방지)
      // setSpots((prev) => ({
      //   ...prev,
      //   [activeDay]: (prev[activeDay] || []).map((spot) => 
      //     spot.id === costCalculatingSpot.id 
      //       ? { ...spot, cost: `¥${expenseInputs.amount}` }
      //       : spot
      //   ),
      // }));

      // 로컬 상태로만 지출 데이터 저장 (서버 API 우회)
      const expenseData = {
        planId: parseInt(planId || '1'),
        spotId: costCalculatingSpot.id,
        item: `${costCalculatingSpot.location} - ${expenseInputs.category}`,
        amount: expenseInputs.amount,
        category: expenseInputs.category,
        expenseDate: new Date().toISOString().split('T')[0],
        location: costCalculatingSpot.location, // 위치 정보 추가 (매칭용)
      };

      console.log('=== 로컬 상태에 지출 데이터 저장 ===');
      console.log('저장 데이터:', expenseData);

      let savedExpense;
      if (spotExpenses[costCalculatingSpot.id] && spotExpenses[costCalculatingSpot.id].length > 0) {
        // 기존 지출이 있으면 업데이트
        const existingExpense = spotExpenses[costCalculatingSpot.id][0];
        console.log('=== 기존 지출 업데이트 ===');
        console.log('existingExpense:', existingExpense);
        
        savedExpense = {
          id: existingExpense.id, // 기존 ID 유지
          amount: expenseData.amount,
          category: expenseData.category,
          item: expenseData.item,
          expenseDate: expenseData.expenseDate,
          location: expenseData.location, // 위치 정보 추가
        };
        
        console.log('=== 기존 지출 업데이트 완료 ===');
        console.log('savedExpense:', savedExpense);
      } else {
        // 기존 지출이 없으면 새로 생성
        console.log('=== 새 지출 생성 ===');
        
        savedExpense = {
          id: Date.now(), // 임시 ID
          amount: expenseData.amount,
          category: expenseData.category,
          item: expenseData.item,
          expenseDate: expenseData.expenseDate,
          location: expenseData.location, // 위치 정보 추가
        };
        
        console.log('=== 새 지출 생성 완료 ===');
        console.log('savedExpense:', savedExpense);
      }

      // 로컬 상태 업데이트
      setSpotExpenses((prev) => {
        console.log('=== setSpotExpenses 호출 전 ===');
        console.log('prev (기존 상태):', prev);
        console.log('costCalculatingSpot.id:', costCalculatingSpot.id);
        console.log('savedExpense:', savedExpense);
        
        const newSpotExpenses = {
          ...prev,
          [costCalculatingSpot.id]: [savedExpense],
        };
        
        console.log('=== setSpotExpenses 호출 후 ===');
        console.log('newSpotExpenses (새로운 상태):', newSpotExpenses);
        
        // localStorage에 저장하여 새로고침해도 유지
        localStorage.setItem('spotExpenses', JSON.stringify(newSpotExpenses));
        console.log('=== localStorage에 spotExpenses 저장 ===');
        console.log('저장된 데이터:', newSpotExpenses);
        
        return newSpotExpenses;
      });
      
      console.log('=== spotExpenses 로컬 상태 업데이트 ===');
      console.log('spotId:', costCalculatingSpot.id);
      console.log('savedExpense:', savedExpense);

      // 성공 메시지 표시
      alert('コストが正常に修正されました！');

      // 다이얼로그 닫기
      setIsCostDialogOpen(false);
      setCostCalculatingSpot(null);
    } catch (error: unknown) {
      console.error('=== 코스트 수정 실패 ===');
      console.error('오류 발생 시간:', new Date().toISOString());
      console.error('오류 객체:', error);
      console.error('오류 메시지:', error instanceof Error ? error.message : 'Unknown error');
      console.error('오류 스택:', error instanceof Error ? error.stack : 'No stack trace');

      alert('原価修正に失敗しました。もう一度お試しください。');
      if (
        error &&
        typeof error === 'object' &&
        'response' in error &&
        error.response &&
        typeof error.response === 'object' &&
        'status' in error.response &&
        error.response.status === 401
      ) {
        console.error('401 인증 오류 발생 - SecurityConfig 설정 확인 필요');
        alert('認証エラーが発生しました。');
        return;
      }

      alert(`支出の保存に失敗しました。\n오류: ${error instanceof Error ? error.message : 'Unknown error'}`);
    } finally {
      setIsLoading(false);
      console.log('=== 지출 저장 완료 ===');
    }
  };

  // 관광지 이동 수단 업데이트 함수
  const updateSpotTransportMode = async (spotId: number, newTransportMode: 'walking' | 'driving' | 'transit') => {
    // 먼저 spots 상태를 업데이트하고 업데이트된 spots를 받아옴
    const updatedSpots = (spots[activeDay] || []).map((spot) =>
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

    const currentSpots = spots[activeDay] || [];
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
      [activeDay]: (prev[activeDay] || []).map((spot) => (spot.id === editingSpot.id ? updatedSpot : spot)),
    }));

    // 이동 시간 재계산
    await recalculateTravelTimes();
    setIsSpotChangeDialogOpen(false);
    setIsEditDialogOpen(false);
    setEditingSpot(null);
  };

  // 관광지 삭제 함수
  const deleteSpot = (day: number, spotId: number) => {
    const currentSpots = spots[day] || [];
    const spotIndex = currentSpots.findIndex((spot) => spot.id === spotId);

    if (spotIndex === -1) return;

    // 관광지 삭제
    setSpots((prev) => ({
      ...prev,
      [day]: (prev[day] || []).filter((spot) => spot.id !== spotId),
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
        const existingSegment = (prev[day] || []).find(
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

  // 출발시간 변경 시 모든 스팟 시간 재계산
  const recalculateAllSpotTimes = async () => {
    const currentSpots = spots[activeDay] || [];
    if (currentSpots.length === 0) return;

    console.log('=== 모든 스팟 시간 재계산 시작 ===');
    console.log('현재 스팟 수:', currentSpots.length);
    console.log('새로운 출발시간:', `${departureTime.hour.toString().padStart(2, '0')}:${departureTime.minute.toString().padStart(2, '0')}`);

    const updatedSpots: Spot[] = [];
    let currentTime = { ...departureTime };

    for (let i = 0; i < currentSpots.length; i++) {
      const spot = currentSpots[i];
      
      // 첫 번째 스팟은 출발시간으로 설정
      if (i === 0) {
        const updatedSpot = {
          ...spot,
          time: `${currentTime.hour.toString().padStart(2, '0')}:${currentTime.minute.toString().padStart(2, '0')}`,
        };
        updatedSpots.push(updatedSpot);
        
        // 다음 스팟의 시작시간 계산 (현재 스팟의 종료시간)
        const endTime = getEndTime(updatedSpot.time, spot.duration);
        const [endHour, endMinute] = endTime.split(':').map(Number);
        currentTime = { hour: endHour, minute: endMinute };
      } else {
        // 이전 스팟에서 현재 스팟으로의 이동시간 계산
        const previousSpot = updatedSpots[i - 1];
        const travelTime = await calculateTravelTime(previousSpot, spot);
        
        // 이동시간 추가
        const totalMinutes = currentTime.hour * 60 + currentTime.minute + travelTime;
        currentTime = {
          hour: Math.floor(totalMinutes / 60) % 24,
          minute: totalMinutes % 60,
        };
        
        const updatedSpot = {
          ...spot,
          time: `${currentTime.hour.toString().padStart(2, '0')}:${currentTime.minute.toString().padStart(2, '0')}`,
        };
        updatedSpots.push(updatedSpot);
        
        // 다음 스팟의 시작시간 계산 (현재 스팟의 종료시간)
        const endTime = getEndTime(updatedSpot.time, spot.duration);
        const [endHour, endMinute] = endTime.split(':').map(Number);
        currentTime = { hour: endHour, minute: endMinute };
      }
    }

    // 업데이트된 스팟들로 상태 업데이트
    setSpots((prev) => ({
      ...prev,
      [activeDay]: updatedSpots,
    }));

    console.log('=== 모든 스팟 시간 재계산 완료 ===');
    console.log('업데이트된 스팟들:', updatedSpots.map(spot => ({ name: spot.location, time: spot.time })));
  };

  // 총 비용 계산 (Expense 데이터만 사용, Spot.cost는 무시)
  const calculateTotalCost = (daySpots: Spot[]) => {
    return daySpots.reduce((total, spot) => {
      const expenses = spotExpenses[spot.id] || [];
      
      // spotExpenses에 데이터가 있으면 그것을 사용, 없으면 0
      if (expenses.length > 0) {
      const expenseTotal = expenses.reduce((sum, expense) => sum + expense.amount, 0);
        console.log(`Spot ${spot.id} (${spot.location}): Expense 총액 = ${expenseTotal}`);
        return total + expenseTotal;
      } else {
        console.log(`Spot ${spot.id} (${spot.location}): Expense 없음, 0으로 처리`);
        return total + 0; // Spot.cost는 무시하고 0으로 처리
      }
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
              {(() => {
                const dayNames = [
                  '一日目',
                  '二日目',
                  '三日目',
                  '四日目',
                  '五日目',
                  '六日目',
                  '七日目',
                  '八日目',
                  '九日目',
                  '十日目',
                ];
                const weekDays = ['日曜日', '月曜日', '火曜日', '水曜日', '木曜日', '金曜日', '土曜日'];

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
              })()}
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
                      {(() => {
                        const expenses = spotExpenses[spot.id];
                        console.log(`=== 모바일 지출 정보 표시 (spotId: ${spot.id}) ===`);
                        console.log('spotExpenses 전체:', spotExpenses);
                        console.log('현재 spot.id:', spot.id);
                        console.log('expenses:', expenses);
                        console.log('expenses length:', expenses?.length);
                        console.log('expenses type:', typeof expenses);
                        
                        if (expenses && expenses.length > 0) {
                          const total = expenses.reduce((sum: number, expense: ExpenseData) => {
                            console.log('expense:', expense, 'amount:', expense.amount);
                            return sum + expense.amount;
                          }, 0);
                          console.log('total amount:', total);
                          return (
                          <span className="text-xs font-bold text-gray-900">
                              {total.toLocaleString()}円
                          </span>
                          );
                        } else {
                          console.log('모바일: expenses가 없거나 비어있음');
                        }
                        return null;
                      })()}

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
        const expenses = spotExpenses[spot.id] || [];
        
        // spotExpenses에 데이터가 있으면 그것을 사용, 없으면 0
        if (expenses.length > 0) {
        const expenseTotal = expenses.reduce((sum, expense) => sum + expense.amount, 0);
          return total + expenseTotal;
        } else {
          return total + 0; // Spot.cost는 무시하고 0으로 처리
        }
      }, 0);

    return (
      <div className="flex flex-col h-full bg-white">
        {/* 헤더 */}
        <div className="p-3 bg-white border-b">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <button
                onClick={handleBackButtonClick}
                className="p-1 hover:bg-gray-100 rounded transition-colors"
                title="뒤로가기"
              >
                <ArrowLeft className="w-4 h-4 text-gray-600" />
              </button>
              <h1 className="text-lg font-bold text-gray-900">
                {isLoadingPlan
                  ? '로딩 중...'
                  : planData?.title || planData?.planTitle || planData?.name || '東京2泊3日旅'}
              </h1>
              <div className="flex items-center gap-1">
                {planData?.members?.slice(0, 3).map((member: any, index: number) => (
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
              {isLoadingPlan
                ? '로딩 중...'
                : planData
                ? `${planData.startDate} - ${planData.endDate}`
                : '날짜 정보 없음'}
            </p>

            {/* 날짜 탭 */}
            <div className="flex items-center gap-1">
              <ArrowLeft className="w-3 h-3 text-gray-400" />
              {(() => {
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
                        onClick={() => setActiveDay(dayNumber)}
                        className={`px-2 py-1 rounded text-xs font-medium transition-colors ${
                          activeDay === dayNumber
                            ? 'bg-pink-500 text-white'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        {getDayDate(dayNumber)}
                      </button>
                    );
                  });
                } else if (planData?.dailyPlans && planData.dailyPlans.length > 0) {
                  // dailyPlans가 있으면 그것을 사용
                  return planData.dailyPlans.map((_: any, index: number) => {
                    const dayNumber = index + 1;

                    return (
                      <button
                        key={dayNumber}
                        onClick={() => setActiveDay(dayNumber)}
                        className={`px-2 py-1 rounded text-xs font-medium transition-colors ${
                          activeDay === dayNumber
                            ? 'bg-pink-500 text-white'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        {getDayDate(dayNumber)}
                      </button>
                    );
                  });
                } else {
                  // 기본값
                  return [1, 2, 3].map((day) => (
                    <button
                      key={day}
                      onClick={() => setActiveDay(day)}
                      className={`px-2 py-1 rounded text-xs font-medium transition-colors ${
                        activeDay === day ? 'bg-pink-500 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {getDayDate(day)}
                    </button>
                  ));
                }
              })()}
              <ArrowRight className="w-3 h-3 text-gray-400" />
            </div>
          </div>
        </div>

        {/* 현재 날짜 정보 */}
        <div className="px-3 py-2 bg-pink-500 text-white">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">
              {(() => {
                const dayNames = [
                  '一日目',
                  '二日目',
                  '三日目',
                  '四日目',
                  '五日目',
                  '六日目',
                  '七日目',
                  '八日目',
                  '九日目',
                  '十日目',
                ];
                const weekDays = ['日曜日', '月曜日', '火曜日', '水曜日', '木曜日', '金曜日', '土曜日'];

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
              })()}
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
        const expenses = spotExpenses[spot.id] || [];
        
        // spotExpenses에 데이터가 있으면 그것을 사용, 없으면 0
        if (expenses.length > 0) {
        const expenseTotal = expenses.reduce((sum, expense) => sum + expense.amount, 0);
          return total + expenseTotal;
        } else {
          return total + 0; // Spot.cost는 무시하고 0으로 처리
        }
      }, 0);
    return { dayTotal, tripTotal };
  };

  const { dayTotal, tripTotal } = calculateTotalCosts();

  // 날짜 계산 함수
  const getDayDate = (dayNumber: number) => {
    if (!planData?.startDate) return `${dayNumber}日`;

    const startDate = new Date(planData.startDate);
    const targetDate = new Date(startDate);
    targetDate.setDate(startDate.getDate() + dayNumber - 1);

    return `${targetDate.getDate()}日`;
  };

  // 뒤로가기 버튼 클릭 핸들러
  const handleBackButtonClick = () => {
    // 저장할 데이터가 있는지 확인
    const hasSpotsToSave = Object.values(spots).some((daySpots) => daySpots.length > 0);

    if (hasSpotsToSave) {
      setIsSaveConfirmationOpen(true);
    } else {
      // 저장할 데이터가 없으면 바로 이전 페이지로 이동
      navigate(-1);
    }
  };

  // 저장 확인 팝업에서 저장 버튼 클릭
  const handleSaveAndExit = async () => {
    setIsSaving(true);
    try {
      // 백엔드에 spots 데이터 저장
      await saveSpotsToBackend();

      // 성공 메시지 표시
      alert('観光地が正常に保存されました！');

      // localStorage에서 임시 데이터 삭제하고 저장 완료 상태 표시
      localStorage.removeItem(`trip_spots_${planId}`);
      localStorage.setItem(`trip_saved_${planId}`, 'true');

      // 이전 페이지로 이동
      navigate(-1);
    } catch (error) {
      console.error('저장 실패:', error);
      alert('保存に失敗しました。もう一度お試しください。');
    } finally {
      setIsSaving(false);
      setIsSaveConfirmationOpen(false);
    }
  };

  // 저장 확인 팝업에서 취소 버튼 클릭
  const handleCancelAndExit = () => {
    // localStorage에서 데이터 삭제
    localStorage.removeItem(`trip_spots_${planId}`);
    localStorage.removeItem(`trip_saved_${planId}`);
    // spots 상태 초기화
    setSpots({});
    // 이전 페이지로 이동
    navigate(-1);
  };

  // 백엔드에 spots 데이터 저장하는 함수
  const saveSpotsToBackend = async () => {
    if (!planId) {
      console.error('planId가 없습니다.');
      return;
    }

    try {
      console.log('=== 백엔드 저장 시작 ===');
      console.log('저장할 spots 데이터:', spots);
      console.log('planData:', planData);
      console.log('planId:', planId);

      // 각 spot의 cost 값 상세 확인
      Object.entries(spots).forEach(([day, daySpots]) => {
        console.log(`=== ${day}일차 spots cost 상세 확인 ===`);
        daySpots.forEach((spot, index) => {
          console.log(`spot ${index + 1}:`, {
            name: spot.location,
            cost: spot.cost,
            costParsed: parseInt(spot.cost.replace(/[^\d]/g, '') || '0'),
          });
        });
      });

      // spots 데이터가 있는지 확인
      const hasSpotsToSave = Object.values(spots).some((daySpots) => daySpots.length > 0);
      if (!hasSpotsToSave) {
        console.log('저장할 spots 데이터가 없습니다.');
        return;
      }

      // 각 날짜별로 spots 데이터를 백엔드에 저장
      for (const [day, daySpots] of Object.entries(spots)) {
        console.log(`=== ${day}일차 처리 시작 ===`);
        console.log(`daySpots.length: ${daySpots.length}`);

        // 플랜 기간을 벗어나는 날짜는 건너뛰기
        const startDate = new Date(planData.startDate);
        const endDate = new Date(planData.endDate);
        const dayNumber = parseInt(day);
        const targetDate = new Date(startDate);
        targetDate.setDate(startDate.getDate() + dayNumber - 1);

        if (targetDate < startDate || targetDate > endDate) {
          console.log(`${day}일차는 플랜 기간(${planData.startDate} ~ ${planData.endDate})을 벗어나므로 건너뜀`);
          continue;
        }

        if (daySpots.length > 0) {
          // 해당 일차의 dailyPlan 찾기 (날짜로 매칭)
          const startDate = new Date(planData.startDate);
          const targetDate = new Date(startDate);
          targetDate.setDate(startDate.getDate() + parseInt(day) - 1);
          const targetDateString = targetDate.toISOString().split('T')[0];

          console.log(`=== ${day}일차 저장 시작 ===`);
          console.log(`targetDate: ${targetDateString}`);
          console.log('현재 planData.dailyPlans:', planData.dailyPlans);

          const dailyPlan = planData.dailyPlans?.find((dp: any) => {
            const dpDateString = new Date(dp.visitDate).toISOString().split('T')[0];
            console.log(`비교: ${dpDateString} === ${targetDateString}`);
            return dpDateString === targetDateString;
          });

          console.log('찾은 dailyPlan:', dailyPlan);
          console.log('dailyPlan.id:', dailyPlan?.id);

          if (dailyPlan && dailyPlan.id) {
            // 기존 spots를 가져와서 삭제
            try {
              console.log(`기존 spots 조회 시작: /api/spots/daily-plans/${dailyPlan.id}`);
              const existingSpotsResponse = await axiosInstance.get(`/api/spots/daily-plans/${dailyPlan.id}`);
              console.log('기존 spots 응답:', existingSpotsResponse.data);

              if (existingSpotsResponse.data && existingSpotsResponse.data.data) {
                console.log(`기존 spots 개수: ${existingSpotsResponse.data.data.length}`);
                // 기존 spots 삭제
                for (const existingSpot of existingSpotsResponse.data.data) {
                  console.log(`기존 spot 삭제 시작: /api/spots/${existingSpot.id}`);
                  await axiosInstance.delete(`/api/spots/${existingSpot.id}`);
                  console.log(`기존 spot 삭제 완료: ${existingSpot.id}`);
                }
              } else {
                console.log('기존 spots가 없습니다.');
              }
            } catch (error) {
              console.warn('기존 spots 조회/삭제 실패 (무시하고 계속):', error);
            }

            // 새로운 spots 저장
            for (let i = 0; i < daySpots.length; i++) {
              const spot = daySpots[i];
              const costValue = parseInt(spot.cost.replace(/[^\d]/g, '') || '0');

              console.log(`=== ${day}일차 spot ${i + 1} cost 디버깅 ===`);
              console.log('원본 spot.cost:', spot.cost);
              console.log('변환된 costValue:', costValue);
              console.log('spot 전체 정보:', spot);

              const spotRequest = {
                name: spot.location,
                address: spot.address,
                category: 'LANDMARK', // 기본 카테고리 (백엔드 SpotCategory enum 값)
                visitOrder: i, // 방문 순서
                duration: spot.duration,
                cost: costValue, // 숫자로 변환
                latitude: spot.latitude,
                longitude: spot.longitude,
              };

              console.log(`새 spot ${i + 1}/${daySpots.length} 저장 요청:`, spotRequest);
              console.log(`API URL: /api/spots/daily-plans/${dailyPlan.id}`);

              try {
                const response = await axiosInstance.post(`/api/spots/daily-plans/${dailyPlan.id}`, spotRequest);
                console.log(`새 spot ${i + 1} 저장 완료:`, response.data);

                // 백엔드 응답 데이터로 프론트엔드 spots 상태 업데이트
                if (response.data.success && response.data.data) {
                  const savedSpot = response.data.data;
                  setSpots((prev) => ({
                    ...prev,
                    [parseInt(day)]: (prev[parseInt(day)] || []).map((existingSpot: Spot, index: number) =>
                      index === i
                        ? {
                            ...existingSpot,
                            id: savedSpot.id,
                            cost: savedSpot.cost ? `${savedSpot.cost}円` : '0円',
                          }
                        : existingSpot,
                    ),
                  }));
                }
              } catch (error) {
                console.error(`새 spot ${i + 1} 저장 실패:`, error);
                throw error;
              }
            }
          } else {
            console.warn(`${day}일차에 해당하는 dailyPlan을 찾을 수 없습니다.`);
            console.warn('planData.dailyPlans:', planData?.dailyPlans);

            // DailyPlan이 없는 경우 먼저 생성
            try {
              console.log(`${day}일차 DailyPlan 생성 시작`);
              const startDate = new Date(planData.startDate);
              const visitDate = new Date(startDate);
              visitDate.setDate(startDate.getDate() + parseInt(day) - 1);

              const visitDateString = visitDate.toISOString().split('T')[0];

              const dailyPlanRequest = {
                visitDate: visitDateString,
                departureTime: `${departureTime.hour.toString().padStart(2, '0')}:${departureTime.minute.toString().padStart(2, '0')}`,
              };

              console.log('DailyPlan 생성 요청:', dailyPlanRequest);
              console.log('계산된 visitDate:', visitDateString);
              console.log('현재 planData.dailyPlans:', planData.dailyPlans);

              let newDailyPlan;
              try {
                const dailyPlanResponse = await axiosInstance.post(
                  `/api/daily-plans/plans/${planId}`,
                  dailyPlanRequest,
                );
                console.log('DailyPlan 생성 완료:', dailyPlanResponse.data);
                newDailyPlan = dailyPlanResponse.data.data;

                // planData.dailyPlans에 새로 생성된 DailyPlan 추가
                if (!planData.dailyPlans) {
                  planData.dailyPlans = [];
                }
                planData.dailyPlans.push(newDailyPlan);
                console.log('planData.dailyPlans 업데이트됨:', planData.dailyPlans);
              } catch (createError: any) {
                console.log('DailyPlan 생성 오류:', createError.response?.status, createError.response?.data);

                // 409 오류가 아닌 경우에도 기존 DailyPlan을 찾아보기
                const existingDailyPlan = planData.dailyPlans?.find((dp: any) => {
                  const dpDateString = new Date(dp.visitDate).toISOString().split('T')[0];
                  console.log(`비교: ${dpDateString} === ${visitDateString}`);
                  return dpDateString === visitDateString;
                });

                if (existingDailyPlan) {
                  newDailyPlan = existingDailyPlan;
                  console.log('기존 DailyPlan 사용:', newDailyPlan);
                } else {
                  console.error('DailyPlan을 찾을 수 없음:', createError);
                  throw createError;
                }
              }

              // 생성된 DailyPlan으로 spots 저장
              for (let i = 0; i < daySpots.length; i++) {
                const spot = daySpots[i];
                const costValue = parseInt(spot.cost.replace(/[^\d]/g, '') || '0');

                console.log(`=== ${day}일차 spot ${i + 1} cost 디버깅 (새 DailyPlan) ===`);
                console.log('원본 spot.cost:', spot.cost);
                console.log('변환된 costValue:', costValue);
                console.log('spot 전체 정보:', spot);

                const spotRequest = {
                  name: spot.location,
                  address: spot.address,
                  category: 'LANDMARK',
                  visitOrder: i,
                  duration: spot.duration,
                  cost: costValue,
                  latitude: spot.latitude,
                  longitude: spot.longitude,
                };

                console.log(`새 spot ${i + 1}/${daySpots.length} 저장 요청:`, spotRequest);
                console.log(`API URL: /api/spots/daily-plans/${newDailyPlan.id}`);

                try {
                  const response = await axiosInstance.post(`/api/spots/daily-plans/${newDailyPlan.id}`, spotRequest);
                  console.log(`새 spot ${i + 1} 저장 완료:`, response.data);

                  // 백엔드 응답 데이터로 프론트엔드 spots 상태 업데이트
                  if (response.data.success && response.data.data) {
                    const savedSpot = response.data.data;
                    setSpots((prev) => ({
                      ...prev,
                      [parseInt(day)]: (prev[parseInt(day)] || []).map((existingSpot: Spot, index: number) =>
                        index === i
                          ? {
                              ...existingSpot,
                              id: savedSpot.id,
                              cost: savedSpot.cost ? `${savedSpot.cost}円` : '0円',
                            }
                          : existingSpot,
                      ),
                    }));
                  }
                } catch (error) {
                  console.error(`새 spot ${i + 1} 저장 실패:`, error);
                  throw error;
                }
              }
            } catch (error) {
              console.error(`${day}일차 DailyPlan 생성 실패:`, error);
              throw error;
            }
          }
        } else {
          console.log(`${day}일차에는 저장할 spots가 없습니다.`);
        }
      }

      console.log('=== 백엔드 저장 완료 ===');
    } catch (error) {
      console.error('백엔드 저장 실패:', error);
      console.error('에러 상세 정보:', {
        message: error instanceof Error ? error.message : 'Unknown error',
        status:
          error && typeof error === 'object' && 'response' in error ? (error as any).response?.status : 'No status',
        data: error && typeof error === 'object' && 'response' in error ? (error as any).response?.data : 'No data',
      });
      throw error;
    }
  };

  // 로딩 중일 때 표시할 컴포넌트
  if (isLoadingPlan) {
    return (
      <div className="h-screen bg-gray-50 flex flex-col">
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mx-auto mb-4"></div>
            <p className="text-gray-600">여행 계획을 불러오는 중...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen bg-gray-50 flex flex-col">
      {/* 모바일: 세로 배치 */}
      <div className="flex flex-col lg:hidden flex-1 overflow-hidden">
        {/* 모바일 여행 정보 헤더 */}
        <div className="p-3 bg-white border-b">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <button
                onClick={handleBackButtonClick}
                className="p-1 hover:bg-gray-100 rounded transition-colors"
                title="뒤로가기"
              >
                <ArrowLeft className="w-4 h-4 text-gray-600" />
              </button>
              <h1 className="text-lg font-bold text-gray-900">
                {isLoadingPlan
                  ? '로딩 중...'
                  : planData?.title || planData?.planTitle || planData?.name || '東京2泊3日旅'}
              </h1>
              <div className="flex items-center gap-1">
                {planData?.members?.slice(0, 3).map((member: any, index: number) => (
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
          <p className="text-xs text-gray-500">
            {isLoadingPlan ? '로딩 중...' : planData ? `${planData.startDate} - ${planData.endDate}` : '날짜 정보 없음'}
          </p>
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
            {(() => {
              if (planData?.startDate && planData?.endDate) {
                // startDate와 endDate로 날짜 생성 (플랜 기간에 맞게)
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
                      onClick={() => setActiveDay(dayNumber)}
                      className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                        activeDay === dayNumber
                          ? 'bg-pink-500 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {getDayDate(dayNumber)}
                    </button>
                  );
                });
              } else if (planData?.dailyPlans && planData.dailyPlans.length > 0) {
                // dailyPlans가 있으면 그것을 사용
                return planData.dailyPlans.map((_: any, index: number) => {
                  const dayNumber = index + 1;

                  return (
                    <button
                      key={dayNumber}
                      onClick={() => setActiveDay(dayNumber)}
                      className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                        activeDay === dayNumber
                          ? 'bg-pink-500 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {getDayDate(dayNumber)}
                    </button>
                  );
                });
              } else {
                // 기본값
                return [1, 2, 3].map((day) => (
                  <button
                    key={day}
                    onClick={() => setActiveDay(day)}
                    className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                      activeDay === day ? 'bg-pink-500 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {getDayDate(day)}
                  </button>
                ));
              }
            })()}
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
                          const updatedSpots = (spots[activeDay] || []).map((spot) =>
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
<<<<<<< HEAD

                    {/* 비용 입력 */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">基本費用 (円)</label>
                      <input
                        type="number"
                        value={editingCost}
                        onChange={(e) => setEditingCost(parseInt(e.target.value) || 0)}
                        placeholder="0"
                        min="0"
                        className="w-full p-2 border border-gray-300 rounded-md"
                      />
                    </div>
=======
>>>>>>> origin/main
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
;
                  }}
                  className="px-3 py-2 text-sm text-gray-600 border border-gray-300 rounded-md hover:bg-gray-50"
                >
                  キャンセル
                </button>
                <button
                  onClick={() => {
<<<<<<< HEAD
                    if (editingSpot) {
                      // cost 값 업데이트
                      setSpots((prev) => ({
                        ...prev,
                        [activeDay]: (prev[activeDay] || []).map((spot) =>
                          spot.id === editingSpot.id ? { ...spot, cost: `¥${editingCost}` } : spot,
                        ),
                      }));
                    }
=======
>>>>>>> origin/main
                    setIsEditDialogOpen(false);
                    setEditingSpot(null);
;
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
            <h3 className="text-xl font-bold text-orange-500 mb-6 text-center">費用修正</h3>

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
                {isLoading ? '修正中...' : '修正'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 저장 확인 팝업 */}
      {isSaveConfirmationOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-6 w-[400px] shadow-2xl">
            {/* 제목 */}
            <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">保存確認</h3>

            {/* 메시지 */}
            <div className="text-center mb-6">
              <p className="text-gray-600 mb-2">設定した観光地スポットを保存しますか？</p>
              <p className="text-sm text-gray-500">
                保存するとバックエンドサーバーに永続的に保存され、
                <br />
                保存しないと設定した観光地が削除されます。
              </p>
            </div>

            {/* 버튼 */}
            <div className="flex gap-3">
              <button
                onClick={handleCancelAndExit}
                className="flex-1 px-3 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors font-medium flex items-center justify-center gap-2 text-sm"
                disabled={isSaving}
              >
                <X className="w-4 h-4" />
                キャンセル
              </button>
              <button
                onClick={handleSaveAndExit}
                className="flex-1 px-3 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-sm"
                disabled={isSaving}
              >
                {isSaving ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                    保存中...
                  </>
                ) : (
                  <>
                    <Save className="w-4 h-4" />
                    保存
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TripPlannerPage;
