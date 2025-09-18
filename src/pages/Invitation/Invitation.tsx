import { axiosInstance } from '@/api/axios';
import { useEffect, useState } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { useInvitationStore, useUserStore } from '@/store';

const InvitationPage = () => {
  const { token } = useParams();
  const navigate = useNavigate();
  // const [invitationInfo, setInvitationInfo] = useState<InvitationInfo | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const { invitationInfo, setInvitationInfo } = useInvitationStore();

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

    // setInvitationInfo(invitationData);

    // 사용자 상태에 따라 자동 리다이렉트
    if (invitationData.userExists) {
      if (useUserStore.getState().token) {
        navigate(`/plans`);
      } else {
        // 기존 사용자 -> 로그인 페이지로 이동
        setInvitationInfo(invitationData);
        navigate(`/login`);
        // navigate(
        //   `/login?invitation=${token}&email=${invitationData.inviteeEmail}&planId=${
        //     invitationData.planId
        //   }&planTitle=${encodeURIComponent(invitationData.planTitle)}`,
        // );
      }
    } else {
      // 신규 사용자 -> 회원가입 페이지로 이동
      setInvitationInfo(invitationData);
      navigate(`/register`);
      // navigate(
      //   `/register?invitation=${token}&email=${invitationData.inviteeEmail}&planId=${
      //     invitationData.planId
      //   }&planTitle=${encodeURIComponent(invitationData.planTitle)}`,
      // );
    }
  };

  const checkInvitation = async (token: string) => {
    try {
      const response = await axiosInstance.get(`/api/plans/invitations/${token}`);
      return response.data;
    } catch (error) {
      console.error('초대 확인 API 오류:', error);
      return null;
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="invitation-loading">
        <div className="loading-spinner"></div>
        <h2>초대 정보를 확인하고 있습니다...</h2>
        <p>잠시만 기다려주세요.</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="invitation-error">
        <h2>⚠️ 초대 링크 오류</h2>
        <p>{error}</p>
        <button onClick={() => navigate('/')}>홈으로 이동</button>
      </div>
    );
  }

  return <></>;
};

export default InvitationPage;
