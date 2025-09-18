import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../../components/ui/button';
import { Avatar, AvatarFallback } from '../../../components/ui/avatar';
import { Badge } from '../../../components/ui/badge';
import CategoryTabs from '../../../components/common/CategoryTabs';
import MemberDetailPopup from './MemberDetailPopup';
import InviteMemberPopup from './InviteMemberPopup';
import WarikanPopup from './WarikanPopup';
import TravelCalendar from './TravelCalendar';
import { toast } from 'sonner';
import { Plan } from '../../../lib/type';
import dayjs from 'dayjs';
import { MapPin, Calendar as CalendarIcon } from 'lucide-react';

interface PlanDetailContentProps {
  plan: Plan;
  onMemberEdit?: () => void;
  onInvite?: () => void;
  onWarikan?: () => void;
  isMemberEditPopupOpen?: boolean;
  setIsMemberEditPopupOpen?: (open: boolean) => void;
  isInvitePopupOpen?: boolean;
  setIsInvitePopupOpen?: (open: boolean) => void;
  isWarikanPopupOpen?: boolean;
  setIsWarikanPopupOpen?: (open: boolean) => void;
}

export default function PlanDetailContent({
  plan,
  onMemberEdit,
  onInvite,
  onWarikan,
  isMemberEditPopupOpen = false,
  setIsMemberEditPopupOpen,
  isInvitePopupOpen = false,
  setIsInvitePopupOpen,
  isWarikanPopupOpen = false,
  setIsWarikanPopupOpen,
}: PlanDetailContentProps) {
  const navigate = useNavigate();

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

  const selectedViewStatus = plan.status === 'PLANNING' ? '進行中' : '完了';

  return (
    <>
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
        <h1 className="text-2xl font-bold text-gray-900 mb-4">{plan.title}</h1>

        {/* 진행상태 탭 */}
        <div className="flex justify-between items-center mb-6">
          <div className="pointer-events-none cursor-default select-none">
            <CategoryTabs
              categories={['進行中', '完了']}
              selectedCategory={selectedViewStatus}
              onCategoryChange={() => {}} // 클릭 비활성화
              onCategorySelect={() => {}} // 클릭 비활성화
            />
          </div>
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
            <h3 className="text-3xl font-bold mb-2">{plan.title}</h3>
          </div>
        </div>
      </div>

      {/* 여행 멤버 */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-bold text-gray-900">旅行メンバー</h3>
          <div className="flex gap-2">
            <button
              onClick={onMemberEdit}
              className="bg-amber-600 text-white px-4 py-2 rounded-lg text-sm font-medium cursor-pointer"
            >
              メンバー修正
            </button>
            <button
              onClick={onInvite}
              className="bg-brand-orange text-white px-4 py-2 rounded-lg text-sm font-medium cursor-pointer"
            >
              メンバー追加
            </button>
          </div>
        </div>
        <div className="flex gap-5">
          {travelMembers.slice(0, 5).map((member) => (
            <Avatar key={member.id} className="w-18 h-18">
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
          <button
            onClick={onWarikan}
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
        <h3 className="font-bold text-gray-900 mb-4">旅行期間</h3>
        <TravelCalendar startDate={plan.startDate} endDate={plan.endDate} />
      </div>

      {/* 팝업들 */}
      {setIsMemberEditPopupOpen && (
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
      )}

      {setIsInvitePopupOpen && (
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
      )}

      {setIsWarikanPopupOpen && (
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
      )}
    </>
  );
}
