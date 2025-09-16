"use client";

import { Download, Plus } from "lucide-react";
import React, { useState } from "react";
import ChartConatainer from "./(components)/ChartConatainer";
import { getPortfolioListTypes } from "../../../utils/utilsTypes";
import AssetList from "./(components)/AssetList";
import ModalManager, { currentModal } from "./(components)/ModalManager";

const mockData: getPortfolioListTypes = {
  status: "success",
  data: [
    {
      assetId: "KR001",
      assetName: "삼성전자",
      assetType: "국내주식",
      quantity: 50,
      marketValue: 3850000,
      averagePrice: 72000,
      principal: 3600000,
      profit: 250000,
      profitRate: 6.94,
    },
    {
      assetId: "US001",
      assetName: "Apple Inc",
      assetType: "해외주식",
      quantity: 10,
      marketValue: 2280000,
      averagePrice: 200000,
      principal: 2000000,
      profit: 280000,
      profitRate: 14.0,
    },
    {
      assetId: "CR001",
      assetName: "비트코인",
      assetType: "가상자산",
      quantity: 0.5,
      marketValue: 45000000,
      averagePrice: 80000000,
      principal: 40000000,
      profit: 5000000,
      profitRate: 12.5,
    },
    {
      assetId: "SA001",
      assetName: "KB국민은행 정기예금",
      assetType: "예적금",
      quantity: 1,
      marketValue: 10500000,
      averagePrice: 10000000,
      principal: 10000000,
      profit: 500000,
      profitRate: 5.0,
    },
    {
      assetId: "CA001",
      assetName: "원화 현금",
      assetType: "현금",
      quantity: 1,
      marketValue: 5000000,
      averagePrice: 5000000,
      principal: 5000000,
      profit: 0,
      profitRate: 0.0,
    },
  ],
};

const Page = () => {
  const [modalData, setModalData] = useState<{
    isOpen: boolean;
    currentModal: currentModal;
  }>({ isOpen: false, currentModal: "" });

  const calculatePortfolioData = () => {
    const typeGroups = mockData.data.reduce(
      (acc: Record<string, number>, asset) => {
        if (!acc[asset.assetType]) acc[asset.assetType] = 0;
        acc[asset.assetType] += asset.marketValue;
        return acc;
      },
      {} as Record<string, number>
    );

    const total = Object.values(typeGroups).reduce(
      (sum, value) => sum + value,
      0
    );
    const colors: { [key: string]: string } = {
      국내주식: "#FF6B6B",
      해외주식: "#4ECDC4",
      가상자산: "#45B7D1",
      예적금: "#96CEB4",
      현금: "#FFEAA7",
    };

    return Object.entries(typeGroups).map(([type, value]) => ({
      name: type,
      value: Math.round((value / total) * 100),
      amount: value,
      color: colors[type] || "#DDA0DD",
    }));
  };

  const portfolioData = calculatePortfolioData();

  const handleModal = (target: currentModal) => {
    setModalData((prev) => ({
      ...prev,
      isOpen: !prev.isOpen,
      currentModal: target,
    }));
  };

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
          <h3 className="text-xl font-semibold mb-4 text-white">
            포트폴리오 구성
          </h3>
          <ChartConatainer data={portfolioData} />
        </div>
        <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
          <h3 className="text-xl font-semibold mb-4 text-white">자산 현황</h3>
          <div className="space-y-3">
            {portfolioData.map((item, index) => (
              <div
                key={index}
                className="flex justify-between items-center p-3 bg-gray-700 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div
                    className="w-4 h-4 rounded-full"
                    style={{ backgroundColor: item.color }}></div>
                  <span className="text-white font-medium">{item.name}</span>
                </div>
                <div className="text-right">
                  <div className="text-white font-semibold">{item.value}%</div>
                  <div className="text-gray-400 text-sm">
                    ₩{(item.amount / 10000).toFixed(1)}만
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold text-white">보유 자산 목록</h3>
          <div className="flex justify-between gap-4">
            <button
              className="cursor-pointer bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-4 py-2 rounded-lg transition-all flex items-center space-x-2"
              onClick={() => handleModal("ADD_PORTFOLIO")}>
              <Plus className="w-4 h-4" />
              <span>추가하기</span>
            </button>
            <button className="cursor-pointer bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-4 py-2 rounded-lg transition-all flex items-center space-x-2">
              <Download className="w-4 h-4" />
              <span>내보내기</span>
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-700">
                <th className="text-left py-3 px-4 text-gray-300">자산명</th>
                <th className="text-left py-3 px-4 text-gray-300">유형</th>
                <th className="text-right py-3 px-4 text-gray-300">평가금액</th>
                <th className="text-right py-3 px-4 text-gray-300">매입금액</th>
                <th className="text-right py-3 px-4 text-gray-300">손익</th>
                <th className="text-right py-3 px-4 text-gray-300">수익률</th>
                <th className="text-center py-3 px-4 text-gray-300">관리</th>
              </tr>
            </thead>
            <AssetList assets={mockData.data} />
          </table>
        </div>
      </div>
      <ModalManager
        onToggleModal={() => handleModal("")}
        currentModal={modalData.currentModal}
      />
    </div>
  );
};

export default Page;
