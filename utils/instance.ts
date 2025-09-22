import { Instance } from "./utilsTypes";

const instance: Instance = async (url, option) => {
  try {
    const res = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
      },
      ...option,
    });

    if (!res.ok) {
      throw new Error("Internal Server Error");
    }

    return res;
  } catch (error) {
    throw error;
  }
};

export default instance;
