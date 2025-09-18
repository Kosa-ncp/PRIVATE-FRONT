import { AssetFormData } from "@/app/portfolio/(components)/AddAssetForm";
import instance from "./instance";
import { addPortfolioResponseDataType } from "./utilsTypes";

const addPortfolio = async (
  formData: AssetFormData
): Promise<addPortfolioResponseDataType> => {
  const res = await instance("/api/portfolio", {
    method: "POST",
    body: JSON.stringify(formData),
  });
  const data: addPortfolioResponseDataType = await res.json();

  return data;
};

export default addPortfolio;
