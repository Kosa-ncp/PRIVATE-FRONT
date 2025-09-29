import { NextRequest } from "next/server";
import getUser from "../../../../utils/getUser";
import {
  handleApiError,
  handleCatchError,
} from "../../../../utils/errorHandling";

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
      return await handleApiError(response);
    }

    const data = await response.json();
    return Response.json(data);
  } catch (error) {
    return handleCatchError(error, "GET API Route");
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

    if (!response.ok) {
      return await handleApiError(response);
    }

    const data = await response.json();
    return Response.json(data);
  } catch (error) {
    return handleCatchError(error, "POST API Route");
  }
}

export async function PATCH(request: NextRequest) {
  const token = getUser(request);
  if (!token) return Response.redirect(new URL("/", request.url));

  try {
    const body = await request.json();

    const response = await fetch(`${API_BASE_URL}/api/portfolio`, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      return await handleApiError(response);
    }

    const data = await response.json();
    return Response.json(data);
  } catch (error) {
    return handleCatchError(error, "PATCH API Route");
  }
}

export async function DELETE(request: NextRequest) {
  const token = getUser(request);

  try {
    if (!token) {
      return Response.json({ error: "인증 토큰이 없습니다" }, { status: 401 });
    }

    const { assetId } = await request.json();

    const response = await fetch(`${API_BASE_URL}/api/portfolio`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ assetId }),
    });

    if (!response.ok) {
      return await handleApiError(response);
    }

    const data = await response.json();
    return Response.json(data);
  } catch (error) {
    return handleCatchError(error, "DELETE API Route");
  }
}
