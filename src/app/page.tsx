"use client";

import React, { ChangeEvent, useState } from "react";
import { useRouter } from "next/navigation";
import useUserStore from "../../stores/userStore";

const Page = () => {
  const [user, serUser] = useState<string>("");
  const navigation = useRouter();
  const { login } = useUserStore();
  const handleUserData = (e: ChangeEvent<HTMLInputElement>) => {
    serUser(e.target.value);
  };

  const handleLogin = async () => {
    await login(user);

    navigation.push("/dashboard");

    await new Promise((resolve) => {
      const checkURL = () => {
        if (window.location.pathname === "/dashboard") {
          resolve(void 0);
        } else {
          setTimeout(checkURL, 50);
        }
      };
      checkURL();
    });
  };

  return (
    <div className=" absolute inset-0 min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center p-4">
      <div className="relative w-full max-w-md">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl blur-xl opacity-20 scale-105"></div>
        <div className="relative bg-slate-800/80 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8 shadow-2xl">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-white mb-2">PRIVATE</h1>
            <p className="text-slate-300 text-sm">AI 포트폴리오 관리</p>
          </div>
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                유저 식별을 위해 해쉬값을 입력해 주세요.
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={user}
                  onChange={handleUserData}
                  placeholder="해쉬값을 입력하세요..."
                  className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                  <svg
                    className="w-5 h-5 text-slate-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <button
              onClick={handleLogin}
              className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-medium py-3 px-4 rounded-lg transition-all duration-200 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-slate-800">
              로그인
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
