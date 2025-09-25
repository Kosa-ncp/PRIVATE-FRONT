import {
  AuthError,
  NetworkError,
  ServerError,
  ValidationError,
} from "./errorHandling";
import { Instance } from "./utilsTypes";

const instance: Instance = async (url, option) => {
  try {
    const res = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
      },
      ...option,
    });

    if (!res.ok) {
      if (res.status === 400) {
        throw new ValidationError("잘못된 요청입니다");
      } else if (res.status === 401) {
        throw new AuthError("인증이 필요합니다", res.status);
      } else if (res.status === 403) {
        throw new AuthError("접근 권한이 없습니다", res.status);
      } else if (res.status === 404) {
        throw new ValidationError("리소스를 찾을 수 없습니다");
      } else if (res.status >= 500) {
        throw new ServerError("서버 오류가 발생했습니다", res.status);
      } else {
        throw new NetworkError(`HTTP 오류: ${res.status}`);
      }
    }

    return res;
  } catch (error: unknown) {
    if (error instanceof TypeError && error.message.includes("fetch")) {
      throw new NetworkError("네트워크 연결을 확인해주세요");
    }

    if (
      error instanceof ValidationError ||
      error instanceof NetworkError ||
      error instanceof AuthError ||
      error instanceof ServerError
    ) {
      throw error;
    }

    throw new NetworkError("요청 처리 중 오류가 발생했습니다");
  }
};

export default instance;
export { ValidationError, NetworkError, AuthError, ServerError };
