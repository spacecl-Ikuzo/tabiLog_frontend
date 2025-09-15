import { create } from 'zustand';

interface UserStore {
  userId: string;
  setUserId: (userId: string) => void;
  nickname: string;
  setNickname: (nickname: string) => void;
  email: string;
  setEmail: (email: string) => void;
  token: string;
  setToken: (token: string) => void;
  removeUserData: () => void;
}

const useUserStore = create<UserStore>((set) => ({
  userId: '',
  setUserId: (userId: string) => set({ userId }),
  nickname: '',
  setNickname: (nickname: string) => set({ nickname }),
  email: '',
  setEmail: (email: string) => set({ email }),
  token: '',
  setToken: (token: string) => set({ token }),
  removeUserData: () => set({ userId: '', nickname: '', email: '', token: '' }),
}));

export default useUserStore;
