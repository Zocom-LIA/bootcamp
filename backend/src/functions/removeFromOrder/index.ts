import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { db } from "../../services/db";
import middy from "@middy/core";
import { sendResponse, sendError } from "../../responses";

const removeFromOrder = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  try {

      const orderId:string = event.pathParameters!.orderId!.toString();
      

      const result = await db.delete ({
        TableName: "YYGSOrders",
        Key: {
          id: orderId
        },
        ReturnValues: "ALL_OLD"
      }).promise();

      console.log(result.Attributes)

      if(result.Attributes?.id != undefined) {

        return sendResponse(200, {
          success: true,
          message: `Order ${result.Attributes!.id} avslutad`
        });
      }
      else {

        return sendResponse(404, {
          success: true,
          message: `Ingen order med id ${orderId} hittades`
        })
      }
  }
  catch (error) {

    return sendError(500, { success: false, message: "Error" });
  }
};

export const handler = middy(removeFromOrder).handler(removeFromOrder);
