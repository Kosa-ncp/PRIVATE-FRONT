import { Instance } from "./utilsTypes";

const instance: Instance = async (url, option) => {
  const res = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
    },
    ...option,
  });

  return res;
};

export default instance;
