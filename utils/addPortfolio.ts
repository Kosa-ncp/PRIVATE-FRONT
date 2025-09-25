import { AssetFormData } from "@/app/portfolio/(components)/AddAssetForm";
import instance, { ValidationError } from "./instance";
import {
  addPortfolioResponseDataType,
  addPortfolioResponseTypes,
} from "./utilsTypes";

const addPortfolio = async (
  formData: AssetFormData
): Promise<addPortfolioResponseDataType[]> => {
  try {
    const res = await instance("/api/portfolio", {
      method: "POST",
      body: JSON.stringify(formData),
    });

    const result: addPortfolioResponseTypes = await res.json();

    if (result.status !== "success" || !result.data) {
      throw new ValidationError("응답 데이터가 올바르지 않습니다.");
    }

    const data: addPortfolioResponseDataType[] = result.data;
    return data;
  } catch (error: unknown) {
    throw error;
  }
};

export default addPortfolio;
