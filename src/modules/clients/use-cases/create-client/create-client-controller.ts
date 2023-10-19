import { Request, Response } from "express";
import { CreateClientUseCase } from "./create-cliente-use-case";

interface ICreateClientResponse {
  username: string;
  password: string;
}

export class CreateClientController {
  private createClientUseCase: CreateClientUseCase;

  constructor() {
    this.createClientUseCase = new CreateClientUseCase();
  }
  async handle(request: Request, response: Response) {
    const { username, password } = request.body as ICreateClientResponse;

    const client = await this.createClientUseCase.execute({
      username,
      password,
    });

    return response.status(201).json({
      data: {
        client,
        message: "Create client successfully",
      },
    });
  }
}
