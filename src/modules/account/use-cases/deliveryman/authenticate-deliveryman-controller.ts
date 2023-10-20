import { Request, Response } from "express";
import { IControllers } from "../../../../shared/implements/controllers/controllers";
import { AuthenticateDeliverymanUseCase } from "./authtenticate-deliveryman-use-case";

interface IAuthenticateDeliverymanRequest {
  username: string;
  password: string;
}

export class AuthenticateDeliverymanController implements IControllers {
  private authenticateDeliverymanUseCase: AuthenticateDeliverymanUseCase;
  constructor() {
    this.authenticateDeliverymanUseCase = new AuthenticateDeliverymanUseCase();
  }
  async handle(request: Request, response: Response): Promise<any> {
    const { username, password } =
      request.body as IAuthenticateDeliverymanRequest;

    const deliverymanToken = await this.authenticateDeliverymanUseCase.execute({
      username,
      password,
    });

    return response.status(200).json({
      token: deliverymanToken,
    });
  }
}
