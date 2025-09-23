import { useEffect, useState, useCallback, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useIsMobile } from '../../hooks/useIsMobile';
import { Button } from '../../components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../components/ui/select';
import { Card, CardContent, CardTitle } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';
import Header from '../../components/layout/header';
import SideNavigation from '../../components/layout/side-navigation';
import { MoreVertical, Calendar as CalendarIcon, User, MapPin } from 'lucide-react';
import CustomPagination from '../../Pagination';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from '../../components/ui/dropdown-menu';
import CategoryTabs from '../../components/common/CategoryTabs';
import SkeletonCard from './components/SkeletonCard';
import PlanDetailContent from './components/PlanDetailContent';
import { axiosInstance } from '../../api/axios';
import { toast } from 'sonner';
import { Plan } from '../../lib/type';
import dayjs from 'dayjs';

export default function Plans() {
  const navigate = useNavigate();
  const { planId } = useParams<{ planId?: string }>();
  const isMobile = useIsMobile();

  //페이징 프론트 단에서 처리
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const itemsPerPage = 4; // 페이지당 아이템 수

  // 여행 계획 목록
  const [allPlanList, setAllPlanList] = useState<Plan[]>([]); // 전체 리스트
  const [planList, setPlanList] = useState<Plan[]>([]); // 현재 페이지에 표시할 리스트
  const [isLoading, setIsLoading] = useState(false); // 로딩 상태

  // 현재 선택된 카테고리
  const [selectedCategory, setSelectedCategory] = useState('すべて');

  // 선택된 지역과 계획 상태
  const [selectedPrefecture, setSelectedPrefecture] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('');

  // 선택된 여행 계획 ID (오른쪽 사이드바 표시용)
  const [selectedPlanId, setSelectedPlanId] = useState<number | null>(null);

  // 멤버 수정 팝업 상태
  const [isMemberEditPopupOpen, setIsMemberEditPopupOpen] = useState(false);

  // 친구 초대 팝업 상태
  const [isInvitePopupOpen, setIsInvitePopupOpen] = useState(false);

  // 와리깡 팝업 상태
  const [isWarikanPopupOpen, setIsWarikanPopupOpen] = useState(false);

  // 카테고리 목록
  const categories = ['すべて', '東日本', '南日本', '西日本', '北日本'];

  // 카테고리별 지역 목록
  const [regionsByCategory, setRegionsByCategory] = useState<string[]>([]);
  const regionsByCategoryRef = useRef<string[]>([]);
  const isChangingCategoryRef = useRef(false);

  // URL에서 planId가 있을 때 해당 플랜을 자동 선택하고 URL 정리
  useEffect(() => {
    if (planId && allPlanList.length > 0) {
      const planIdNumber = parseInt(planId, 10);
      const targetPlan = allPlanList.find((plan) => plan.id === planIdNumber);

      if (targetPlan) {
        if (isMobile) {
          // 모바일에서는 detail 페이지로 이동 (이전 화면 데이터 전달)
          navigate(`/plans/${planIdNumber}/detail`, { replace: true, state: { plan: targetPlan } });
        } else {
          // 데스크톱에서는 플랜 선택하고 URL 정리
          setSelectedPlanId(planIdNumber);
          navigate('/plans', { replace: true });
        }
      } else {
        // 해당 플랜이 없으면 URL만 정리
        navigate('/plans', { replace: true });
      }
    }
  }, [planId, allPlanList, navigate, isMobile]);

  // 현재 페이지에 표시할 리스트 업데이트
  const updateCurrentPageList = useCallback(() => {
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentPageItems = allPlanList.slice(startIndex, endIndex);
    setPlanList(currentPageItems);

    // 총 페이지 수 계산
    const totalPagesCount = Math.ceil(allPlanList.length / itemsPerPage);
    setTotalPages(totalPagesCount || 1);
  }, [page, allPlanList, itemsPerPage]);

  // 여행 계획 목록 조회
  const fetchPlanList = useCallback(
    async (selectedPrefecture: string, selectedStatus: string, currentRegions?: string[]) => {
      let response;
      setIsLoading(true);
      try {
        // URL 파라미터 구성
        const params = new URLSearchParams();

        // currentRegions가 전달되면 사용하고, 아니면 현재 regionsByCategory 사용
        const regionsToUse = currentRegions || regionsByCategoryRef.current;

        // 카테고리가 '전체'가 아닐 때는 해당 카테고리의 지역들을 포함
        if (selectedCategory !== 'すべて' && regionsToUse.length > 0) {
          if (selectedPrefecture) {
            // 특정 지역이 선택된 경우, 그 지역만 사용
            params.append('prefecture', selectedPrefecture);
          } else {
            // 지역이 선택되지 않은 경우, 카테고리의 모든 지역들 사용
            const regionsParam = regionsToUse.join(',');
            params.append('prefectures', regionsParam);
          }
        } else if (selectedPrefecture) {
          // 전체 카테고리이면서 특정 지역이 선택된 경우
          params.append('prefecture', selectedPrefecture);
        }

        // 상태 파라미터 추가
        if (selectedStatus) {
          params.append('status', selectedStatus);
        }

        // API 요청
        if (params.toString()) {
          response = await axiosInstance.get(`/api/plans/search?${params.toString()}`);
        } else {
          response = await axiosInstance.get('/api/plans');
        }

        setAllPlanList(response.data.data);
        setPage(1); // 새로운 데이터 로드 시 첫 페이지로 이동
      } catch (error) {
        toast.error('旅行計画の取得に失敗しました。', {
          position: 'top-center',
        });
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    },
    [selectedCategory],
  );

  const ChangeCategory = useCallback(async () => {
    try {
      isChangingCategoryRef.current = true;
      let url = '';
      if (selectedCategory === 'すべて') {
        url = '/api/categories/regions';
      } else {
        url = `/api/categories/regions?region=${selectedCategory}`;
      }

      const response = await axiosInstance.get(url);
      setRegionsByCategory(response.data.data);
      regionsByCategoryRef.current = response.data.data;

      // 지역 목록을 받아온 후 바로 여행 계획 조회
      await fetchPlanList('', '', response.data.data);
      isChangingCategoryRef.current = false;
    } catch (error) {
      console.error(error);
      toast.error('カテゴリの変更に失敗しました。', { position: 'top-center' });
      isChangingCategoryRef.current = false;
    }
  }, [selectedCategory, fetchPlanList]);

  useEffect(() => {
    ChangeCategory();
  }, [ChangeCategory]);

  useEffect(() => {
    //여행 리스트 조회 (카테고리 변경 중이 아닐 때만)
    if (!isChangingCategoryRef.current) {
      fetchPlanList(selectedPrefecture, selectedStatus);
    }
  }, [selectedPrefecture, selectedStatus, fetchPlanList]);

  useEffect(() => {
    //카테고리 변경 시 지역, 상태 초기화
    setSelectedPrefecture('');
    setSelectedStatus('');
  }, [selectedCategory]);

  // 페이지 변경 시 현재 페이지 리스트 업데이트
  useEffect(() => {
    updateCurrentPageList();
  }, [updateCurrentPageList]);

  const handleModifyPlan = (event: React.MouseEvent<HTMLDivElement>, plan: Plan) => {
    //플랜 수정
    event.stopPropagation();
    event.preventDefault();
    navigate(`/newPlan`, { state: { plan: plan } });
  };

  //플랜 삭제
  const handleDeletePlan = async (event: React.MouseEvent<HTMLDivElement>, planId: number) => {
    event.stopPropagation();
    event.preventDefault();
    setIsLoading(true);

    try {
      await axiosInstance.delete(`/api/plans/${planId}`);
      toast.success('該当のプランが削除されました。', { position: 'top-center' });
    } catch (error) {
      console.error('プランの削除に失敗しました。', error);
      toast.error('プランの削除に失敗しました。', { position: 'top-center' });
    } finally {
      setIsLoading(false);
      setSelectedPlanId(null);
      fetchPlanList(selectedPrefecture, selectedStatus);
    }
  };

  return (
    <div className="min-h-screen">
      {/* 헤더 */}
      <Header />

      <div className="flex">
        {/* 사이드바 네비게이션 (데스크톱만) */}
        <SideNavigation selectedNav="plans" />

        {/* 메인 컨텐츠 */}
        <div className="flex-1 lg:flex">
          {/* 왼쪽 메인 영역 */}
          <div className="flex-1 p-6 lg:py-10 lg:px-30">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">私の旅行計画</h1>

            {/* 카테고리 탭 */}
            <CategoryTabs
              categories={categories}
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
              onCategorySelect={() => {
                setSelectedPrefecture(''); // 카테고리 변경 시 지역 선택 초기화
                setPage(1); // 첫 페이지로 이동
                setSelectedPlanId(null); // 선택된 계획 초기화
              }}
            />

            {/* 지역 선택 */}
            <div className="flex gap-4 mb-8">
              <Select
                value={selectedPrefecture}
                onValueChange={(value) => {
                  setSelectedPrefecture(value);
                  setPage(1); // 첫 페이지로 이동
                  setSelectedPlanId(null); // 선택된 계획 초기화
                }}
              >
                <SelectTrigger className="w-40 px-4 py-3 border border-gray-200 rounded-xl text-gray-700 bg-[#FCFAF6] text-sm">
                  <SelectValue placeholder="地域を選択" />
                </SelectTrigger>
                <SelectContent>
                  {regionsByCategory.map((region: string) => (
                    <SelectItem key={region} value={region}>
                      {region}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select
                value={selectedStatus}
                onValueChange={(value) => {
                  setSelectedStatus(value);
                  setPage(1); // 첫 페이지로 이동
                  setSelectedPlanId(null); // 선택된 계획 초기화
                }}
              >
                <SelectTrigger className="w-48 px-4 py-3 border border-gray-200 rounded-xl text-gray-700 bg-[#FCFAF6] text-sm">
                  <SelectValue placeholder="状態を選択" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="PLANNING">計画中の旅行</SelectItem>
                  <SelectItem value="COMPLETED">完了した旅行</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* 여행 계획 목록 */}
            <div className="space-y-4">
              {isLoading ? (
                // 로딩 중일 때 스켈레톤 카드들 표시
                Array.from({ length: itemsPerPage }).map((_, index) => <SkeletonCard key={index} />)
              ) : allPlanList.length === 0 ? (
                <div className="text-center py-8">
                  <p className="text-gray-500 text-lg mb-2">旅行計画がありません。</p>
                  <p className="text-gray-400 text-sm">新しい旅行計画を作成してください！</p>
                </div>
              ) : (
                planList.map((plan) => {
                  return (
                    <Card
                      key={plan.id}
                      onClick={() => {
                        if (isMobile) {
                          // 모바일에서는 새 페이지로 이동
                          navigate(`/plans/${plan.id}/detail`, { state: { plan } });
                        } else {
                          // 데스크톱에서는 사이드바 표시
                          setSelectedPlanId(plan.id);
                        }
                      }}
                      className={`bg-[#FFF7F0] hover:shadow-lg transition-al cursor-pointer border-2 ${
                        selectedPlanId === plan.id
                          ? 'ring-2 ring-orange-500 ring-offset-2 border-orange-200 bg-orange-200'
                          : 'border-gray-100 hover:border-gray-200'
                      }`}
                    >
                      <CardContent className="p-5">
                        <div className="flex gap-10">
                          <img
                            src={import.meta.env.VITE_API_URL + plan.prefectureImageUrl}
                            alt={plan.prefecture}
                            className="w-30 h-30 object-cover object-center rounded-xl flex-shrink-0"
                          />
                          <div className="flex-1">
                            <div className="flex items-start justify-between mb-3">
                              <div className="flex-1">
                                <Badge variant="secondary" className="w-fit bg-gray-200 flex items-center gap-1">
                                  <MapPin className="w-3 h-3" />
                                  {plan.prefecture}
                                </Badge>
                                <CardTitle className="text-lg mb-2 mt-5">{plan.title}</CardTitle>
                                <div className="flex justify-between mt-5">
                                  <Badge variant="secondary" className="flex items-center gap-1 bg-gray-200">
                                    <User className="w-3 h-3" />
                                    {plan?.members?.filter((member) => member?.role === 'OWNER')[0]?.userNickname}
                                  </Badge>
                                  <Badge variant="outline" className="flex items-center gap-1 bg-gray-200">
                                    <CalendarIcon className="w-3 h-3" />
                                    {dayjs(plan.endDate).diff(dayjs(plan.startDate), 'day') + 1} Days
                                  </Badge>
                                </div>
                              </div>
                              <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                  <Button
                                    type="button"
                                    onClick={(event) => {
                                      event.stopPropagation();
                                      event.preventDefault();
                                    }}
                                    variant="ghost"
                                    size="sm"
                                    className="h-8 w-8 p-0"
                                  >
                                    <MoreVertical className="h-4 w-4" />
                                  </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end" className="w-40">
                                  <DropdownMenuItem onClick={(event) => handleModifyPlan(event, plan)}>
                                    編集
                                  </DropdownMenuItem>
                                  <DropdownMenuItem onClick={(event) => handleDeletePlan(event, plan.id)}>
                                    削除
                                  </DropdownMenuItem>
                                </DropdownMenuContent>
                              </DropdownMenu>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })
              )}
            </div>

            {/* 페이지네이션 */}
            {totalPages > 1 && (
              <div className="flex justify-center mt-6">
                <CustomPagination
                  currentPage={page}
                  totalPages={totalPages}
                  onPageChange={(newPage: number) => {
                    setPage(newPage);
                    setSelectedPlanId(null); // 페이지 변경 시 선택된 계획 초기화
                  }}
                />
              </div>
            )}
          </div>

          {/* 오른쪽 사이드바 (데스크톱만, 선택된 계획이 있을 때만) */}
          {selectedPlanId &&
            (() => {
              const selectedPlan = planList.find((plan) => plan.id === selectedPlanId);
              if (!selectedPlan) return null;

              return (
                <div className="hidden lg:block w-180 p-20 bg-white border-l border-gray-200">
                  <div className="flex items-center justify-between mb-8">
                    <h2 className="text-2xl font-bold text-gray-900">旅行プラン概要</h2>
                    <button
                      onClick={() => setSelectedPlanId(null)}
                      className="text-gray-400 hover:text-gray-600 p-1 rounded-full hover:bg-gray-100"
                    >
                      <span className="text-xl">✕</span>
                    </button>
                  </div>

                  <PlanDetailContent
                    plan={selectedPlan}
                    onMemberEdit={() => setIsMemberEditPopupOpen(true)}
                    onInvite={() => {
                      if (!selectedPlanId) {
                        toast.error('先に旅行計画を選択してください。', { position: 'top-center' });
                        return;
                      }
                      setIsInvitePopupOpen(true);
                    }}
                    onWarikan={() => setIsWarikanPopupOpen(true)}
                    onAfterMemberChange={() => {
                      // 데스크탑: 선택 해제 후 목록 새로고침
                      setSelectedPlanId(null);
                      fetchPlanList(selectedPrefecture, selectedStatus);
                    }}
                    isMemberEditPopupOpen={isMemberEditPopupOpen}
                    setIsMemberEditPopupOpen={setIsMemberEditPopupOpen}
                    isInvitePopupOpen={isInvitePopupOpen}
                    setIsInvitePopupOpen={setIsInvitePopupOpen}
                    isWarikanPopupOpen={isWarikanPopupOpen}
                    setIsWarikanPopupOpen={setIsWarikanPopupOpen}
                  />
                </div>
              );
            })()}
        </div>
      </div>
    </div>
  );
}
