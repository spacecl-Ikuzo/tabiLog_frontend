import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface UserStore {
  userId: string; // 사용자 ID
  nickname: string; // 닉네임
  email: string; // 이메일
  token: string; // 액세스 토큰
  tokenExp: number; // ★ 추가: 토큰 만료 시각 (epoch millis)

  setUserId: (userId: string) => void;
  setNickname: (nickname: string) => void;
  setEmail: (email: string) => void;
  setToken: (token: string) => void;
  setTokenExp: (tokenExp: number) => void;

  removeUserData: () => void; // 로그아웃/만료 시 호출
}

const useUserStore = create<UserStore>()(
  persist(
    (set) => ({
      userId: '',
      nickname: '',
      email: '',
      token: '',
      tokenExp: 0,

      setUserId: (userId) => set({ userId }),
      setNickname: (nickname) => set({ nickname }),
      setEmail: (email) => set({ email }),
      setToken: (token) => set({ token }),
      setTokenExp: (tokenExp) => set({ tokenExp }),

      removeUserData: () =>
        set({
          userId: '',
          nickname: '',
          email: '',
          token: '',
          tokenExp: 0,
        }),
    }),
    {
      name: 'user-storage', // localStorage 키 이름
      // 민감한 정보는 제외하고 필요한 정보만 저장
      partialize: (state) => ({
        userId: state.userId,
        nickname: state.nickname,
        email: state.email,
        token: state.token,
        tokenExp: state.tokenExp,
      }),
    }
  )
);

export default useUserStore;
