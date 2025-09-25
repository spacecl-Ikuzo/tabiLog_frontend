import { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../../components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '../../../components/ui/avatar';
import { Badge } from '../../../components/ui/badge';
import CategoryTabs from '../../../components/common/CategoryTabs';
import MemberDetailPopup from './MemberDetailPopup';
import InviteMemberPopup from './InviteMemberPopup';
import WarikanPopup from './WarikanPopup';
import TravelCalendar from './TravelCalendar';
import { toast } from 'sonner';
import { axiosInstance } from '../../../api/axios';
import { Plan } from '../../../lib/type';
import dayjs from 'dayjs';
import { MapPin, Calendar as CalendarIcon } from 'lucide-react';
import { useUserStore } from '@/store';
import { getExpensesByPlan } from '../../../api/api';

interface ExpenseData {
  id: number;
  amount: number;
  category: string;
  item: string;
  expenseDate: string;
  location?: string;
}

interface PlanDetailContentProps {
  plan: Plan;
  onMemberEdit?: () => void;
  onInvite?: () => void;
  onWarikan?: () => void;
  onAfterMemberChange?: () => void; // 성공 후 상위에서 후처리
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
  onAfterMemberChange,
  isMemberEditPopupOpen = false,
  setIsMemberEditPopupOpen,
  isInvitePopupOpen = false,
  setIsInvitePopupOpen,
  isWarikanPopupOpen = false,
  setIsWarikanPopupOpen,
}: PlanDetailContentProps) {
  const navigate = useNavigate();
  const { userId, email } = useUserStore();
  const [actualTotalAmount, setActualTotalAmount] = useState<number>(0);

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

  // 내 역할이 뷰어인지 확인
  const isViewer = useMemo(() => {
    const me = plan.members?.find((m) => {
      if (email && m.userEmail === email) return true;
      if (userId && String(m.userId) === String(userId)) return true;
      return false;
    });
    return me?.role === 'VIEWER';
  }, [plan.members, email, userId]);

  // 실제 총액 계산 (TripPlannerPage와 동일한 방식)
  useEffect(() => {
    const calculateActualTotal = async () => {
      try {
        console.log('=== PlanDetailContent: 실제 총액 계산 시작 ===');
        console.log('planId:', plan.id);

        // localStorage에서 spotExpenses 데이터 가져오기
        const savedSpotExpenses = localStorage.getItem('spotExpenses');
        if (savedSpotExpenses) {
          try {
            const parsedExpenses = JSON.parse(savedSpotExpenses);
            console.log('=== localStorage에서 spotExpenses 복구 ===');
            console.log('복구된 데이터:', parsedExpenses);

            // 모든 expense의 amount 합계 계산
            let total = 0;
            Object.values(parsedExpenses).forEach((expenses: any) => {
              if (Array.isArray(expenses)) {
                expenses.forEach((expense: ExpenseData) => {
                  total += expense.amount;
                });
              }
            });

            console.log('=== localStorage 기반 총액 계산 ===');
            console.log('계산된 총액:', total);
            setActualTotalAmount(total);
            return;
          } catch (error) {
            console.error('localStorage 데이터 파싱 실패:', error);
          }
        }

        // localStorage에 데이터가 없으면 서버 API에서 가져오기
        console.log('=== 서버 API에서 지출 데이터 로드 ===');
        const expensesResponse = await getExpensesByPlan(plan.id);
        console.log('=== 지출 데이터 응답 ===', expensesResponse);

        if (expensesResponse && expensesResponse.data) {
          const expenses = expensesResponse.data;
          console.log('=== 지출 데이터 ===', expenses);

          // 모든 expense의 amount 합계 계산
          const total = expenses.reduce((sum: number, expense: any) => {
            return sum + (expense.amount || 0);
          }, 0);

          console.log('=== 서버 API 기반 총액 계산 ===');
          console.log('계산된 총액:', total);
          setActualTotalAmount(total);
        } else {
          console.log('=== 서버에 지출 데이터가 없음 ===');
          setActualTotalAmount(0);
        }
      } catch (error) {
        console.error('총액 계산 실패:', error);
        setActualTotalAmount(0);
      }
    };

    if (plan.id) {
      calculateActualTotal();
    }
  }, [plan.id]);

  //멤버 역할 수정 혹은 제외
  const handleMemberEdit = async (userId: number, role: string) => {
    try {
      const selectedMember = travelMembers.find((m) => m.userId === userId);
      const memberName = selectedMember?.userNickname || 'メンバー';
      const memberPK = selectedMember?.id || 0;

      if (role === 'DELETE') {
        //플랜 작성자는 제외 X
        if (userId === plan.userId) {
          toast.error('プラン作成者は除外できません。', { position: 'top-center' });
          return;
        }

        const storeUserId = useUserStore.getState().userId;
        //멤버가 자기 자신이면 안된다.
        if (storeUserId === selectedMember?.userIdString) {
          toast.error('自分自身を除外できません。', { position: 'top-center' });
          return;
        }

        //진짜 제외하시겠습니까?
        if (!confirm(`${memberName}をプランから除外しますか？`)) {
          return;
        }

        //멤버 제외하기
        await axiosInstance.delete(`/api/plans/${plan.id}/members/${memberPK}`);
        toast.success(`${memberName}をプランから除外しました。`, { position: 'top-center' });
      } else {
        //멤버 역할 수정
        await axiosInstance.put(`/api/plans/${plan.id}/members/${memberPK}/role`, { role: role });

        const roleDisplayMap: { [key: string]: string } = {
          OWNER: '管理者',
          EDITOR: '編集者',
          VIEWER: 'ビューア',
          DELETE: '除外',
        };
        const displayRole = roleDisplayMap[role] || role;

        toast.success(`${memberName}の役割を${displayRole}に変更しました。`, { position: 'top-center' });
      }

      // 팝업 닫기
      if (setIsMemberEditPopupOpen) setIsMemberEditPopupOpen(false);
      // 상위 후처리 호출 (모바일: 뒤로가기, 데스크탑: 선택해제+목록새로고침 등)
      if (onAfterMemberChange) onAfterMemberChange();
    } catch (error) {
      console.error(error);
      toast.error('役割の変更に失敗しました。', { position: 'top-center' });
    }
  };

  //와리깡 공유하기 (메일로 공유)
  const handleConfirmWarikan = async (amounts: { [memberId: number]: number }) => {
    console.log('plan', plan);
    console.log('memberAmounts', amounts);

    await axiosInstance.post(`/api/warikan/send`, {
      planId: plan.id,
      title: plan.title,
      totalAmount: actualTotalAmount,
      memberShares: Object.entries(amounts).map(([memberId, amount]) => ({
        userId: parseInt(memberId),
        amount: amount,
      })),
    });

    const totalCalculated = Object.values(amounts).reduce((sum, amount) => sum + amount, 0);
    toast.success(`割り勘の情報がメールで送信されました。 総額: ¥${totalCalculated.toLocaleString('ja-JP')}`, {
      position: 'top-center',
    });
  };

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
          {!isViewer && (
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
          )}
        </div>
        <div className="flex gap-5">
          {travelMembers.slice(0, 5).map((member) => (
            <Avatar key={member.id} className="w-18 h-18">
              {member.profileImageUrl ? (
                <AvatarImage
                  src={import.meta.env.VITE_API_URL + member.profileImageUrl}
                  alt={member.userNickname}
                  className="w-full h-full object-cover"
                />
              ) : (
                <AvatarFallback className={`${member.color} text-white text-sm font-medium`}>
                  {member.userNickname?.slice(0, 2) || '??'}
                </AvatarFallback>
              )}
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
          {!isViewer && (
            <button
              onClick={onWarikan}
              className="bg-brand-orange text-white px-4 py-2 rounded-lg text-sm font-medium cursor-pointer"
            >
              メンバーと割り勘
            </button>
          )}
        </div>
        <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-green-600 font-bold text-lg">¥</span>
              </div>
              <div>
                <p className="text-sm text-gray-600">現在の総額</p>
                <p className="text-2xl font-bold text-gray-900">¥{actualTotalAmount.toLocaleString('ja-JP')}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-xs text-gray-500">メンバー当たり</p>
              <p className="text-lg font-semibold text-gray-700">
                ¥
                {travelMembers.length > 0
                  ? Math.ceil(actualTotalAmount / travelMembers.length).toLocaleString('ja-JP')
                  : '0'}
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
          onConfirm={(userId, role) => handleMemberEdit(userId, role)}
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
          totalAmount={actualTotalAmount}
          onConfirm={(amounts) => handleConfirmWarikan(amounts)}
          onCancel={() => {
            console.log('割り勘がキャンセルされました。');
          }}
        />
      )}
    </>
  );
}
