import { LucideIcon } from "lucide-react";
import React from "react";

interface DashbaordCardProps {
  asset: number;
  title: string;
  description?: string;
  Icons: LucideIcon;
}

const DashbaordCard = ({
  asset,
  title,
  description,
  Icons,
}: DashbaordCardProps) => {
  const targetCard = (title: string) => {
    switch (title) {
      case "총 자산":
        return (
          <div className="bg-gradient-to-r from-green-500 to-green-600 p-6 rounded-xl shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-green-100 text-sm font-medium">{title}</p>
                <p className="text-white text-2xl font-bold">
                  ₩{(asset / 10000).toFixed(1)}만
                </p>
                <p className="text-green-100 text-xs flex items-center mt-1">
                  {description}
                </p>
              </div>
              <Icons className="w-8 h-8 text-green-100" />
            </div>
          </div>
        );
      case "투자 원금":
        return (
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-6 rounded-xl shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-blue-100 text-sm font-medium">투자 원금</p>
                <p className="text-white text-2xl font-bold">
                  ₩{(asset / 10000).toFixed(1)}만
                </p>
                <p className="text-blue-100 text-xs">누적 투자금</p>
              </div>
              <Icons className="w-8 h-8 text-blue-100" />
            </div>
          </div>
        );
      case "평가 손익":
        return (
          <div className="bg-gradient-to-r from-purple-500 to-purple-600 p-6 rounded-xl shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-purple-100 text-sm font-medium">평가 손익</p>
                <p className="text-white text-2xl font-bold">
                  {asset >= 0 ? "+" : "-"}
                  {(Math.abs(asset) / 10000).toFixed(1)}만 ₩
                </p>
                <p className="text-purple-100 text-xs">총 손익</p>
              </div>
              <Icons className="w-8 h-8 text-purple-100" />
            </div>
          </div>
        );
      case "보유 자산":
        return (
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-6 rounded-xl shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-orange-100 text-sm font-medium">보유 종목</p>
                <p className="text-white text-2xl font-bold">{asset}개</p>
                <p className="text-orange-100 text-xs">다각화 자산</p>
              </div>
              <Icons className="w-8 h-8 text-orange-100" />
            </div>
          </div>
        );
      default:
        return "bg-gray-500";
    }
  };

  return targetCard(title);
};

export default DashbaordCard;
