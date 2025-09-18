import React, { useEffect } from 'react';
import { Input } from '../../../components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../../components/ui/select';
import { Mail } from 'lucide-react';
import CommonPopup from '../../../components/common/CommonPopup';
import { axiosInstance } from '@/api/axios';
import { toast } from 'sonner';

interface InviteMemberPopupProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onConfirm?: (email: string, role: string) => void;
  onCancel?: () => void;
  planId: number;
}

export default function InviteMemberPopup({ open, onOpenChange, onConfirm, onCancel, planId }: InviteMemberPopupProps) {
  const [email, setEmail] = React.useState<string>('');
  const [selectedRole, setSelectedRole] = React.useState<string>('編集者');

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
  useEffect(() => {
    console.log('planId', planId);
  }, [open, planId]);

  const handleConfirm = async () => {
    if (email.trim()) {
      inviteMember(planId, email, mapUiRoleToDbRole(selectedRole));
      onConfirm?.(email, mapUiRoleToDbRole(selectedRole));
      // 성공적으로 초대가 보내진 후 입력값 초기화
      toast.success('メンバーを招待しました');
      setEmail('');
      setSelectedRole('編集者');
    }
  };

  const handleCancel = () => {
    onCancel?.();
    // 취소 시에도 입력값 초기화
    setEmail('');
    setSelectedRole('編集者');
  };

  const isEmailValid = email.trim() !== '' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  //* 멤버 초대하기
  const inviteMember = async (planId: number, email: string, role: string) => {
    console.log('planId', planId);
    console.log('email', email);
    ///api/plans/{planId}/invitations
    const response = await axiosInstance.post(`/api/plans/${planId}/invitations`, {
      inviteeEmail: email,
      role: role,
    });
    console.log('response', response);
    return response.data;
  };

  return (
    <CommonPopup
      open={open}
      onOpenChange={onOpenChange}
      title="メンバーを招待"
      onConfirm={handleConfirm}
      onCancel={handleCancel}
      confirmText="招待を送信"
      cancelText="キャンセル"
    >
      {/* Gmail 아이콘 */}
      <div className="flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4">
        <Mail className="w-8 h-8 text-red-600" />
      </div>

      {/* 설명 텍스트 */}
      <div className="text-center mb-4">
        <h3 className="text-gray-800 font-medium text-base mb-2">Gmailでメンバーを招待</h3>
        <p className="text-gray-600 text-sm">招待リンクがメールで送信されます</p>
      </div>

      {/* 이메일 입력 */}
      <div className="w-full space-y-2">
        <label className="text-sm font-medium text-gray-700">メールアドレス</label>
        <Input
          type="email"
          placeholder="example@gmail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={`w-full px-4 py-3 rounded-lg border ${
            email && !isEmailValid ? 'border-red-300 focus:border-red-500' : 'border-gray-200 focus:border-blue-500'
          }`}
        />
        {email && !isEmailValid && <p className="text-red-500 text-xs">有効なメールアドレスを入力してください</p>}
      </div>

      {/* 역할 선택 */}
      <div className="w-full space-y-2">
        <label className="text-sm font-medium text-gray-700">役割</label>
        <Select value={selectedRole} onValueChange={setSelectedRole}>
          <SelectTrigger className="w-full bg-gray-100 border-none rounded-lg px-4 py-3 text-gray-700">
            <SelectValue placeholder="役割を選択してください" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="編集者">編集者</SelectItem>
            {/* <SelectItem value="管理者">管理者</SelectItem> */}
            <SelectItem value="ビューア">ビューア</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </CommonPopup>
  );
}
