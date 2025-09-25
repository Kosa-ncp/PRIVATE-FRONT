import { create } from "zustand";
import logout from "../utils/logout";
import checkLogin from "../utils/checkLogin";
import login from "../utils/login";

interface userInfoProps {
  isLogin: boolean;
  checkLogin: () => void;
  login: (uuid: string) => Promise<boolean>;
  logout: () => void;
}

const useUserStore = create<userInfoProps>((set) => {
  return {
    isLogin: false,

    login: async (uuid: string) => {
      await login(uuid);
      set({ isLogin: true });

      return true;
    },

    checkLogin: async () => {
      const isLogin = await checkLogin();

      if (isLogin) {
        set({ isLogin: true });
      } else {
        set({ isLogin: false });
      }
    },

    logout: async () => {
      await logout();
      set({ isLogin: false });
    },
  };
});

export default useUserStore;
