import { Outlet } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { useUserStore } from '@/store';

const PrivateRoute = () => {
  // localStorage에서 토큰 확인
  const accessToken = useUserStore.getState().token;

  // 토큰이 있으면 보호된 라우트에 접근 허용
  if (accessToken) {
    return <Outlet />;
  }

  // 토큰이 없으면 로그인 페이지로 리다이렉트
  return <Navigate to="/login" replace />;
};

export default PrivateRoute;
