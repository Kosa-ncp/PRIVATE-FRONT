"use client";

import React, { useEffect, useState } from "react";
import { useAssetStore } from "../../../../stores/asserStore";
import { useAsset } from "../../../../hooks/useAsset";
import { Plus, Shield } from "lucide-react";
import ResetButton from "./ResetButton";
import AddAssetItem from "./AddAssetItem";

export interface AssetEditFormData {
  assetType: string;
  averagePrice: number;
  assetName: string;
  quantity: number;
  principal: number;
  orderType?: "BUY" | "SELL";
}

interface EditAssetFormProps {
  onToggleModal: () => void;
}

const EditAssetForm = ({ onToggleModal }: EditAssetFormProps) => {
  const { selectedAssetId } = useAssetStore();
  const { data } = useAsset(selectedAssetId);
  const [assets, setAssetForm] = useState<AssetEditFormData>({
    assetType: data.assetType,
    averagePrice: null,
    assetName: data.assetName,
    quantity: null,
    principal: null,
    orderType: "BUY",
  });

  const handleReset = () => {
    setAssetForm((prev) => {
      return {
        assetType: prev.assetType,
        averagePrice: null,
        assetName: prev.assetName,
        quantity: null,
        principal: null,
        orderType: prev.orderType,
      };
    });
  };

  const handleOrderType = (orderType: AssetEditFormData["orderType"]) => {
    setAssetForm((prev) => {
      return {
        ...prev,
        orderType,
      };
    });
  };

  const handleEditAsset = () => {
    onToggleModal();
  };

  useEffect(() => {
    setAssetForm(assets);
  }, [assets, data]);

  return (
    <div className="space-y-6">
      <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
        <h3 className="text-xl font-semibold mb-4 text-white flex items-center">
          <Plus className="w-5 h-5 mr-2" />
          자산 정보 입력
        </h3>
        <div className="flex justify-end gap-4 mb-4">
          <button
            className={`${assets.orderType === "BUY" ? "bg-green-600" : "bg-green-800"} hover:bg-green-600 text-white font-medium px-6 py-2 rounded-lg transition-colors duration-200`}
            onClick={() => handleOrderType("BUY")}>
            매수
          </button>
          <button
            className={`${assets.orderType === "SELL" ? "bg-red-600" : "bg-red-800"} hover:bg-red-600 text-white font-medium px-6 py-2 rounded-lg transition-colors duration-200`}
            onClick={() => handleOrderType("SELL")}>
            매도
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              자산 유형 *
            </label>
            <select
              value={assets.assetType}
              onChange={(e) =>
                setAssetForm((prev) => ({
                  ...prev,
                  assetType: e.target.value,
                }))
              }
              className="w-full bg-gray-700 border border-gray-600 text-white rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
              disabled>
              <option>국내주식</option>
              <option>해외주식</option>
              <option>가상자산</option>
              <option>예적금</option>
              <option>현금</option>
            </select>
          </div>
          {assets.assetType === "국내주식" ||
          assets.assetType === "해외주식" ||
          assets.assetType === "가상자산" ? (
            <>
              <AddAssetItem
                title="자산명 *"
                type="text"
                target="assetName"
                setAssetForm={setAssetForm}
                value={assets.assetName}
                placeholder="예: 삼성전자, 애플 주식"
                disabled
              />
              <AddAssetItem
                title="매수 / 매도가 *"
                type="number"
                target="averagePrice"
                setAssetForm={setAssetForm}
                value={assets.averagePrice}
                placeholder="원"
              />
              <AddAssetItem
                title="수량 *"
                type="number"
                target="quantity"
                setAssetForm={setAssetForm}
                value={assets.quantity}
                placeholder="개"
              />
              <AddAssetItem
                title="매수 / 매도 총액 *"
                type="number"
                target="principal"
                setAssetForm={setAssetForm}
                value={assets.principal}
                placeholder="원"
                disabled
              />
            </>
          ) : (
            <>
              <AddAssetItem
                title="자산명 *"
                type="text"
                target="assetName"
                setAssetForm={setAssetForm}
                value={assets.assetName}
                placeholder="예: 삼성전자, 애플 주식"
              />
              <AddAssetItem
                title={assets.assetType === "현금" ? "현금 *" : "원금 *"}
                type="number"
                target="principal"
                setAssetForm={setAssetForm}
                value={assets.principal}
                placeholder="원"
              />
            </>
          )}
        </div>

        <div className="mt-6 flex justify-end space-x-4">
          <ResetButton handleReset={handleReset} />
          <button
            onClick={handleEditAsset}
            className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-6 py-2 rounded-lg transition-all">
            수정
          </button>
        </div>
      </div>

      <div className="bg-green-900 border border-green-700 p-4 rounded-lg">
        <div className="flex items-center">
          <Shield className="w-5 h-5 text-green-400 mr-2" />
          <span className="text-green-200 font-medium">프라이버시 보호</span>
        </div>
        <p className="text-green-300 text-sm mt-2">
          입력하신 모든 데이터는 암호화되어 저장됩니다. 언제든지 데이터를
          삭제하거나 내보내기할 수 있습니다.
        </p>
      </div>
    </div>
  );
};

export default EditAssetForm;
