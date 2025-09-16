import React, { Dispatch, SetStateAction } from "react";
import AddAssetItem from "./AddAssetItem";
import { AssetFormData } from "./AddAssetForm";

export interface LiquidAssetsProps {
  assetForm: AssetFormData;
  setAssetForm: Dispatch<SetStateAction<AssetFormData>>;
}

const LiquidAsset = ({ assetForm, setAssetForm }: LiquidAssetsProps) => {
  return (
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
        title="평균단가 *"
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
        target="purchasePrice"
        setAssetForm={setAssetForm}
        value={assetForm.purchasePrice}
        placeholder="원"
        disabled
      />
    </>
  );
};

export default LiquidAsset;
