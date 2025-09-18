import React from "react";
import AddAssetItem from "./AddAssetItem";
import { LiquidAssetsProps } from "./LiquidAsset";

interface CashAssetProps extends LiquidAssetsProps {
  isDisable: boolean;
}

const CashAsset = ({ isDisable, assetForm, setAssetForm }: CashAssetProps) => {
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
        title={isDisable ? "현금 *" : "원금 *"}
        type="number"
        target="principalPrice"
        setAssetForm={setAssetForm}
        value={assetForm.principalPrice}
        placeholder="원"
      />
    </>
  );
};

export default CashAsset;
