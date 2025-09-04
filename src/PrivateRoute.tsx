// import { useEffect } from 'react';
// import { Outlet } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
// import { toast } from 'sonner';
// import { axiosInstance } from './api/axios';
// import Spinner from './Spinner';

const PrivateRoute = () => {
  // TODO: 토큰 검증 로직 추가 (zustand 사용)
  // useEffect(() => {
  //   if (data?.email) {
  //     setEmail(data.email);
  //   }
  // }, [data?.email, setEmail]);

  // if (isLoading) {
  //   return <Spinner />;
  // }

  // if (isError || !data?.email) {
  //   toast.error('올바르지 않은 세션입니다.');
  return <Navigate to="/login" replace />;
};

export default PrivateRoute;
