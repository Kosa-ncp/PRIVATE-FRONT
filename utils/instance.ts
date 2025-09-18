import { Instance } from "./utilsTypes";

const API_SERVER = "http://223.130.151.167:8100";

const instance: Instance = async (url, option) => {
  const res = await fetch(`${API_SERVER}${url}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer 1234",
    },
    ...option,
  });

  return res;
};

export default instance;
