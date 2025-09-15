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
      default:
        return 'EDITOR';
    }
  };

  // 선택된 멤버 정보 가져오기
  const selectedMember = members.find((member) => member.userId === selectedMemberId);

  // 첫 번째 멤버를 기본 선택으로 설정 (팝업이 열릴 때)
  React.useEffect(() => {
    if (open && members.length > 0 && selectedMemberId === null) {
      setSelectedMemberId(members[0].id);
      setSelectedRole(mapDbRoleToUiRole(members[0].role || 'EDITOR'));
    }
  }, [open, members, selectedMemberId]);

  // 멤버 선택이 변경될 때 역할도 업데이트
  React.useEffect(() => {
    if (selectedMember) {
      setSelectedRole(mapDbRoleToUiRole(selectedMember.role || 'EDITOR'));
    }
  }, [selectedMember]);

  const handleConfirm = () => {
    if (selectedMemberId !== null) {
      onConfirm?.(selectedMemberId, mapUiRoleToDbRole(selectedRole));
    }
  };

  const handleCancel = () => {
    onCancel?.();
    // 팝업이 닫힐 때 상태 초기화
    setSelectedMemberId(null);
  };

  return (
    <CommonPopup
      open={open}
      onOpenChange={onOpenChange}
      title="メンバー情報の修正"
      onConfirm={handleConfirm}
      onCancel={handleCancel}
      confirmText="修正"
      cancelText="キャンセル"
    >
      {/* プロフィール画像 */}
      <div className="relative">
        <Avatar className="w-16 h-16">
          <AvatarImage src={selectedMember?.avatar} alt={selectedMember?.userNickname || 'メンバー'} />
          <AvatarFallback className="bg-green-400 text-white text-xl">
            {selectedMember?.userNickname?.charAt(0) || '👤'}
          </AvatarFallback>
        </Avatar>
        {/* サングラス絵文字オーバーレイ */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-2xl">😎</span>
        </div>
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
        <Select value={selectedRole} onValueChange={setSelectedRole}>
          <SelectTrigger className="w-full bg-gray-100 border-none rounded-lg px-4 py-3 text-gray-700">
            <SelectValue placeholder="役割を選択してください" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="編集者">編集者</SelectItem>
            <SelectItem value="管理者">管理者</SelectItem>
            <SelectItem value="ビューア">ビューア</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </CommonPopup>
  );
}
