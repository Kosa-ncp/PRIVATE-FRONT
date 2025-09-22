import instance from "./instance";
import { editPortfolioResponseDataType } from "./utilsTypes";
import { AssetEditFormData } from "@/app/portfolio/(components)/EditAssetForm";

const editPortfolio = async (
  formData: AssetEditFormData
): Promise<editPortfolioResponseDataType> => {
  const res = await instance("/api/portfolio", {
    method: "PATCH",
    body: JSON.stringify(formData),
  });
  const data: editPortfolioResponseDataType = await res.json();

  return data;
};

export default editPortfolio;
