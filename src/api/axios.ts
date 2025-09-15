import axios from 'axios';
import { toast } from 'sonner';
// import useUserStore from '../store';

// 토큰 만료 처리 중복 방지를 위한 플래그
let isTokenExpiredHandling = false;

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:8080',
  withCredentials: false,
  headers: {
    'Content-Type': 'application/json',
  },
});

// 	요청 전에 실행
axiosInstance.interceptors.request.use((config) => {
  // const token = useAdminStore.getState().token; // Zustand에서 직접 토큰 읽기
  // if (token && config.headers) {
  //   config.headers['Authorization'] = `Bearer ${token}`;
  // }
  return config;
});

//응답 이후 이 인터셉터가 실행
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    // 토큰 만료 에러 처리 (로그인 API는 제외)
    const isLoginRequest = error.config?.url?.includes('/auth/signin');
    
    if ((error.response?.status === 401 || error.response?.data?.error === 'TokenExpired') && 
        !isTokenExpiredHandling && 
        !isLoginRequest) {
      isTokenExpiredHandling = true;
      // 토큰 삭제
      // useUserStore.getState().removeToken();
      // useUserStore.getState().setAccountId('');
      // 토큰 만료 알림 (toast 사용)
      toast.error('토큰이 만료되었습니다. 다시 로그인해주세요.', {
        duration: 3000,
        position: 'top-center',
      });
      // 잠시 후 로그인 페이지로 이동 (toast가 보일 시간을 위해)
      setTimeout(() => {
        window.location.href = '/login';
        // 페이지 이동 후 플래그 리셋
        setTimeout(() => {
          isTokenExpiredHandling = false;
        }, 1000);
      }, 1000);
    }
    return Promise.reject(error);
  },
);
