import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { db } from "../../services/db";
import middy from "@middy/core";
import { sendResponse, sendError } from "../../responses";

const removeFromOrder = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  try {
    // Add code here
    return sendResponse(200, {
      success: true,
      message: "message",
    });
  } catch (error) {
    return sendError(500, { success: false, message: "Internal Server Error" });
  }
};

export const handler = middy(removeFromOrder).handler(removeFromOrder);
