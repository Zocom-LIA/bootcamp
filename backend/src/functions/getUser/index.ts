import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { db } from "../../services/db";
import middy from "@middy/core";
import { sendResponse, sendError } from "../../responses";

const getUser = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  const id = event.pathParameters?.id;

  const result = await db
    .get({
      TableName: "YYGSUsers",
      Key: {
        userID: id,
      },
    })
    .promise();

  try {
    if (!result.Item) {
      return sendError(404, { success: false, message: "User not found" });
    }

    return sendResponse(200, {
      success: true,
      message: "User found",
      username: result.Item.username,
      userID: result.Item.userID,
    });
  } catch (error) {
    console.error("Error getting user:", error);

    return sendError(500, { success: false, message: "Internal Server Error" });
  }
};

export const handler = middy(getUser).handler(getUser);
