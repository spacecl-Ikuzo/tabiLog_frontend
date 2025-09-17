import { Button } from '@/components/ui/button';

interface SecurityNoticeProps {
  onLogin: () => void;
}

export default function SecurityNotice({ onLogin }: SecurityNoticeProps) {
  return (
    <div className="space-y-4">
      <p className="text-orange-500 text-sm lg:text-base text-center">
        セキュリティ保護のため、ログイン後にパスワードを再設定してください。
      </p>
      <Button
        onClick={onLogin}
        className="w-full h-12 bg-orange-500 hover:bg-orange-600 text-white font-medium text-base lg:h-14 lg:text-lg"
      >
        ログイン
      </Button>
    </div>
  );
}
