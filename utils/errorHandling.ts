const handleApiError = async (response: Response) => {
  const errorData = await response.json().catch(() => ({}));

  if (response.status === 400) {
    return Response.json(
      { error: "잘못된 요청입니다", ...errorData },
      { status: 400 }
    );
  }

  if (response.status === 401) {
    return Response.json(
      { error: "인증이 필요합니다", ...errorData },
      { status: 401 }
    );
  }

  if (response.status === 403) {
    return Response.json(
      { error: "접근 권한이 없습니다", ...errorData },
      { status: 403 }
    );
  }

  if (response.status >= 500) {
    return Response.json(
      { error: "서버 오류가 발생했습니다", ...errorData },
      { status: 502 }
    );
  }

  return Response.json(
    { error: "요청 처리 실패", ...errorData },
    { status: response.status }
  );
};

const handleCatchError = (error: unknown, context: string) => {
  console.error(`${context} Error:`, error);

  if (error instanceof SyntaxError) {
    return Response.json({ error: "잘못된 JSON 형식입니다" }, { status: 400 });
  }

  if (error instanceof TypeError && error.message.includes("fetch")) {
    return Response.json(
      { error: "백엔드 서버에 연결할 수 없습니다" },
      { status: 502 }
    );
  }

  return Response.json(
    { error: "내부 서버 오류가 발생했습니다" },
    { status: 500 }
  );
};

class ValidationError extends Error {
  public readonly name = "ValidationError";

  constructor(message: string) {
    super(message);
    Object.setPrototypeOf(this, ValidationError.prototype);
  }
}

class NetworkError extends Error {
  public readonly name = "NetworkError";

  constructor(message: string) {
    super(message);
    Object.setPrototypeOf(this, NetworkError.prototype);
  }
}

class AuthError extends Error {
  public readonly name = "AuthError";
  public readonly status: number;

  constructor(message: string, status: number) {
    super(message);
    this.status = status;
    Object.setPrototypeOf(this, AuthError.prototype);
  }
}

class ServerError extends Error {
  public readonly name = "ServerError";
  public readonly status: number;

  constructor(message: string, status: number) {
    super(message);
    this.status = status;
    Object.setPrototypeOf(this, ServerError.prototype);
  }
}

export {
  handleApiError,
  handleCatchError,
  ValidationError,
  NetworkError,
  AuthError,
  ServerError,
};
