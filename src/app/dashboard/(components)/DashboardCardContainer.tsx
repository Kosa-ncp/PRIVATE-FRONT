import React from "react";
import DashbaordCard from "./DashbaordCard";
import { DollarSign } from "lucide-react";
import { getDashboardListTypes } from "../../../../utils/utilsTypes";

interface DashboardCardContainerProps {
  items: getDashboardListTypes;
}

const DashboardCardContainer = ({ items }: DashboardCardContainerProps) => {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <DashbaordCard
          asset={items.data.totalAssets}
          title="총 자산"
          description="총 자산"
          Icons={DollarSign}
        />
        <DashbaordCard
          asset={items.data.investmentPrincipal}
          title="투자 원금"
          description="누적 투자금"
          Icons={DollarSign}
        />
        <DashbaordCard
          asset={items.data.profitAndLoss}
          title="평가 손익"
          description="총 손익"
          Icons={DollarSign}
        />
        <DashbaordCard
          asset={items.data.assetsCount}
          title="보유 자산"
          description="다각화 자산"
          Icons={DollarSign}
        />
      </div>
    </div>
  );
};

export default DashboardCardContainer;
