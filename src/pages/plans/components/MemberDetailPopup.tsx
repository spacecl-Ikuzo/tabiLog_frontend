import React from 'react';
import { Avatar, AvatarImage, AvatarFallback } from '../../../components/ui/avatar';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../../components/ui/select';
import CommonPopup from '../../../components/common/CommonPopup';
import { PlanMember } from '../../../lib/type';

interface MemberDetailPopupProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  members?: PlanMember[];
  onConfirm?: (memberId: number, role: string) => void;
  onCancel?: () => void;
}

export default function MemberDetailPopup({
  open,
  onOpenChange,
  members = [],
  onConfirm,
  onCancel,
}: MemberDetailPopupProps) {
  const [selectedMemberId, setSelectedMemberId] = React.useState<number | null>(null);
  const [selectedRole, setSelectedRole] = React.useState<string>('編集者');

  // DB role을 UI role로 변환하는 함수
  const mapDbRoleToUiRole = (dbRole: string): string => {
    switch (dbRole) {
      case 'OWNER':
        return '管理者';
      case 'EDITOR':
        return '編集者';
      case 'VIEWER':
        return 'ビューア';
      case 'DELETE':
        return '除外';
      default:
        return '編集者';
    }
  };

  // UI role을 DB role로 변환하는 함수
  const mapUiRoleToDbRole = (uiRole: string): string => {
    switch (uiRole) {
      case '管理者':
        return 'OWNER';
      case '編集者':
        return 'EDITOR';
      case 'ビューア':
        return 'VIEWER';
      case '除外':
        return 'DELETE';
      default:
        return 'EDITOR';
    }
  };

  // 선택된 멤버 정보 가져오기
  const selectedMember = members.find((member) => member.userId === selectedMemberId);

  // 멤버 선택이 변경될 때 역할도 업데이트
  React.useEffect(() => {
    if (selectedMember) {
      setSelectedRole(mapDbRoleToUiRole(selectedMember.role || 'EDITOR'));
    }
  }, [selectedMember]);

  // OWNER 역할일 때는 역할을 고정
  const isOwner = selectedMember?.role === 'OWNER';

  const handleConfirm = () => {
    if (selectedMemberId !== null) {
      onConfirm?.(selectedMemberId, mapUiRoleToDbRole(selectedRole));
    }
  };

  const handleCancel = () => {
    onCancel?.();
    // 팝업이 닫힐 때 상태 초기화
    setSelectedMemberId(null);
    setSelectedRole('編集者');
  };

  // 팝업이 닫힐 때 상태 초기화
  React.useEffect(() => {
    if (!open) {
      setSelectedMemberId(null);
      setSelectedRole('編集者');
    }
  }, [open]);

  return (
    <CommonPopup
      open={open}
      onOpenChange={onOpenChange}
      title="メンバー情報の修正"
      onConfirm={handleConfirm}
      onCancel={handleCancel}
      confirmText="修正"
      cancelText="キャンセル"
      isDisabled={isOwner}
    >
      {/* プロフィール画像 */}
      <div className="relative">
        <Avatar className="w-16 h-16">
          {selectedMember?.profileImageUrl ? (
            <AvatarImage
              src={selectedMember.profileImageUrl.startsWith('http') ? selectedMember.profileImageUrl : import.meta.env.VITE_API_URL + selectedMember.profileImageUrl}
              alt={selectedMember?.userNickname || 'メンバー'}
              className="w-full h-full object-cover"
            />
          ) : (
            <AvatarFallback className={`${selectedMember?.color} text-white text-xl font-bold`}>
              {selectedMember?.userNickname?.slice(0, 2) || '😎'}
            </AvatarFallback>
          )}
        </Avatar>
      </div>

      {/* ユーザー名 */}
      <h3 className="text-gray-700 font-medium text-base">
        {selectedMember?.userNickname || 'メンバーを選択してください'}
      </h3>

      {/* メンバー選択 */}
      <div className="w-full space-y-2">
        <label className="text-sm font-medium text-gray-700">メンバー選択</label>
        <Select
          value={selectedMemberId?.toString() || ''}
          onValueChange={(value) => setSelectedMemberId(Number(value))}
        >
          <SelectTrigger className="w-full bg-gray-100 border-none rounded-lg px-4 py-3 text-gray-700">
            <SelectValue placeholder="メンバーを選択してください" />
          </SelectTrigger>
          <SelectContent>
            {members.map((member) => (
              <SelectItem key={member.userId} value={member.userId.toString()}>
                {member.userNickname}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* 役割選択 */}
      <div className="w-full space-y-2">
        <label className="text-sm font-medium text-gray-700">役割</label>
        <Select value={selectedRole} onValueChange={setSelectedRole} disabled={isOwner}>
          <SelectTrigger
            className={`w-full border-none rounded-lg px-4 py-3 text-gray-700 ${
              isOwner ? 'bg-gray-200 cursor-not-allowed' : 'bg-gray-100'
            }`}
          >
            <SelectValue placeholder="役割を選択してください" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="編集者">編集者</SelectItem>
            {/* <SelectItem value="管理者">管理者</SelectItem> */}
            <SelectItem value="ビューア">ビューア</SelectItem>
            <SelectItem value="除外">除外</SelectItem>
          </SelectContent>
        </Select>
        {isOwner && <p className="text-xs text-gray-500">管理者の役割は変更できません</p>}
      </div>
    </CommonPopup>
  );
}
