import axios from 'axios';
import useUserStore from '@/store';

// 공통 팝업(팀 공용 컴포넌트). 프로젝트 경로에 맞게 조정하세요.
// 없으면 아래에서 sonner 토스트로 대체 처리합니다.
let openPopup: ((msg: string) => void) | null = null;
try {
  // 예: '@/components/common/popup' 경로라면 그대로 사용

  const mod = require('@/components/common/popup');
  openPopup = mod.openPopup as (msg: string) => void;
} catch {
  // fallback 없음 -> 아래에서 sonner 사용
}

import { toast } from 'sonner';

// 토큰 만료 처리 중복 방지
let isHandling401 = false;

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:8080',
  withCredentials: false,
  headers: { 'Content-Type': 'application/json' },
});

// ===== 요청 인터셉터: 토큰 자동 첨부 =====
axiosInstance.interceptors.request.use((config) => {
  const token = useUserStore.getState().token;
  if (token) {
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
      // console.log('Expense API 401 - mocking/skip according to previous rule');
      return Promise.reject(error);
    }

    // 백엔드 표준: TOKEN_EXPIRED / AUTH_ERROR
    // 과거 코드 호환: 'TokenExpired' (대/소문자 혼재)도 인식
    const isExpired = status === 401 && (code === 'TOKEN_EXPIRED' || code === 'TokenExpired');

    const isAuthError = status === 401 && (code === 'AUTH_ERROR' || code === 'AuthError');

    if ((isExpired || isAuthError) && !isHandling401 && !isLoginRequest && !isExpenseRequest) {
      isHandling401 = true;

      // 팀 룰: 팝업은 고정 문구
      const fixedMsg = '로그인에 실패하였습니다'; // 또는 '세션이 만료되었습니다. 다시 로그인해주세요.'
      if (openPopup) {
        openPopup(fixedMsg);
      } else {
        // 공통 팝업 모듈이 없으면 sonner로 대체
        toast.error(fixedMsg, { duration: 2600, position: 'top-center' });
      }

      // 토큰/사용자 정보 삭제
      useUserStore.getState().removeUserData();

      // 로그인 페이지로 이동 (토스트/팝업 시각을 위해 약간 지연)
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
