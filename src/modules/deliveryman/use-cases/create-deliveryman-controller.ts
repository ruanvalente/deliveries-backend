import { Request, Response } from "express";
import { CreateDeliverymanUseCase } from "./create-deliveryman-use-case";
import { IControllers } from "../../../shared/implements/controllers/controllers";

interface ICreateDeliverymaRequest {
  username: string;
  password: string;
}

export class CreateDeliverymanController implements IControllers {
  private createDeliverymanUseCase: CreateDeliverymanUseCase;

  constructor() {
    this.createDeliverymanUseCase = new CreateDeliverymanUseCase();
  }

  async handle(request: Request, response: Response) {
    const { username, password } = request.body as ICreateDeliverymaRequest;

    const deliveryman = await this.createDeliverymanUseCase.execute({
      username,
      password,
    });

    return response.status(201).json({
      data: {
        deliveryman,
        message: "Create deliveryman sucessfully",
      },
    });
  }
}
