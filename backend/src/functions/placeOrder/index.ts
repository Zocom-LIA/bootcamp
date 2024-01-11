import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { db } from "../../services/db";
import middy from "@middy/core";
import { sendResponse, sendError } from "../../responses";
import { CartItem, Order, MenuItem } from "../../interfaces";

const placeOrder = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  try {
    // Add code here

    const requestBody = JSON.parse(event.body || '');
    const { cartItems } = requestBody;

    // Create an order object
    const order: Order = {
      id: generateOrderId(),
      items: cartItems,
    }

    await db.put({
      TableName: 'YYGSOrders',
      Item: order
    })

    return sendResponse(200, {
      success: true,
      message: "Order placed successfully",
      body: {order},
    });
  } catch (error) {
    return sendError(500, { success: false, message: "Internal Server Error" });
  }
};

export const handler = middy(placeOrder).handler(placeOrder);

function generateOrderId(): string {
  return '#' +  Math.random().toString(36).substring(2,12);
}
