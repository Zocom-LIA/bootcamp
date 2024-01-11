import { ResponseBody } from "../interfaces";

export function sendError(code: number, response: ResponseBody) {
  return {
    statusCode: code,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(response),
  };
}

export function sendResponse(code: number, response: ResponseBody) {
  return {
    statusCode: code,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(response),
  };
}
