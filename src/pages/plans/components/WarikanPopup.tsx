import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '../../../components/ui/avatar';
import { Input } from '../../../components/ui/input';
import CommonPopup from '../../../components/common/CommonPopup';
import { PlanMember } from '../../../lib/type';

interface WarikanPopupProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  members?: PlanMember[];
  totalAmount?: number;
  onConfirm?: (amounts: { [memberId: number]: number }) => void;
  onCancel?: () => void;
}

export default function WarikanPopup({
  open,
  onOpenChange,
  members = [],
  totalAmount = 0,
  onConfirm,
  onCancel,
}: WarikanPopupProps) {
  const [memberAmounts, setMemberAmounts] = React.useState<{ [memberId: number]: number }>({});

  // 팝업이 열릴 때 동등 분할로 초기화
  React.useEffect(() => {
    if (open && members.length > 0) {
      const equalAmount = Math.ceil(totalAmount / members.length);
      const initialAmounts: { [memberId: number]: number } = {};
      members.forEach((member) => {
        initialAmounts[member.userId] = equalAmount;
      });
      setMemberAmounts(initialAmounts);
    }
  }, [open, members, totalAmount]);

  // 특정 멤버의 금액 변경
  const handleAmountChange = (memberId: number, value: string) => {
    const numericValue = parseInt(value.replace(/,/g, '')) || 0;
    setMemberAmounts((prev) => ({
      ...prev,
      [memberId]: numericValue,
    }));
  };

  const handleConfirm = () => {
    onConfirm?.(memberAmounts);
  };

  const handleCancel = () => {
    onCancel?.();
    setMemberAmounts({});
  };

  // 멤버들의 금액 합계 계산
  const totalMemberAmounts = Object.values(memberAmounts).reduce((sum, amount) => sum + amount, 0);

  // 금액이 맞는지 확인
  const isAmountValid = totalMemberAmounts === totalAmount;

  // 버튼 비활성화 조건
  const isDisabled = !isAmountValid || totalMemberAmounts === 0;

  return (
    <CommonPopup
      open={open}
      onOpenChange={onOpenChange}
      title="割り勘"
      onConfirm={handleConfirm}
      onCancel={handleCancel}
      confirmText="友達に送る"
      cancelText="キャンセル"
      maxWidth="max-w-sm"
      isDisabled={isDisabled}
    >
      {/* 총액 표시 */}
      <div className="text-center mb-4">
        <p className="text-xs text-gray-500 mb-1">トータル費用</p>
        <p className="text-xl font-bold text-gray-900 mb-6">{totalAmount.toLocaleString('ja-JP')} 円</p>
      </div>

      {/* 멤버별 금액 입력 */}
      <div className="w-full px-20">
        <p className="text-xs text-gray-500 mb-4">友達と精算する</p>

        <div className="space-y-4">
          {members.map((member) => (
            <div key={member.userId} className="flex items-center gap-3">
              <Avatar className="w-14 h-14 flex-shrink-0">
                {member?.profileImageUrl ? (
                  <AvatarImage
                    src={import.meta.env.VITE_API_URL + member.profileImageUrl}
                    alt={member?.userNickname || 'メンバー'}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <AvatarFallback className={`${member?.color} text-white text-xl font-bold`}>
                    {member?.userNickname?.slice(0, 2) || '😎'}
                  </AvatarFallback>
                )}
              </Avatar>

              <div className="flex-1 pl-10">
                <Input
                  type="text"
                  value={memberAmounts[member.userId]?.toLocaleString('ja-JP') || '0'}
                  onChange={(e) => handleAmountChange(member.userId, e.target.value)}
                  className="text-center px-4 py-3 text-base font-medium border-gray-300 rounded-lg bg-gray-50"
                  placeholder="0"
                />
              </div>
            </div>
          ))}
        </div>

        {/* 에러 문구 */}
        {!isAmountValid && totalMemberAmounts > 0 && (
          <div className="mt-4 text-center">
            <p className="text-sm text-red-500">
              金額が合いません。合計: ¥{totalMemberAmounts.toLocaleString('ja-JP')} / 必要: ¥
              {totalAmount.toLocaleString('ja-JP')}
            </p>
          </div>
        )}
      </div>
    </CommonPopup>
  );
}
