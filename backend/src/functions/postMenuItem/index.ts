// import ddb from "@zocom/services";
// import MenuItem from "@zocom/interfaces";
// import { successResponse, errorResponse } from "@zocom/responses";

// exports.handler = async (event, context) => {
//   try {
//     console.log("blab");
//     const menuItem: MenuItem = JSON.parse(event.body);
//     await ddb
//       .put({
//         TableName: "YYGSMenu",
//         Item: {
//           name: menuItem.name,
//           desc: menuItem.desc,
//           ingredients: menuItem.ingredients,
//           price: menuItem.price,
//         },
//       })
//       .promise();
//     console.log("2");

//     return successResponse(200, { message: "Success" });
//   } catch (error) {
//     return errorResponse(error.statusCode, { message: error.message });
//   }
// };

import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { db } from "../../services/db";
import middy from "@middy/core";
import { sendResponse, sendError } from "../../responses";
import { MenuItem } from "../../interfaces";

const postMenuItem = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  try {
    const { items } = JSON.parse(event.body || "{}");

    return sendResponse(200, {
      success: true,
      message: "message",
    });
  } catch (error) {
    return sendError(500, { success: false, message: "Internal Server Error" });
  }
};

export const handler = middy(postMenuItem).handler(postMenuItem);
