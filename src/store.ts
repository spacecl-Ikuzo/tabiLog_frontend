import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { InvitationInfo } from '@/lib/type';

// localStorage 완전 정리 함수
const clearAllLocalStorage = () => {
  try {
    // 현재 localStorage 상태 로그
    console.log('=== localStorage 정리 전 상태 ===');
    console.log('전체 키:', Object.keys(localStorage));

    // Zustand persist 데이터 제거
    localStorage.removeItem('user-storage');
    localStorage.removeItem('invitation-storage');

    // 앱 관련 데이터 제거 (포괄적)
    const keys = Object.keys(localStorage);
    keys.forEach((key) => {
      // 여행 계획 관련
      if (
        key.startsWith('trip_spots_') ||
        key.startsWith('trip_saved_') ||
        key.startsWith('spots_') ||
        // 기타 앱 데이터
        key === 'todoData' ||
        key.startsWith('tabi') ||
        key.startsWith('tabilog')
      ) {
        console.log(`제거할 키: ${key}`);
        localStorage.removeItem(key);
      }
    });

    console.log('=== localStorage 정리 후 상태 ===');
    console.log('남은 키:', Object.keys(localStorage));
    console.log('localStorage 완전 정리 완료');
  } catch (error) {
    console.error('localStorage 정리 중 오류:', error);
  }
};

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
  invitationToken: string; // 초대 토큰
  setInvitationInfo: (info: InvitationInfo | null) => void;
  setInvitationToken: (token: string) => void;
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

        // localStorage 완전 정리
        clearAllLocalStorage();
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

      setInvitationInfo: (info) => set({ invitationInfo: info }),
      setInvitationToken: (token) => set({ invitationToken: token }),
      clearInvitationData: () => {
        set({
          invitationInfo: null,
          invitationToken: '',
        });
      },
    }),
    {
      name: 'invitation-storage', // localStorage 키 이름
      partialize: (state) => ({
        invitationInfo: state.invitationInfo,
        invitationToken: state.invitationToken,
      }),
    },
  ),
);

// 개발자 도구에서 사용할 수 있는 localStorage 관리 함수들
export const localStorageUtils = {
  // 현재 localStorage 상태 확인
  checkStatus: () => {
    console.log('=== localStorage 현재 상태 ===');
    console.log('전체 키:', Object.keys(localStorage));
    Object.keys(localStorage).forEach((key) => {
      console.log(`${key}:`, localStorage.getItem(key));
    });
  },

  // 특정 키 제거
  removeKey: (key: string) => {
    localStorage.removeItem(key);
    console.log(`${key} 제거 완료`);
  },

  // 모든 앱 관련 데이터 제거
  clearAppData: () => {
    clearAllLocalStorage();
  },

  // localStorage 완전 초기화 (주의: 모든 데이터 삭제)
  clearAll: () => {
    localStorage.clear();
    console.log('localStorage 완전 초기화 완료');
  },
};

export { useUserStore, useInvitationStore };
