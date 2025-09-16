import { useEffect, useState, useCallback, useMemo, useRef } from 'react';
import { Button } from '../../components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../components/ui/select';
import { Card, CardContent, CardTitle } from '../../components/ui/card';
import { Avatar, AvatarFallback } from '../../components/ui/avatar';
import { Badge } from '../../components/ui/badge';
import Header from '../../components/layout/header';
import SideNavigation from '../../components/layout/side-navigation';
import { MoreVertical, Calendar as CalendarIcon, User, MapPin } from 'lucide-react';
import CustomPagination from '../../Pagination';
import CategoryTabs from '../../components/common/CategoryTabs';
import MemberDetailPopup from './components/MemberDetailPopup';
import InviteMemberPopup from './components/InviteMemberPopup';
import WarikanPopup from './components/WarikanPopup';
import SkeletonCard from './components/SkeletonCard';
import TravelCalendar from './components/TravelCalendar';
import { axiosInstance } from '../../api/axios';
import { toast } from 'sonner';
import { Plan } from '../../lib/type';
import dayjs from 'dayjs';

export default function Plans() {
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

  //선택된 여행 리스트의 계획 상태 조회 용도 (진행중, 완료)
  const [selectedViewStatus, setSelectedViewStatus] = useState('');

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
        toast.error('여행 계획 조회에 실패하셨습니다.', {
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
      toast.error('카테고리 변경에 실패하셨습니다.', { position: 'top-center' });
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
    console.log('카테고리 변경 시 지역, 상태 초기화');
    setSelectedPrefecture('');
    setSelectedStatus('');
  }, [selectedCategory]);

  // 페이지 변경 시 현재 페이지 리스트 업데이트
  useEffect(() => {
    updateCurrentPageList();
  }, [updateCurrentPageList]);

  // 여행 멤버 컬러 옵션 (임시)
  const colorOptions = useMemo(
    () => [
      'bg-green-400',
      'bg-orange-400',
      'bg-purple-400',
      'bg-red-400',
      'bg-yellow-400',
      'bg-blue-400',
      'bg-pink-400',
    ],
    [],
  );

  // 랜덤 컬러를 가진 멤버 데이터 생성
  const travelMembers = useMemo(() => {
    const members = planList.find((plan) => plan.id === selectedPlanId)?.members;
    if (!members) return [];

    return members.map((member, index) => ({
      ...member,
      color: colorOptions[index % colorOptions.length],
    }));
  }, [selectedPlanId, planList, colorOptions]);

  // 선택된 plan의 status에 따라 viewStatus 설정
  useEffect(() => {
    if (selectedPlanId) {
      const selectedPlan = allPlanList.find((plan) => plan.id === selectedPlanId);
      if (selectedPlan) {
        if (selectedPlan.status === 'PLANNING') {
          setSelectedViewStatus('進行中');
        } else if (selectedPlan.status === 'COMPLETED') {
          setSelectedViewStatus('完了');
        }
      }
    } else {
      setSelectedViewStatus(''); // 선택된 plan이 없으면 빈 문자열
    }
  }, [selectedPlanId, allPlanList]);

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
          <div className="p-6 lg:py-10 lg:px-30 flex-[5]">
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
                  <p className="text-gray-500 text-lg mb-2">여행 계획이 없습니다.</p>
                  <p className="text-gray-400 text-sm">새로운 여행 계획을 만들어보세요!</p>
                </div>
              ) : (
                planList.map((plan) => {
                  return (
                    <Card
                      key={plan.id}
                      onClick={() => setSelectedPlanId(plan.id)}
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
                              <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                                <MoreVertical className="h-4 w-4" />
                              </Button>
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
                <div className="hidden lg:block p-20 bg-white border-l border-gray-200 flex-[4]">
                  <div className="flex items-center justify-between mb-8">
                    <h2 className="text-2xl font-bold text-gray-900">旅行プラン概要</h2>
                    <button
                      onClick={() => setSelectedPlanId(null)}
                      className="text-gray-400 hover:text-gray-600 p-1 rounded-full hover:bg-gray-100"
                    >
                      <span className="text-xl">✕</span>
                    </button>
                  </div>

                  {/* 진행상태 탭 */}
                  <div className="flex justify-between">
                    <div className="pointer-events-none">
                      <CategoryTabs
                        categories={['進行中', '完了']}
                        selectedCategory={selectedViewStatus}
                        onCategoryChange={() => {}} // 클릭 비활성화
                        onCategorySelect={() => {}} // 클릭 비활성화
                      />
                    </div>
                    <Button className="bg-brand-orange text-white px-4 py-2 rounded-lg text-sm font-medium">
                      詳細を見る
                    </Button>
                  </div>

                  {/* 여행 이미지 카드 */}
                  <div className="relative mb-8 rounded-2xl overflow-hidden">
                    <div
                      className="w-full h-60 bg-cover bg-center bg-no-repeat flex items-center justify-center text-white relative"
                      style={{
                        backgroundImage:
                          'url("' + import.meta.env.VITE_API_URL + selectedPlan.prefectureImageUrl + '")',
                      }}
                    >
                      <div className="text-center z-10 bg-black/60">
                        <h3 className="text-3xl font-bold mb-2">{selectedPlan.title}</h3>
                      </div>
                    </div>
                  </div>

                  {/* 여행 멤버 */}
                  <div className="mb-8">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="font-bold text-gray-900">旅行メンバー</h3>
                      <div className="flex gap-2">
                        <button
                          onClick={() => setIsMemberEditPopupOpen(true)}
                          className="bg-amber-600 text-white px-4 py-2 rounded-lg text-sm font-medium cursor-pointer"
                        >
                          メンバー修正
                        </button>
                        <button
                          onClick={() => setIsInvitePopupOpen(true)}
                          className="bg-brand-orange text-white px-4 py-2 rounded-lg text-sm font-medium cursor-pointer"
                        >
                          メンバー追加
                        </button>
                      </div>
                    </div>
                    <div className="flex gap-5">
                      {travelMembers.slice(0, 5).map((member) => (
                        <Avatar key={member.userId} className="w-18 h-18">
                          <AvatarFallback className={`${member.color} text-white text-sm font-medium`}>
                            {member.userNickname?.slice(0, 2) || '??'}
                          </AvatarFallback>
                        </Avatar>
                      ))}
                      {travelMembers.length > 5 && (
                        <Avatar className="w-18 h-18">
                          <AvatarFallback className="bg-gray-700 text-white text-sm font-bold">
                            {travelMembers.length - 5}+
                          </AvatarFallback>
                        </Avatar>
                      )}
                    </div>
                  </div>

                  {/* 총 지불 금액 */}
                  <div className="mb-8">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="font-bold text-gray-900">総支払金額</h3>
                      <div className="flex gap-2">
                        <button
                          onClick={() => setIsWarikanPopupOpen(true)}
                          className="bg-brand-orange text-white px-4 py-2 rounded-lg text-sm font-medium cursor-pointer"
                        >
                          メンバーと割り勘
                        </button>
                      </div>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                            <span className="text-green-600 font-bold text-lg">¥</span>
                          </div>
                          <div>
                            <p className="text-sm text-gray-600">現在の総額</p>
                            <p className="text-2xl font-bold text-gray-900">¥{(0).toLocaleString('ja-JP')}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-xs text-gray-500">メンバー当たり</p>
                          <p className="text-lg font-semibold text-gray-700">
                            ¥
                            {travelMembers.length > 0
                              ? Math.ceil(0 / travelMembers.length).toLocaleString('ja-JP')
                              : '0'}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 여행 기간 캘린더 */}
                  <div className="mb-8">
                    <h3 className="font-bold text-gray-900 mb-4">旅行期間</h3>
                    <TravelCalendar startDate={selectedPlan.startDate} endDate={selectedPlan.endDate} />
                  </div>
                </div>
              );
            })()}
        </div>
      </div>

      {/* 멤버 수정 팝업 */}
      <MemberDetailPopup
        open={isMemberEditPopupOpen}
        onOpenChange={setIsMemberEditPopupOpen}
        members={travelMembers}
        onConfirm={(memberId, role) => {
          console.log('修正されたメンバー ID:', memberId, '役割:', role);
          const memberName = travelMembers.find((m) => m.id === memberId)?.userNickname || 'メンバー';

          // DB role을 UI role로 변환해서 토스트에 표시
          const roleDisplayMap: { [key: string]: string } = {
            OWNER: '管理者',
            EDITOR: '編集者',
            VIEWER: 'ビューア',
          };
          const displayRole = roleDisplayMap[role] || role;

          toast.success(`${memberName}の役割が${displayRole}に修正されました。`, {
            position: 'top-center',
          });
        }}
        onCancel={() => {
          console.log('メンバー修正がキャンセルされました。');
        }}
      />

      {/* 멤버 초대 팝업 */}
      <InviteMemberPopup
        open={isInvitePopupOpen}
        onOpenChange={setIsInvitePopupOpen}
        planId={selectedPlanId || 0}
        onConfirm={(email, role) => {
          console.log('招待メール:', email, '役割:', role);

          // DB role을 UI role로 변환해서 토스트에 표시
          const roleDisplayMap: { [key: string]: string } = {
            OWNER: '管理者',
            EDITOR: '編集者',
            VIEWER: 'ビューア',
          };
          const displayRole = roleDisplayMap[role] || role;

          toast.success(`${email}に${displayRole}として招待を送信しました。`, {
            position: 'top-center',
          });
        }}
        onCancel={() => {
          console.log('招待がキャンセルされました。');
        }}
      />

      {/* 와리깡 팝업 */}
      <WarikanPopup
        open={isWarikanPopupOpen}
        onOpenChange={setIsWarikanPopupOpen}
        members={travelMembers}
        totalAmount={20500} // 임시 금액
        onConfirm={(amounts) => {
          console.log('割り勘 結果:', amounts);
          const totalCalculated = Object.values(amounts).reduce((sum, amount) => sum + amount, 0);
          toast.success(`割り勘が完了しました。総額: ¥${totalCalculated.toLocaleString('ja-JP')}`, {
            position: 'top-center',
          });
        }}
        onCancel={() => {
          console.log('割り勘がキャンセルされました。');
        }}
      />
    </div>
  );
}
