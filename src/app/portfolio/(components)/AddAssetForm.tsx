"use client";

import { Plus, Shield } from "lucide-react";
import { useState } from "react";
import ResetButton from "./ResetButton";
import AddAssetItem from "./AddAssetItem";
import useAddPortfolio from "../../../../hooks/useAddPortfolio";
import { useRouter } from "next/navigation";

export interface AssetFormData {
  assetType: string;
  averagePrice: number;
  assetName: string;
  quantity: number;
  principal: number;
}

interface AddAssetFormProps {
  onToggleModal: () => void;
}

const AddAssetForm = ({ onToggleModal }: AddAssetFormProps) => {
  const { mutateAsync } = useAddPortfolio();
  const navigation = useRouter();
  const [assetForm, setAssetForm] = useState<AssetFormData>({
    assetType: "국내주식",
    averagePrice: null,
    assetName: "",
    quantity: null,
    principal: null,
  });

  const handleReset = () => {
    setAssetForm((prev) => {
      return {
        assetType: prev.assetType,
        averagePrice: null,
        assetName: "",
        quantity: null,
        principal: null,
      };
    });
  };

  const handleAddAsset = async () => {
    try {
      await mutateAsync(assetForm);
      onToggleModal();
    } catch (error) {
      navigation.push("/");
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
        <h3 className="text-xl font-semibold mb-4 text-white flex items-center">
          <Plus className="w-5 h-5 mr-2" />
          자산 정보 입력
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              자산 유형 *
            </label>
            <select
              value={assetForm.assetType}
              onChange={(e) =>
                setAssetForm((prev) => ({
                  ...prev,
                  assetType: e.target.value,
                }))
              }
              className="w-full bg-gray-700 border border-gray-600 text-white rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500">
              <option>국내주식</option>
              <option>해외주식</option>
              <option>가상자산</option>
              <option>예적금</option>
              <option>현금</option>
            </select>
          </div>
          {assetForm.assetType === "국내주식" ||
          assetForm.assetType === "해외주식" ||
          assetForm.assetType === "가상자산" ? (
            <>
              <AddAssetItem
                title="자산명 *"
                type="text"
                target="assetName"
                setAssetForm={setAssetForm}
                value={assetForm.assetName}
                placeholder="예: 삼성전자, 애플 주식"
              />
              <AddAssetItem
                title="평균 단가 *"
                type="number"
                target="averagePrice"
                setAssetForm={setAssetForm}
                value={assetForm.averagePrice}
                placeholder="원"
              />
              <AddAssetItem
                title="수량 *"
                type="number"
                target="quantity"
                setAssetForm={setAssetForm}
                value={assetForm.quantity}
                placeholder="개"
              />
              <AddAssetItem
                title="매입 원가 *"
                type="number"
                target="principal"
                setAssetForm={setAssetForm}
                value={assetForm.principal}
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
                value={assetForm.assetName}
                placeholder="예: 삼성전자, 애플 주식"
              />
              <AddAssetItem
                title={assetForm.assetType === "현금" ? "현금 *" : "원금 *"}
                type="number"
                target="principal"
                setAssetForm={setAssetForm}
                value={assetForm.principal}
                placeholder="원"
              />
            </>
          )}
        </div>
        <div className="mt-6 flex justify-end space-x-4">
          <ResetButton handleReset={handleReset} />
          <button
            onClick={handleAddAsset}
            className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-6 py-2 rounded-lg transition-all">
            자산 추가
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

export default AddAssetForm;
