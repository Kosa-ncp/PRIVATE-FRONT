import { NextRequest } from "next/server";
import { verifyToken } from "./jwt";

const getUser = (request: NextRequest) => {
  const token = verifyToken(request.cookies.get("accessToken")?.value);

  return token;
};

export default getUser;
