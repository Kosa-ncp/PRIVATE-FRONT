import { NextRequest } from "next/server";
import getUser from "../../../../utils/getUser";
import {
  handleApiError,
  handleCatchError,
} from "../../../../utils/errorHandling";

const API_BASE_URL = process.env.BACKEND_API_URL || "http://localhost:8100";

export async function POST(request: NextRequest) {
  const token = getUser(request);
  if (!token) return Response.redirect(new URL("/", request.url));

  try {
    const body = await request.json();

    const response = await fetch(`${API_BASE_URL}/api/chatbot`, {
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
    return handleCatchError(error, "Chatbot API Route");
  }
}
