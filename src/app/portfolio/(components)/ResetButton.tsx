import React, { Dispatch, SetStateAction } from "react";
import { AssetFormData } from "./AddAssetForm";

interface ResetButtonProps {
  setAssetForm: Dispatch<SetStateAction<AssetFormData>>;
}

const ResetButton = ({ setAssetForm }: ResetButtonProps) => {
  return (
    <button
      onClick={() =>
        setAssetForm((prev) => {
          return {
            assetType: prev.assetType,
            purchasePrice: null,
            averagePrice: null,
            assetName: "",
            quantity: null,
            annualInterestRate: null,
            principalPrice: null,
          };
        })
      }
      className="bg-gray-600 hover:bg-gray-500 text-white px-6 py-2 rounded-lg transition-colors">
      초기화
    </button>
  );
};

export default ResetButton;
