"use client";

import { Plus } from "lucide-react";
import React, { useState } from "react";
import ChartConatainer from "./(components)/ChartConatainer";
import AssetList from "./(components)/AssetList";
import ModalManager, { currentModal } from "./(components)/ModalManager";
import { useGetPortfolio } from "../../../hooks/useGetPortfolio";
import LoadingSpinner from "../dashboard/(components)/LoadingSpinner";
import useAssetStore from "../../../stores/asserStore";

const Page = () => {
  const [modalData, setModalData] = useState<{
    isOpen: boolean;
    currentModal: currentModal;
  }>({ isOpen: false, currentModal: "" });

  const { data, isLoading, isRefetching, isFetching } = useGetPortfolio();
  const { setSelectedAssetId } = useAssetStore();

  const handleModal = (target: currentModal) => {
    setModalData((prev) => ({
      ...prev,
      isOpen: !prev.isOpen,
      currentModal: target,
    }));
  };

  const handleAddAsset = () => {
    handleModal("ADD_PORTFOLIO");
  };

  const handleDeleteAsset = (id: string) => {
    handleModal("DELETE_CONFIRM");
    setSelectedAssetId(id);
  };

  const handleEditAsset = (id: string) => {
    handleModal("EDIT_PORTFOLIO");
    setSelectedAssetId(id);
  };

  const calculatePortfolioData = () => {
    const typeGroups = data.reduce(
      (acc: Record<string, number>, asset) => {
        if (!acc[asset.assetType]) acc[asset.assetType] = 0;
        acc[asset.assetType] += asset.valuation;
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

  if (isLoading || isRefetching) {
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
      <div className="bg-gray-800 p-6 rounded-xl shadow-lg relative">
        {isFetching && (
          <div className="absolute rounded-lg inset-0 bg-gray-900/80 backdrop-blur-sm w-full h-full flex justify-center items-center">
            <LoadingSpinner
              size="lg"
              variant="gradient"
              text="데이터를 불러오는 중..."
            />
          </div>
        )}
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold text-white">보유 자산 목록</h3>
          <div className="flex justify-between gap-4">
            <button
              className="cursor-pointer bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-4 py-2 rounded-lg transition-all flex items-center space-x-2"
              onClick={handleAddAsset}>
              <Plus className="w-4 h-4" />
              <span>추가하기</span>
            </button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-700">
                <th className="text-center py-3 px-4 text-gray-300">자산명</th>
                <th className="text-center py-3 px-4 text-gray-300">유형</th>
                <th className="text-center py-3 px-4 text-gray-300">
                  평가금액
                </th>
                <th className="text-center py-3 px-4 text-gray-300">현재가</th>
                <th className="text-center py-3 px-4 text-gray-300">평단가</th>
                <th className="text-center py-3 px-4 text-gray-300">수량</th>
                <th className="text-center py-3 px-4 text-gray-300">
                  매입금액
                </th>
                <th className="text-center py-3 px-4 text-gray-300">손익</th>
                <th className="text-center py-3 px-4 text-gray-300">수익률</th>
                <th className="text-center py-3 px-4 text-gray-300">관리</th>
              </tr>
            </thead>
            <AssetList
              assets={data}
              handleDeleteAsset={handleDeleteAsset}
              handleEditAsset={handleEditAsset}
            />
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
