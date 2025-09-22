import { NextRequest, NextResponse } from "next/server";
import { generateToken } from "../../../../../utils/jwt";
import { setAuthCookies } from "../../../../../utils/cookies";

export const POST = async (request: NextRequest) => {
  try {
    const { uuid } = await request.json();

    const token = generateToken(uuid);

    await setAuthCookies({ accessToken: token });

    return NextResponse.json({
      status: "success",
    });
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json({ error: "로그인 실패" }, { status: 500 });
  }
};
