import instance from "./instance";
import { getDashboardListTypes } from "./utilsTypes";

const getDashboardList = async (): Promise<getDashboardListTypes> => {
  const res = await instance("/api/dashboard", { method: "GET" });
  const data: getDashboardListTypes = await res.json();
  return data;
};

export default getDashboardList;
