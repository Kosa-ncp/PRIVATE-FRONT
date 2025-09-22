import instance from "./instance";

const logout = async () => {
  try {
    await instance("/api/auth/logout", {
      method: "POST",
      credentials: "include",
    });

    return { status: "success" };
  } catch (error) {
    console.error("로그아웃 실패:", error);
  }
};

export default logout;
