import instance from "./instance";
import { getPortfolioListTypes } from "./utilsTypes";

const getPortfolioList = async (): Promise<getPortfolioListTypes> => {
  const res = await instance("/api/portfolio", { method: "GET" });
  const data: getPortfolioListTypes = await res.json();
  return data;
};

export default getPortfolioList;
