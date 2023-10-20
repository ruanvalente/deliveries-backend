import { Request, Response } from "express";
import { AuthenticateClientUseCase } from "./authenticate-client-use-case";

interface IAuthenticateClientResquest {
  username: string;
  password: string;
}

export class AuthenticateClientController {
  private authenticateClientUseCase: AuthenticateClientUseCase;
  constructor() {
    this.authenticateClientUseCase = new AuthenticateClientUseCase();
  }

  async handle(request: Request, response: Response) {
    const { username, password } = request.body as IAuthenticateClientResquest;

    const clientToken = await this.authenticateClientUseCase.execute({
      username,
      password,
    });

    return response.status(200).json({
      token: clientToken,
    });
  }
}
