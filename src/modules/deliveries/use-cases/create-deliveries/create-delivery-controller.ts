import { Request, Response } from "express";
import { IControllers } from "../../../../shared/implements/controllers/controllers";
import { CreateDeliveryUseCase } from "./create-delivery-use-case";

interface CreateDeliveryRequest {
  id_client: string;
  item_name: string;
}

export class CreateDeliveryController implements IControllers {
  private createDeliveryUseCase: CreateDeliveryUseCase;

  constructor() {
    this.createDeliveryUseCase = new CreateDeliveryUseCase();
  }
  async handle(request: Request, response: Response) {
    const { id_client, item_name } = request.body as CreateDeliveryRequest;
    const delivery = await this.createDeliveryUseCase.execute({
      id_client,
      item_name,
    });
    return response
      .status(201)
      .json({ data: { delivery }, message: "Delivery created successfully" });
  }
}
