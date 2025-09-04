import { create } from 'zustand';

interface UserStore {
  userId: string;
  setUserId: (userId: string) => void;
  token: string;
  setToken: (token: string) => void;
  removeToken: () => void;
}

const useUserStore = create<UserStore>((set) => ({
  userId: '',
  setUserId: (userId: string) => set({ userId }),
  token: '',
  setToken: (token: string) => set({ token }),
  removeToken: () => set({ token: '' }),
}));

export default useUserStore;
