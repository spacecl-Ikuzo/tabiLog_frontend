import { axiosInstance } from '@/api/axios';
import { useEffect, useState } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { useInvitationStore, useUserStore } from '@/store';

const InvitationPage = () => {
  const { token } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const { email } = useUserStore();
  const { setInvitationInfo, setInvitationToken } = useInvitationStore();

  const location = useLocation();
  console.log('location', location);

  useEffect(() => {
    setLoading(true);
    if (token) {
      handleInvitation();
    }
  }, [token]);

  const handleInvitation = async () => {
    // 토큰 검증
    if (!token) {
      setError('초대 토큰이 없습니다.');
      return;
    }

    // 초대 정보 확인 (한 번만 호출)
    const invitationData = await checkInvitation(token);

    if (!invitationData) {
      setError('초대 링크가 유효하지 않습니다.');
      return;
    }

    if (invitationData.inviteeEmail !== email && email !== '') {
      setError('다른 사용자에게 발송된 초대 링크입니다.');
      return;
    }

    setInvitationToken(token); //초대 토큰 저장

    // 사용자 상태에 따라 자동 리다이렉트
    if (invitationData.userExists) {
      if (useUserStore.getState().token) {
        navigate(`/plans`);
      } else {
        // 기존 사용자 -> 로그인 페이지로 이동
        setInvitationInfo(invitationData);
        navigate(`/login`);
      }
    } else {
      // 신규 사용자 -> 회원가입 페이지로 이동
      setInvitationInfo(invitationData);
      navigate(`/register`);
    }
  };

  const checkInvitation = async (token: string) => {
    try {
      const response = await axiosInstance.get(`/api/plans/invitations/${token}/check`);
      return response.data?.data;
    } catch (error) {
      console.error('초대 확인 API 오류:', error);
      return null;
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#FFF7F0] flex items-center justify-center p-4">
        <div className="text-center">
          <div className="relative mb-8">
            <div className="w-16 h-16 border-4 border-orange-200 border-t-orange-500 rounded-full animate-spin mx-auto"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-8 h-8 bg-orange-500 rounded-full animate-pulse"></div>
            </div>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">招待情報を確認しています...</h2>
          <p className="text-gray-600 text-lg">しばらくお待ちください。</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-[#FFF7F0] flex items-center justify-center p-4">
        <div className="text-center max-w-md">
          <div className="mb-8">
            <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-4xl">⚠️</span>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">招待リンク エラー</h2>
            <p className="text-gray-600 text-lg mb-6">{error}</p>
          </div>
          <button
            className="cursor-pointer bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-xl font-medium text-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
            onClick={() => navigate('/')}
          >
            ホームに移動
          </button>
        </div>
      </div>
    );
  }

  return <></>;
};

export default InvitationPage;
