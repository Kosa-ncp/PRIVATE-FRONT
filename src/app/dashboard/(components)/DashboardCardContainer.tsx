import React from "react";
import DashbaordCard from "./DashbaordCard";
import { DollarSign, BarChart3, Target } from "lucide-react";
import { getDashboardDataType } from "../../../../utils/utilsTypes";

interface DashboardCardContainerProps {
  item: getDashboardDataType;
}

const DashboardCardContainer = ({ item }: DashboardCardContainerProps) => {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <DashbaordCard
          asset={item.totalAssets}
          title="총 자산"
          description="총 자산"
          Icons={DollarSign}
        />
        <DashbaordCard
          asset={item.investmentPrincipal}
          title="투자 원금"
          description="누적 투자금"
          Icons={BarChart3}
        />
        <DashbaordCard
          asset={item.profitAndLoss}
          title="평가 손익"
          description="총 손익"
          Icons={Target}
        />
        <DashbaordCard
          asset={item.assetsCount}
          title="보유 자산"
          description="다각화 자산"
          Icons={Target}
        />
      </div>
    </div>
  );
};

export default DashboardCardContainer;
