import React from "react";
import AddAssetItem from "./AddAssetItem";
import { LiquidAssetsProps } from "./LiquidAsset";
import AddAssetDateItem from "./AddAssetDateItem";

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

      <AddAssetItem
        title="연이율 *"
        type="number"
        target="annualInterestRate"
        setAssetForm={setAssetForm}
        value={assetForm.annualInterestRate}
        placeholder="%"
        disabled={isDisable}
      />

      <AddAssetDateItem
        title="가입일 *"
        type="date"
        target="openDate"
        setAssetForm={setAssetForm}
        value={assetForm.openDate}
        disabled={isDisable}
      />

      <AddAssetDateItem
        title="만기일 *"
        type="date"
        target="maturityDate"
        setAssetForm={setAssetForm}
        value={assetForm.maturityDate}
        disabled={isDisable}
      />
    </>
  );
};

export default CashAsset;
