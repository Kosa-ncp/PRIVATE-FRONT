import instance from "./instance";

const login = async (uuid: string) => {
  try {
    const res = await instance("/api/auth/login", {
      method: "POST",
      body: JSON.stringify({ uuid }),
      credentials: "include",
    });

    await res.json();

    return { status: "success" };
  } catch (error) {
    console.log(error);
    return { status: "false", error: "로그인 오류" };
  }
};

export default login;
