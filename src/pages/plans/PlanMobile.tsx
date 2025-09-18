import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from '../../components/ui/button';
import Header from '../../components/layout/header';
import PlanDetailContent from './components/PlanDetailContent';
import { axiosInstance } from '../../api/axios';
import { toast } from 'sonner';
import { Plan } from '../../lib/type';
import { ArrowLeft } from 'lucide-react';

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
        <PlanDetailContent
          plan={plan}
          onMemberEdit={() => setIsMemberEditPopupOpen(true)}
          onInvite={() => setIsInvitePopupOpen(true)}
          onWarikan={() => setIsWarikanPopupOpen(true)}
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
