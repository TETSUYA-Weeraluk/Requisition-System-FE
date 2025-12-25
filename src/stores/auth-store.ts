import { create } from "zustand";

interface AuthStore {
  isAuthenticated: boolean;
  setIsAuthenticated: (isAuthenticated: boolean) => void;
}

const useAuthStore = create<AuthStore>((set) => ({
  isAuthenticated: false,
  setIsAuthenticated: (isAuthenticated) => set({ isAuthenticated }),
}));

export default useAuthStore;
