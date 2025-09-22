import { NextRequest } from "next/server";
import getUser from "../../../../utils/getUser";

const API_BASE_URL = process.env.BACKEND_API_URL || "http://localhost:8100";

export async function GET(request: NextRequest) {
  const token = getUser(request);

  try {
    const response = await fetch(`${API_BASE_URL}/api/search`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Backend API 오류");
    }

    const data = await response.json();

    return Response.json(data);
  } catch (error) {
    console.log(error);
    return Response.json(
      { error: "서버 오류가 발생했습니다" },
      { status: 500 }
    );
  }
}
