import instance from "./instance";

const checkLogin = async () => {
  try {
    const res = await instance("/api/auth/verify", {
      method: "GET",
      credentials: "include",
    });

    await res.json();

    return { status: "success" };
  } catch (error) {
    return false;
  }
};

export default checkLogin;
