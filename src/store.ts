import { create } from 'zustand';

interface UserStore {
  email: string;
  setEmail: (email: string) => void;
}

const useUserStore = create<UserStore>((set) => ({
  email: '',
  setEmail: (email: string) => set({ email }),
}));

export default useUserStore;
