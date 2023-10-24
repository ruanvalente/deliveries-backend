import { Request, Response } from "express";
import { IControllers } from "../../../../shared/implements/controllers/controllers";
import { UpdateDeliverymanUseCase } from "./update-deliveryman-use-case";

export class UpdateDeliverymanController implements IControllers {
  private updateDeliverymanUseCase: UpdateDeliverymanUseCase;

  constructor() {
    this.updateDeliverymanUseCase = new UpdateDeliverymanUseCase();
  }

  async handle(request: Request, response: Response) {
    const { id_deliveryman } = request;
    const { id: id_delivery } = request.params;

    const updateDeliveryman = await this.updateDeliverymanUseCase.execute({
      id_deliveryman,
      id_delivery,
    });

    return response
      .status(200)
      .json({
        data: updateDeliveryman,
        message: "Deliveryman updated successfully",
      });
  }
}
