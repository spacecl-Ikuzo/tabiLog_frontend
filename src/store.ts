import { create } from 'zustand';

interface UserStore {
  userId: string;
  setUserId: (userId: string) => void;
  nickname: string;
  setNickname: (nickname: string) => void;
  token: string;
  setToken: (token: string) => void;
  removeToken: () => void;
}

const useUserStore = create<UserStore>((set) => ({
  userId: '',
  setUserId: (userId: string) => set({ userId }),
  nickname: '',
  setNickname: (nickname: string) => set({ nickname }),
  token: '',
  setToken: (token: string) => set({ token }),
  removeToken: () => set({ token: '', userId: '', nickname: '' }),
}));

export default useUserStore;
