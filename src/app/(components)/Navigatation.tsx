"use client";
import { BarChart3, Brain, Target } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navigatation = () => {
  const pathname = usePathname();
  const taps = [
    { id: "dashboard", name: "대시보드", icon: BarChart3 },
    { id: "portfolio", name: "포트폴리오", icon: Target },
    { id: "chatbot", name: "AI 분석", icon: Brain },
  ];

  return (
    <nav className="bg-gray-800 border-b border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex space-x-8">
          {taps.map((tab) => (
            <Link
              key={tab.id}
              href={`/${tab.id}`}
              className={`flex items-center space-x-2 py-4 px-1 border-b-2 font-medium text-sm cursor-pointer ${
                pathname === `/${tab.id}`
                  ? "border-purple-500 text-purple-400"
                  : "border-transparent text-gray-400 hover:text-white hover:border-gray-300"
              }`}
              scroll={false}>
              <tab.icon className="w-4 h-4" /> {tab.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigatation;
