"use client";

import React from "react";
import { useGetDashboard } from "../../../hooks/useGetDashboard";
import DashboardCardContainer from "./(components)/DashboardCardContainer";
import ChartConatainer from "./(components)/ChartConatainer";
import ReportContainer from "./(components)/ReportContainer";
import LoadingSpinner from "./(components)/LoadingSpinner";

const Page = () => {
  const { data, isLoading } = useGetDashboard();

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-gray-900/80 backdrop-blur-sm flex items-center justify-center z-50 transition-opacity duration-300">
        <div className="bg-gray-800 rounded-lg p-8 shadow-2xl border border-gray-700">
          <LoadingSpinner
            size="lg"
            variant="gradient"
            text="데이터를 불러오는 중..."
          />
        </div>
      </div>
    );
  }

  return (
    <>
      {data ? (
        <div className="space-y-8">
          <DashboardCardContainer items={data} />
          <ChartConatainer assetType={data.data.assetType} />
          <ReportContainer
            title="일일 리포트"
            reports={data.data.report}
            className="mb-6"
          />
        </div>
      ) : (
        <div>데이터 없음</div>
      )}
    </>
  );
};

export default Page;
