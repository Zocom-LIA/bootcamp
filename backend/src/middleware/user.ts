import { db } from "../services/db";

export async function checkUsername(username: string) {
  const params = {
    TableName: "YYGSUsers",
    FilterExpression: "username = :username",
    ExpressionAttributeValues: {
      ":username": username,
    },
  };

  const result = await db.scan(params).promise();

  return result;
}
