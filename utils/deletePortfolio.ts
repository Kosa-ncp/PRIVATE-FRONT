import instance from "./instance";
import { DeletePortfolioResponseDataType } from "./utilsTypes";

const deletePortfolio = async (
  id: string
): Promise<DeletePortfolioResponseDataType> => {
  const res = await instance(`/api/portfolio`, {
    method: "DELETE",
    body: JSON.stringify({ assetId: id }),
  });
  const data: DeletePortfolioResponseDataType = await res.json();
  return data;
};

export default deletePortfolio;
