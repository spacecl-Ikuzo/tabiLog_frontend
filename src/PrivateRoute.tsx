import { Outlet } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { useUserStore } from './store';

const PrivateRoute = () => {
  const { token, tokenExp, removeUserData } = useUserStore();

  // 토큰이 없으면 로그인 페이지로 리다이렉트
  if (!token) {
    return <Navigate to="/login" replace />;
  }

  // 토큰 만료 시간 체크
  if (tokenExp && Date.now() > tokenExp) {
    console.log('토큰이 만료되었습니다. 로그아웃 처리합니다.');
    removeUserData();
    return <Navigate to="/login" replace />;
  }

  // 토큰이 유효하면 보호된 라우트에 접근 허용
  return <Outlet />;
};

export default PrivateRoute;
