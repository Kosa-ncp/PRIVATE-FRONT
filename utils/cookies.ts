import { cookies } from "next/headers";

export interface TokenData {
  accessToken: string;
}

const setAuthCookies = async (tokenData: TokenData) => {
  const cookieStore = await cookies();

  cookieStore.set("accessToken", tokenData.accessToken, {
    httpOnly: false,
    secure: false,
    sameSite: "lax",
    path: "/",
  });
};

const getAuthTokens = async (): Promise<TokenData | null> => {
  try {
    const cookieStore = await cookies();

    const accessToken = cookieStore.get("accessToken")?.value;

    if (!accessToken) {
      return null;
    }

    return {
      accessToken,
    };
  } catch (error) {
    console.error("쿠키 읽기 오류:", error);
    return null;
  }
};

const clearAuthCookies = async () => {
  const cookieStore = await cookies();

  cookieStore.delete("accessToken");
};

export { setAuthCookies, getAuthTokens, clearAuthCookies };
