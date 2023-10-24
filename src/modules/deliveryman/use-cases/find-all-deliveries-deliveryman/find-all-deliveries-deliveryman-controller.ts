import { Request, Response } from "express";
import { IControllers } from "../../../../shared/implements/controllers/controllers";
import { FindAllDeliveriesDeliverymanUseCase } from "./find-all-deliveries-deliveryman-use-case";

export class FindAllDeliveriesDeliverymanController implements IControllers {
  private findAllDeliveriesDeliverymanUseCase: FindAllDeliveriesDeliverymanUseCase;
  constructor() {
    this.findAllDeliveriesDeliverymanUseCase =
      new FindAllDeliveriesDeliverymanUseCase();
  }
  async handle(request: Request, response: Response) {
    const { id_deliveryman } = request;
    const deliveries = await this.findAllDeliveriesDeliverymanUseCase.execute(
      id_deliveryman
    );

    return response
      .status(200)
      .json({ data: deliveries, message: "List of deliveries" });
  }
}
