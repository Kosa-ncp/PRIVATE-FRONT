"use client";
import { PropsWithChildren, useEffect } from "react";

const MSWProvider = ({ children }: PropsWithChildren) => {
  useEffect(() => {
    import("../mocks/browser").then(({ worker }) => {
      worker.start({
        onUnhandledRequest: "bypass", // 처리되지 않은 요청은 통과
      });
    });
  }, []);

  return <>{children}</>;
};

export default MSWProvider;
