import { useEffect, useState, useMemo } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from '../../components/ui/button';
import { Avatar, AvatarFallback } from '../../components/ui/avatar';
import { Badge } from '../../components/ui/badge';
import Header from '../../components/layout/header';
import CategoryTabs from '../../components/common/CategoryTabs';
import MemberDetailPopup from './components/MemberDetailPopup';
import InviteMemberPopup from './components/InviteMemberPopup';
import WarikanPopup from './components/WarikanPopup';
import TravelCalendar from './components/TravelCalendar';
import { axiosInstance } from '../../api/axios';
import { toast } from 'sonner';
import { Plan } from '../../lib/type';
import dayjs from 'dayjs';
import { ArrowLeft, User, MapPin, Calendar as CalendarIcon } from 'lucide-react';

export default function PlanDetail() {
  const navigate = useNavigate();
  const { planId } = useParams<{ planId: string }>();
  const [plan, setPlan] = useState<Plan | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // 멤버 수정 팝업 상태
  const [isMemberEditPopupOpen, setIsMemberEditPopupOpen] = useState(false);

  // 친구 초대 팝업 상태
  const [isInvitePopupOpen, setIsInvitePopupOpen] = useState(false);

  // 와리깡 팝업 상태
  const [isWarikanPopupOpen, setIsWarikanPopupOpen] = useState(false);

  // 여행 멤버 컬러 옵션
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
    if (!plan?.members) return [];
    return plan.members.map((member, index) => ({
      ...member,
      color: colorOptions[index % colorOptions.length],
    }));
  }, [plan?.members, colorOptions]);

  // 플랜 상세 정보 조회
  useEffect(() => {
    const fetchPlanDetail = async () => {
      if (!planId) return;

      setIsLoading(true);
      try {
        const response = await axiosInstance.get(`/api/plans/${planId}`);
        setPlan(response.data.data);
      } catch (error) {
        toast.error('플랜 정보를 불러오는데 실패했습니다.', {
          position: 'top-center',
        });
        console.error(error);
        navigate('/plans');
      } finally {
        setIsLoading(false);
      }
    };

    fetchPlanDetail();
  }, [planId, navigate]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#FFF7F0] flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-orange-200 border-t-orange-500 rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">플랜 정보를 불러오는 중...</p>
        </div>
      </div>
    );
  }

  if (!plan) {
    return (
      <div className="min-h-screen bg-[#FFF7F0] flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">플랜을 찾을 수 없습니다</h2>
          <Button onClick={() => navigate('/plans')} className="bg-orange-500 hover:bg-orange-600">
            플랜 목록으로 돌아가기
          </Button>
        </div>
      </div>
    );
  }

  const selectedViewStatus = plan.status === 'PLANNING' ? '進行中' : '完了';

  return (
    <div className="min-h-screen bg-[#FFF7F0]">
      {/* 헤더 */}
      <Header />

      {/* 뒤로가기 버튼 */}
      <div className="p-4">
        <Button
          variant="ghost"
          onClick={() => navigate('/plans')}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
        >
          <ArrowLeft className="w-4 h-4" />
          플랜 목록으로 돌아가기
        </Button>
      </div>

      {/* 메인 컨텐츠 */}
      <div className="p-4 max-w-4xl mx-auto">
        {/* 플랜 헤더 */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Badge variant="secondary" className="w-fit bg-gray-200 flex items-center gap-1">
              <MapPin className="w-3 h-3" />
              {plan.prefecture}
            </Badge>
            <Badge variant="outline" className="flex items-center gap-1 bg-gray-200">
              <CalendarIcon className="w-3 h-3" />
              {dayjs(plan.endDate).diff(dayjs(plan.startDate), 'day') + 1} Days
            </Badge>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">{plan.title}</h1>

          {/* 진행상태 탭 */}
          <div className="flex justify-between items-center mb-6">
            <CategoryTabs
              categories={['進行中', '完了']}
              selectedCategory={selectedViewStatus}
              onCategoryChange={() => {}} // 클릭 비활성화
              onCategorySelect={() => {}} // 클릭 비활성화
            />
            <Button
              className="bg-brand-orange text-white px-4 py-2 rounded-lg text-sm font-medium"
              onClick={() => navigate(`/trip-planner?planId=${plan.id}`)}
            >
              詳細を見る
            </Button>
          </div>
        </div>

        {/* 여행 이미지 카드 */}
        <div className="relative mb-8 rounded-2xl overflow-hidden">
          <div
            className="w-full h-60 bg-cover bg-center bg-no-repeat flex items-center justify-center text-white relative"
            style={{
              backgroundImage: 'url("' + import.meta.env.VITE_API_URL + plan.prefectureImageUrl + '")',
            }}
          >
            <div className="text-center z-10 bg-black/60 p-4 rounded-lg">
              <h3 className="text-2xl font-bold mb-2">{plan.title}</h3>
            </div>
          </div>
        </div>

        {/* 여행 멤버 */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold text-gray-900 text-lg">旅行メンバー</h3>
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
          <div className="flex gap-4 flex-wrap">
            {travelMembers.map((member) => (
              <div key={member.id} className="flex items-center gap-2">
                <Avatar className="w-12 h-12">
                  <AvatarFallback className={`${member.color} text-white text-sm font-medium`}>
                    {member.userNickname?.slice(0, 2) || '??'}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium text-sm">{member.userNickname}</p>
                  <p className="text-xs text-gray-500">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 총 지불 금액 */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold text-gray-900 text-lg">総支払金額</h3>
            <button
              onClick={() => setIsWarikanPopupOpen(true)}
              className="bg-brand-orange text-white px-4 py-2 rounded-lg text-sm font-medium cursor-pointer"
            >
              メンバーと割り勘
            </button>
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
                  ¥{travelMembers.length > 0 ? Math.ceil(0 / travelMembers.length).toLocaleString('ja-JP') : '0'}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 여행 기간 캘린더 */}
        <div className="mb-8">
          <h3 className="font-bold text-gray-900 mb-4 text-lg">旅行期間</h3>
          <TravelCalendar startDate={plan.startDate} endDate={plan.endDate} />
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
        planId={plan.id}
        onConfirm={(email, role) => {
          console.log('招待メール:', email, '役割:', role);

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
