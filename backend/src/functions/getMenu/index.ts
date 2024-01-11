import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import middy from "@middy/core";
import { sendResponse, sendError } from "../../responses";
import * as menuData from "../../../../data/menu.json";

const getMenu = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  try {
    return sendResponse(200, {
      success: true,
      message: "message",
      body: menuData,
    });
  } catch (error) {
    console.error("Error fetching menu:", error);
    return sendError(500, { success: false, message: "Internal Server Error" });
  }
};

export const handler = middy(getMenu).handler(getMenu);
