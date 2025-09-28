// src/api/axios.ts
import axios from "axios";
import { useUserStore } from "@/store";

// 더 이상 toast나 CommonPopup을 사용하지 않고 alert를 사용

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
      const msg = "세션이 만료되었습니다. 다시 로그인해 주세요.";
      
      // Alert 창 띄우기
      alert(msg);

      // 자동 로그아웃 처리 및 로컬스토리지 클리어
      removeUserData();
      
      // 홈 화면으로 이동
      setTimeout(() => {
        window.location.href = "/";
      }, 300);
      
      return Promise.reject(new axios.Cancel("Token expired"));
    }

    // 요청 헤더에 Authorization 추가
    config.headers = config.headers || {};
    config.headers.Authorization = `Bearer ${token}`;
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
    const isLoginRequest = url.includes("/auth/signin") || url.includes("/api/auth/signin");
    const isProfileRequest = url.includes("/profile") || url.includes("/api/profile");
    const isSpotRequest = url.includes("/spot") || url.includes("/spots");
    
    // 추가 예외: 공개 API들 (로그인 불필요)
    const isPublicAPI = url.includes("/api/categories") || url.includes("/api/regions");

    // ✅ 백엔드에서 명시적으로 보낸 에러 코드만 처리 (자동으로 TOKEN_INVALID 설정하지 않음)
    const code = (typeof data?.error === "string" && data.error) || "";

    const isExpired = status === 401 && code === "TOKEN_EXPIRED";
    const isInvalid = status === 401 && code === "TOKEN_INVALID";

    if ((isExpired || isInvalid) && !isHandling401 && !isLoginRequest && !isProfileRequest && !isSpotRequest && !isPublicAPI) {
      isHandling401 = true;

      // 한국어 UI 문구 (만료/무효 구분)
      const msg = isExpired
        ? "세션이 만료되었습니다. 다시 로그인해 주세요."
        : "인증에 실패했습니다. 다시 로그인해 주세요.";

      // Alert 창 띄우기
      alert(msg);

      // 사용자 데이터 및 로컬스토리지 초기화 (자동 로그아웃 처리)
      useUserStore.getState().removeUserData();

      // 홈 화면으로 이동
      setTimeout(() => {
        window.location.href = "/";
        setTimeout(() => {
          isHandling401 = false;
        }, 700);
      }, 300);

      return Promise.reject(error);
    }

    // ❌ 그 외 에러는 그대로 throw
    return Promise.reject(error);
  }
);
