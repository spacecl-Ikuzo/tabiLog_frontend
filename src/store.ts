import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { InvitationInfo } from '@/lib/type';

interface UserStore {
  userId: string; // 사용자 ID
  nickname: string; // 닉네임
  email: string; // 이메일
  token: string; // 액세스 토큰
  tokenExp: number; // 토큰 만료 시각(ms)

  setUserId: (userId: string) => void;
  setNickname: (nickname: string) => void;
  setEmail: (email: string) => void;
  setToken: (token: string) => void;
  setTokenExp: (tokenExp: number) => void;

  removeUserData: () => void; // 로그아웃/만료 시 호출
}

interface InvitationStore {
  invitationInfo: InvitationInfo | null; // 초대 정보
  // invitationToken: string; // 초대 토큰
  setInvitationInfo: (info: InvitationInfo | null) => void;
  // setInvitationToken: (token: string) => void;
  clearInvitationData: () => void; // 초대 데이터 초기화
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

      removeUserData: () => {
        set({
          userId: '',
          nickname: '',
          email: '',
          token: '',
          tokenExp: 0,
        });
      },
    }),
    {
      name: 'user-storage', // localStorage 키 이름
      partialize: (state) => ({
        userId: state.userId,
        nickname: state.nickname,
        email: state.email,
        token: state.token,
        tokenExp: state.tokenExp,
      }),
    },
  ),
);

const useInvitationStore = create<InvitationStore>()(
  persist(
    (set) => ({
      invitationInfo: null,
      invitationToken: '',
      isLoading: false,
      error: '',

      setInvitationInfo: (info) => set({ invitationInfo: info }),
      // setInvitationToken: (token) => set({ invitationToken: token }),
      clearInvitationData: () => {
        set({
          invitationInfo: null,
          // invitationToken: '',
        });
      },
    }),
    {
      name: 'invitation-storage', // localStorage 키 이름
      partialize: (state) => ({
        invitationInfo: state.invitationInfo,
        // invitationToken: state.invitationToken,
      }),
    },
  ),
);

export { useUserStore, useInvitationStore };
