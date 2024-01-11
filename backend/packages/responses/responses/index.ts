import { MenuItem } from "@zocom/interfaces";

export function errorResponse(statusCode:number, body: { message?:string }) {

    const response = {
        statusCode: statusCode,
        body: JSON.stringify(body)
    }

    return response;
}

export function successResponse(statusCode:number, body: { message:string, content?:MenuItem }) {//TODO: lägg till fler content typer

    const response = {
        statusCode: statusCode,
        body: JSON.stringify(body)
    }

    return response;
}