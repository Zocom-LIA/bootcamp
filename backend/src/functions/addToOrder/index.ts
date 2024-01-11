import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { db } from "../../services/db";
import middy from "@middy/core";
import { sendResponse, sendError } from "../../responses";
import { CartItem, Order, MenuItem } from "../../interfaces";
import { v4 } from "uuid";
import * as menuData from "../../../../data/menu.json";

const addToOrder = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  try {
    const { itemId, category } = JSON.parse(event.body || "{}");
    //	"itemId": 11,
    // "category": "Dip"

    let selectedItem: MenuItem | undefined;

    if (category === "Dip") {
      selectedItem = menuData.dip.find((item) => item.id === itemId);
    } else if (category === "Wontons") {
      selectedItem = menuData.wontons.find((item) => item.id === itemId);
    }

    if (!selectedItem) {
      return sendError(404, { success: false, message: "Item not found in the selected category" });
    }

    // Add item to order - create new order

    // const newCartItem: CartItem = {
    //   info: selectedItem,
    // }

    //     const newOrder: Order = {
    //       id: v4(),
    //       items:
    //     };

    //     await db
    //       .put({
    //         TableName: "YYGSUsers",
    //         Item: newUser,
    //       })
    //       .promise();

    // await db
    //   .put({
    //     TableName: "YYGSOrders",
    //     Item: order,
    //   })
    //   .promise();

    // // See if orderId already exists for current order
    // const params = {
    //   TableName: "YYGSOrders",
    //   FilterExpression: "id = :id",
    //   ExpressionAttributeValues: {
    //     ":id": orderId,
    //   },
    // };

    // const result = await db.scan(params).promise();

    return sendResponse(200, {
      success: true,
      message: "Item added to cart successfully.",
    });
  } catch (error) {
    return sendError(500, { success: false, message: "Internal Server Error" });
  }
};

export const handler = middy(addToOrder).handler(addToOrder);
