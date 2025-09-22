import { NextRequest, NextResponse } from "next/server";

const middleware = (request: NextRequest) => {
  const token = request.cookies.get("accessToken")?.value;
  const pathname = request.nextUrl.pathname;

  if (!token && pathname !== "/") {
    return NextResponse.redirect(new URL("/", request.url));
  } else if (pathname === "/" && token) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }
};

export const config = {
  matcher: ["/", "/dashboard", "/portfolio", "/chatbot"],
};

export default middleware;
