import { MenuItem } from "@zocom/interfaces";

async function sendResponse(statusCode:number, body:Array<MenuItem>, message?:string) {

    const response = {
        statusCode: statusCode,
        body: body,
        message: message
    }

    return response;
}

async function sendError(statusCode:number, message?:string) {

    const response = {
        statusCode: statusCode,
        message: message
    }

    return response;
}

export { sendResponse, sendError };