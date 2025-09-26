// src/api/axios.ts
import axios from "axios";
import { useUserStore } from "@/store";

// 공통 팝업 (없으면 sonner 사용)
let openPopup: ((msg: string) => void) | null = null;
try {
  const mod = require("@/components/common/CommonPopup");
  openPopup = mod.openPopup as (msg: string) => void;
} catch {}

import { toast } from "sonner";

// 🚨 중복 로그아웃 방지 플래그
let isHandling401 = false;

// ================== Axios 인스턴스 생성 ==================
export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL ?? "http://localhost:8080/api", // 기본값 추가
  withCredentials: false,
  headers: { "Content-Type": "application/json" },
});

// ================== 요청 인터셉터 ==================
axiosInstance.interceptors.request.use((config) => {
  const { token, tokenExp, removeUserData } = useUserStore.getState();

  if (token) {
    // ⏰ 토큰 만료 여부 사전 차단
    if (tokenExp && Date.now() >= tokenExp) {
      const msg = "ログインに失敗しました";
      if (openPopup) openPopup(msg);
      else toast.error(msg);

      removeUserData();
      return Promise.reject(new axios.Cancel("Token expired"));
    }

    // 요청 헤더에 Authorization 추가
    config.headers = config.headers || {};
    (config.headers as any).Authorization = `Bearer ${token}`;
  }
  return config;
});

// ================== 응답 인터셉터 ==================
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    const status = error?.response?.status;
    const data = error?.response?.data as
      | { status?: number; error?: string; message?: string }
      | undefined;

    const url: string = error.config?.url || "";
    const isLoginRequest = url.includes("/auth/signin");
    const isProfileRequest = url.includes("/profile");

    // ✅ 백엔드 표준 에러 바디 호환: error 필드가 없으면 기본값 TOKEN_INVALID
    const code =
      (typeof data?.error === "string" && data.error) ||
      (status === 401 ? "TOKEN_INVALID" : "");

    const isExpired = status === 401 && code === "TOKEN_EXPIRED";
    const isInvalid = status === 401 && code === "TOKEN_INVALID";

    if ((isExpired || isInvalid) && !isHandling401 && !isLoginRequest && !isProfileRequest) {
      isHandling401 = true;

      // 일본어 UI 문구 (만료/무효 구분)
      const msg = isExpired
        ? "セッションの有効期限が切れました。もう一度ログインしてください。"
        : "認証に失敗しました。ログインし直してください。";

      if (openPopup) openPopup(msg);
      else toast.error(msg);

      // 사용자 데이터 초기화
      useUserStore.getState().removeUserData();

      // 잠깐 대기 후 로그인 페이지로 이동
      setTimeout(() => {
        window.location.href = "/login";
        setTimeout(() => {
          isHandling401 = false;
        }, 700);
      }, 700);

      return Promise.reject(error);
    }

    // ❌ 그 외 에러는 그대로 throw
    return Promise.reject(error);
  }
);
