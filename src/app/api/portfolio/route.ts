import { NextRequest } from "next/server";
import getUser from "../../../../utils/getUser";

const API_BASE_URL = process.env.BACKEND_API_URL || "http://localhost:8100";

export async function GET(request: NextRequest) {
  const token = getUser(request);
  if (!token) return Response.redirect(new URL("/", request.url));

  try {
    const response = await fetch(`${API_BASE_URL}/api/portfolio`, {
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

export async function POST(request: NextRequest) {
  const token = getUser(request);
  if (!token) return Response.redirect(new URL("/", request.url));

  try {
    const body = await request.json();

    const response = await fetch(`${API_BASE_URL}/api/portfolio`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    const data = await response.json();
    return Response.json(data);
  } catch (error) {
    console.log(error);
    return Response.json({ error: "생성 실패" }, { status: 500 });
  }
}

export async function PATCH(request: NextRequest) {
  const token = getUser(request);
  if (!token) return Response.redirect(new URL("/", request.url));

  try {
    const body = await request.json();

    console.log(body);

    const response = await fetch(`${API_BASE_URL}/api/portfolio`, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
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

export async function DELETE(request: NextRequest) {
  const token = getUser(request);

  const { assetId } = await request.json();

  try {
    if (!token) throw new Error("No token");
    const response = await fetch(`${API_BASE_URL}/api/portfolio`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ assetId }),
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
