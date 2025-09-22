"use client";

import React from "react";
import useAssetStore from "../../../../stores/asserStore";
import { useAsset } from "../../../../hooks/useAsset";
import { Minus } from "lucide-react";
import useDeletePortfolio from "../../../../hooks/useDeletePortfolio";
import { useRouter } from "next/navigation";

interface DeleteAssetFormProps {
  onToggleModal: () => void;
}

const DeleteAssetForm = ({ onToggleModal }: DeleteAssetFormProps) => {
  const { selectedAssetId } = useAssetStore();
  const { data } = useAsset(selectedAssetId);
  const { mutateAsync } = useDeletePortfolio();
  const navigation = useRouter();

  const handleDeleteAsset = async () => {
    try {
      await mutateAsync(data.assetId);
      onToggleModal();
    } catch (error) {
      navigation.push("/");
    }
  };

  const handleCancelDelete = () => {
    onToggleModal();
  };

  return (
    <div className="space-y-6">
      <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
        <h3 className="text-xl font-semibold mb-4 text-white flex items-center">
          <Minus className="w-5 h-5 mr-2" />
          자산 삭제
        </h3>
        <div className="mb-4">
          <p className="block text-lg font-medium text-gray-300 mb-2">
            정말 아래 자산을 삭제하시겠습니까?
          </p>
          <p>{`${data.assetType} ${data.assetName}`}</p>
        </div>
        <div className="flex justify-center gap-4">
          <button
            onClick={handleCancelDelete}
            className="bg-gray-600 hover:bg-gray-500 text-white px-6 py-2 rounded-lg transition-colors">
            취소
          </button>
          <button
            onClick={handleDeleteAsset}
            className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-6 py-2 rounded-lg transition-all">
            확인
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteAssetForm;
