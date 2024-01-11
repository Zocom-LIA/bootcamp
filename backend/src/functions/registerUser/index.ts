import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { v4 } from "uuid";
import { db } from "../../services/db";
import middy from "@middy/core";
import { sendResponse, sendError } from "../../responses/index";
import { hashPassword } from "../../middleware/bcrypt";
import { checkUsername } from "../../middleware/user";
import { UserType } from "../../interfaces/interfaces";

const registerUser = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  try {
    const { username, password, staff } = JSON.parse(event.body || "{}");

    const hashedPwd = await hashPassword(password);
    const result = await checkUsername(username);
    const usersFound = result.Count;

    if (usersFound === 1) {
      return sendError(400, { success: false, message: "Username already exists" });
    }

    const newUser: UserType = {
      userID: v4(),
      username: username,
      password: hashedPwd,
      staff: staff === true, // if "staff": true, exists in body, then user will be staff. If staff prop isn't in body it defaults to false
    };

    await db
      .put({
        TableName: "YYGSUsers",
        Item: newUser,
      })
      .promise();

    return sendResponse(201, {
      success: true,
      message: "User registered successfully",
      userInfo: { username: username, userID: newUser.userID },
    });
  } catch (error) {
    console.error("Error registering user", error);

    return sendError(500, { success: false, message: "Internal Server Error" });
  }
};

export const handler = middy(registerUser).handler(registerUser);
