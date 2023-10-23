import { Request, Response, NextFunction } from "express";
import jsonwebtoken from "jsonwebtoken";

interface IPayload {
  sub: string;
}

export class EnsureAuthenticateDeliverymanMiddleware {
  static ensureAuthenticateDeliverymanMiddleware(
    request: Request,
    response: Response,
    next: NextFunction
  ) {
    const authHeader = request.headers.authorization;
    if (!authHeader) {
      return response
        .status(401)
        .json({ status: "No authorization", message: "Token missing" });
    }

    const [, token] = authHeader.split(" ");

    try {
      const { sub } = jsonwebtoken.verify(
        token,
        "671a0da0ba061c98de801409dbc89d7e"
      ) as IPayload;
      request.id_deliveryman = sub;

      return next();
    } catch (error) {
      return response
        .status(401)
        .json({ status: "No authorization", message: "Invalid token" });
    }
  }
}
