// src/components/auth/ProfileLoader.tsx
import { useEffect, useRef } from "react";
import { axiosInstance } from "@/api/axios";
import { useUserStore } from "@/store";

type ProfileResponse = {
  id: number;
  email: string;
  nickname: string;
};

export default function ProfileLoader() {
  const { token, setNickname, setUserId } = useUserStore();
  const hasFetchedRef = useRef(false);

  useEffect(() => {
    // ✅ 토큰 없으면 아예 호출하지 않음
    if (!token) {
      hasFetchedRef.current = false;
      return;
    }

    // ✅ 이미 실행했다면 다시 실행하지 않음
    if (hasFetchedRef.current) return;
    hasFetchedRef.current = true;

    let cancelled = false;

    (async () => {
      try {
        const res = await axiosInstance.get<ProfileResponse>("/api/profile");
        if (cancelled) return;

        setNickname?.(res.data.nickname);
        setUserId?.(String(res.data.id));
      } catch (err: any) {
        // ✅ 401이면 axios 인터셉터가 이미 로그아웃 처리 → 여기선 재호출 금지
        console.warn("ProfileLoader: 프로필 불러오기 실패 (한 번만 시도)", err?.response?.status);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [token, setNickname, setUserId]);

  return null;
}
