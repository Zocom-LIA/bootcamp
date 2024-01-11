import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { db } from "../../services/db";
import middy from "@middy/core";
import { sendResponse, sendError } from "../../responses";
import * as menuData from "../../../../data/menu.json";
import { CartItem, Order, MenuItem } from "../../interfaces";

const getOrder = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  try {
    // Add code here
    const OrderTable = {
      TableName: 'YYGSOrders'
    }

    const scannedTable = await db.scan(OrderTable).promise();

    if (scannedTable.Items && Array.isArray(scannedTable.Items)) {
      const usersOrder = scannedTable.Items.filter(order => order.id === order.id)
    
    return sendResponse(200, {
      success: true,
      message: "successfully fetched users order",
      body: usersOrder
    });
    } else {
      return sendError(404, { success: false, message: "Items not found or invalid format" });
    }
  } catch  (error) {
    return sendError(500, { success: false, message: "Internal Server Error" });
  }
};

export const handler = middy(getOrder).handler(getOrder);
