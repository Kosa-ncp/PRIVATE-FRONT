import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "PRIVATE-SECRET";

const generateToken = (payload: string): string => {
  return jwt.sign(payload, JWT_SECRET, {
    algorithm: "HS256",
  });
};

const verifyToken = (token: string): string | null => {
  try {
    return jwt.verify(token, JWT_SECRET, {
      ignoreExpiration: true,
    }) as string;
  } catch (error) {
    console.error("Token verification failed:", error);
    return null;
  }
};

export { generateToken, verifyToken };
