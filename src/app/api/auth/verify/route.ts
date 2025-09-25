import { NextResponse } from "next/server";
import { getAuthTokens } from "../../../../../utils/cookies";
import { verifyToken } from "../../../../../utils/jwt";

export const GET = async () => {
  try {
    const token = await getAuthTokens();

    if (!token) {
      return NextResponse.json(
        { error: "로그인이 필요합니다" },
        { status: 401 }
      );
    }

    const payload = verifyToken(token.accessToken);

    if (!payload) {
      return NextResponse.json(
        { error: "유효하지 않은 토큰" },
        { status: 401 }
      );
    }

    return NextResponse.json({
      status: "success",
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "인증 확인 실패" }, { status: 500 });
  }
};
