import { http, HttpResponse } from "msw";
import { asset } from "./asset";

export const handlers = [
  http.get("/api/search", () => {
    return HttpResponse.json({
      data: { ...asset },
      status: "success",
    });
  }),
];
