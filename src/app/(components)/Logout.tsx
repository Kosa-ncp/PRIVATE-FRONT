"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import useUserStore from "../../../stores/userStore";
import { LogOut } from "lucide-react";

const Logout = () => {
  const navigation = useRouter();
  const { isLogin, checkLogin, logout } = useUserStore();

  const handleLogout = async () => {
    await logout();
    navigation.push("/");
  };

  useEffect(() => {
    checkLogin();
  }, [checkLogin]);

  return (
    isLogin && (
      <button onClick={handleLogout}>
        <LogOut />
      </button>
    )
  );
};

export default Logout;
