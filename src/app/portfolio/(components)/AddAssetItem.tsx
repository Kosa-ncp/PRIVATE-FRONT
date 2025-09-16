import React, {
  ChangeEvent,
  Dispatch,
  InputHTMLAttributes,
  SetStateAction,
} from "react";
import { AssetFormData } from "./AddAssetForm";

interface AddAssetItemProps extends InputHTMLAttributes<HTMLInputElement> {
  title: string;
  target:
    | "purchasePrice"
    | "averagePrice"
    | "assetName"
    | "quantity"
    | "annualInterestRate"
    | "principalPrice"
    | "openDate"
    | "maturityDate";
  setAssetForm: Dispatch<SetStateAction<AssetFormData>>;
}

const AddAssetItem = ({
  title,
  value,
  target,
  setAssetForm,
  ...inputProps
}: AddAssetItemProps) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAssetForm((prev) => ({
      ...prev,
      [target]: e.target.value,
    }));

    if (target === "averagePrice" || target === "quantity") {
      setAssetForm((prev) => {
        return {
          ...prev,
          purchasePrice: prev.quantity * prev.averagePrice,
        };
      });
    }
  };

  return (
    <div>
      <label className="block text-sm font-medium text-gray-300 mb-2">
        {title}
      </label>
      <input
        value={value ?? ""}
        onChange={handleChange}
        className="w-full bg-gray-700 border border-gray-600 text-white rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
        {...inputProps}
      />
    </div>
  );
};

export default AddAssetItem;
