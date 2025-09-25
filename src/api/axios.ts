import axios from 'axios';
import { useUserStore } from '@/store';

// 공통 팝업(팀 공용 컴포넌트) – 실제 파일명과 맞춤
let openPopup: ((msg: string) => void) | null = null;
try {
  const mod = require('@/components/common/CommonPopup'); // ← 실제 파일명
  openPopup = mod.openPopup as (msg: string) => void;
} catch {
  // fallback: 아래 sonner 사용
}
import { toast } from 'sonner';

// 토큰 만료 처리 중복 방지
let isHandling401 = false;

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: false,
  headers: { 'Content-Type': 'application/json' },
});

// ===== 요청 인터셉터: 토큰 만료 사전 차단 + Authorization 부착 =====
axiosInstance.interceptors.request.use((config) => {
  const { token, tokenExp, removeUserData } = useUserStore.getState();

  if (token) {
    // 만료(ms) 시각 존재하면 사전 차단
    if (tokenExp && Date.now() >= tokenExp) {
      const fixedMsg = '로그인에 실패하였습니다';
      if (openPopup) openPopup(fixedMsg);
      else toast.error('ログインに失敗しました');

      removeUserData();
      return Promise.reject(new axios.Cancel('Token expired'));
    }

    config.headers = config.headers || {};
    (config.headers as any).Authorization = `Bearer ${token}`;
  }
  return config;
});

// ===== 응답 인터셉터: 401 공통 처리(+기존 예외 로직 유지) =====
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    const status = error?.response?.status;
    const code = error?.response?.data?.error;

    // 네가 기존에 두었던 예외 처리 유지
    const url: string = error.config?.url || '';
    const isLoginRequest = url.includes('/auth/signin');
    const isExpenseRequest = url.includes('/api/expenses');

    // Expense API는 401이어도 모킹/무시 (네 기존 로직 유지)
    if (isExpenseRequest && status === 401) {
      return Promise.reject(error);
    }

    // 백엔드 표준/변형: TOKEN_EXPIRED / AUTH_ERROR / (과거) TokenExpired
    const isExpired = status === 401 && (code === 'TOKEN_EXPIRED' || code === 'TokenExpired');
    const isAuthError = status === 401 && (code === 'AUTH_ERROR' || code === 'AuthError');

    if ((isExpired || isAuthError) && !isHandling401 && !isLoginRequest && !isExpenseRequest) {
      isHandling401 = true;

      const fixedMsg = '로그인에 실패하였습니다';
      if (openPopup) openPopup(fixedMsg);
      else toast.error('ログインに失敗しました');

      useUserStore.getState().removeUserData();

      setTimeout(() => {
        window.location.href = '/login';
        setTimeout(() => {
          isHandling401 = false;
        }, 700);
      }, 700);

      return Promise.reject(error);
    }

    // 400/409 등은 각 페이지에서 details를 읽어 FormMessage로 처리
    return Promise.reject(error);
  },
);
