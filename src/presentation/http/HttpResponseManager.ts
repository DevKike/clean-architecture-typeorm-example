// src/infrastructure/communication/HttpResponseManager.ts
import { Response } from "express";
import { IHttpResponseManager } from "../interfaces/IHttpResponseManager";
import { HttpStatusCode } from "./HttpStatusCode";
import { MessageConstants } from "../messages/MessageConstants";

export class HttpResponseManager implements IHttpResponseManager {
  async manageResponse(
    promise: Promise<any>,
    res: Response,
    statusCode: HttpStatusCode,
    message?: MessageConstants
  ): Promise<void> {
    try {
      const result = await promise;
      res.status(statusCode).json(message || result);
    } catch (error) {
      res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).json({
        error: MessageConstants.UNEXPECTED_ERROR_OCURRED,
      });
    }
  }
}
