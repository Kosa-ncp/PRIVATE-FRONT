import { NextResponse } from "next/server";
import { clearAuthCookies } from "../../../../../utils/cookies";

export const POST = async () => {
  await clearAuthCookies();

  return NextResponse.json({
    status: "success",
    message: "로그아웃 완료",
  });
};
