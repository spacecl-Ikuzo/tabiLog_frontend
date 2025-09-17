import { create } from 'zustand';

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

// 최초 로드 시 localStorage 복원
const initialToken = typeof window !== 'undefined' ? localStorage.getItem('token') || '' : '';
const initialNickname = typeof window !== 'undefined' ? localStorage.getItem('nickname') || '' : '';
const initialTokenExp = typeof window !== 'undefined' ? Number(localStorage.getItem('tokenExp') || 0) : 0;

const useUserStore = create<UserStore>((set) => ({
  userId: '',
  nickname: initialNickname,
  email: '',
  token: initialToken,
  tokenExp: initialTokenExp,

  setUserId: (userId) => set({ userId }),
  setNickname: (nickname) => {
    if (typeof window !== 'undefined') localStorage.setItem('nickname', nickname || '');
    set({ nickname });
  },
  setEmail: (email) => set({ email }),
  setToken: (token) => {
    if (typeof window !== 'undefined') localStorage.setItem('token', token || '');
    set({ token });
  },
  setTokenExp: (tokenExp) => {
    if (typeof window !== 'undefined') localStorage.setItem('tokenExp', String(tokenExp || 0));
    set({ tokenExp });
  },

  removeUserData: () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('token');
      localStorage.removeItem('nickname');
      localStorage.removeItem('tokenExp');
    }
    set({
      userId: '',
      nickname: '',
      email: '',
      token: '',
      tokenExp: 0,
    });
  },
}));

export default useUserStore;
