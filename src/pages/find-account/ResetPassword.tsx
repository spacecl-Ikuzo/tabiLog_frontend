import { useMemo, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { confirmResetPassword } from '@/api/api';

export default function ResetPassword() {
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const token = useMemo(() => params.get('token') || '', [params]);

  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async () => {
    if (!token) {
      toast.error('無効なリセットリンクです。');
      return;
    }
    if (!newPassword || !confirmPassword) {
      toast.error('新しいパスワードを入力してください。');
      return;
    }
    if (newPassword !== confirmPassword) {
      toast.error('パスワードが一致しません。');
      return;
    }
    setIsSubmitting(true);
    try {
      await confirmResetPassword(token, newPassword, confirmPassword);
      toast.success('パスワードを更新しました。ログインしてください。');
      navigate('/login');
    } catch (e: any) {
      toast.error(e?.response?.data?.message || 'パスワード更新に失敗しました');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        <Card className="p-6 lg:p-8">
          <h1 className="text-2xl font-bold text-orange-500 text-center mb-8 lg:text-3xl">パスワード変更</h1>
          <div className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="newPassword">新しいパスワード</Label>
              <Input
                id="newPassword"
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirmPassword">新しいパスワード（確認）</Label>
              <Input
                id="confirmPassword"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            <Button onClick={onSubmit} disabled={isSubmitting} className="w-full bg-orange-500 hover:bg-orange-600">
              {isSubmitting ? '更新中...' : '更新する'}
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}
