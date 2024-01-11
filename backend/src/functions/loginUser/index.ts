import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import middy from "@middy/core";
import jwt from "jsonwebtoken";
import { sendResponse, sendError } from "../../responses/index";
import { checkUsername } from "../../middleware/user";
import { comparePassword } from "../../middleware/bcrypt";

const loginUser = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  try {
    const { username, password } = JSON.parse(event.body || "{}");

    if (!username || !password) {
      return sendError(400, { success: false, message: "Username and password are required" });
    }

    const result = await checkUsername(username);

    if (!result.Items || result.Items.length === 0) {
      return sendError(404, { success: false, message: "Username does not exist" });
    }

    const userData = result.Items[0];
    const storedPasswordHash = userData.password;

    const passwordMatch = await comparePassword(password, storedPasswordHash);

    if (!passwordMatch) {
      return sendError(400, { success: false, message: "Invalid password" });
    }

    const token = jwt.sign({ userId: userData.userId }, "a1b1c1", {
      expiresIn: 3600,
    });

    return sendResponse(200, {
      success: true,
      message: `User ${username} successfully logged in!`,
      userInfo: { token: token, userID: userData.userID },
    });
  } catch (error) {
    console.error("Error logging in", error);
    return sendError(500, { success: false, message: "Could not log in" });
  }
};

export const handler = middy(loginUser).handler(loginUser);
