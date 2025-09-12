import { Bell, Settings, Shield, User } from "lucide-react";
import React from "react";

const Header = () => {
  return (
    <header className="bg-gray-800 shadow-lg border-b border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-4">
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-2 rounded-lg">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-white">PRIVATE</h1>
            <span className="text-sm text-gray-400 bg-gray-700 px-2 py-1 rounded-full">
              AI 포트폴리오 관리
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <Bell className="w-5 h-5 text-gray-400 cursor-pointer hover:text-white" />
            <Settings className="w-5 h-5 text-gray-400 cursor-pointer hover:text-white" />
            <User className="w-5 h-5 text-gray-400 cursor-pointer hover:text-white" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
