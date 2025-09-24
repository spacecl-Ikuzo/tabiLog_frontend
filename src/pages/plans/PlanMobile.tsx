import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';
import { Button } from '../../components/ui/button';
import PlanDetailContent from './components/PlanDetailContent';
import { Plan } from '../../lib/type';
import { ArrowLeft } from 'lucide-react';

export default function PlanDetail() {
  const navigate = useNavigate();
  const location = useLocation();
  const { planId } = useParams<{ planId: string }>();

  // navigate할 때 넘겨준 state에서 plan 꺼내기
  const plan = (location.state as { plan?: Plan } | undefined)?.plan || null;

  // 팝업 상태들
  const [isMemberEditPopupOpen, setIsMemberEditPopupOpen] = useState(false);
  const [isInvitePopupOpen, setIsInvitePopupOpen] = useState(false);
  const [isWarikanPopupOpen, setIsWarikanPopupOpen] = useState(false);

  // plan이 없으면 에러 화면
  if (!plan || !planId) {
    return (
      <div className="min-h-screen bg-[#FFF7F0] flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">プランが見つかりません</h2>
          <Button onClick={() => navigate(-1)} className="bg-orange-500 hover:bg-orange-600">
            プラン一覧に戻る
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FFF7F0]">
      {/* 뒤로가기 버튼 */}
      <div className="p-4">
        <Button
          variant="ghost"
          onClick={() => navigate('/plans')}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
        >
          <ArrowLeft className="w-4 h-4" />
          プラン一覧に戻る
        </Button>
      </div>

      {/* 메인 컨텐츠 */}
      <div className="py-4 px-8 max-w-4xl mx-auto">
        <PlanDetailContent
          plan={plan}
          onMemberEdit={() => setIsMemberEditPopupOpen(true)}
          onInvite={() => setIsInvitePopupOpen(true)}
          onWarikan={() => setIsWarikanPopupOpen(true)}
          onAfterMemberChange={() => navigate(-1)}
          isMemberEditPopupOpen={isMemberEditPopupOpen}
          setIsMemberEditPopupOpen={setIsMemberEditPopupOpen}
          isInvitePopupOpen={isInvitePopupOpen}
          setIsInvitePopupOpen={setIsInvitePopupOpen}
          isWarikanPopupOpen={isWarikanPopupOpen}
          setIsWarikanPopupOpen={setIsWarikanPopupOpen}
        />
      </div>
    </div>
  );
}
