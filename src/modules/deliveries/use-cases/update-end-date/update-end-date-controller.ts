import { Request, Response } from "express";
import { IControllers } from "../../../../shared/implements/controllers/controllers";
import { UpdateEndDateUseCase } from "./update-end-date-use-case";

export class UpdateEndDateController implements IControllers {
  private updateEndDateUseCase: UpdateEndDateUseCase;

  constructor() {
    this.updateEndDateUseCase = new UpdateEndDateUseCase();
  }

  async handle(request: Request, response: Response) {
    const { id_deliveryman } = request;
    const { id: id_delivery } = request.params;

    const updateEndDateDeliveryman = await this.updateEndDateUseCase.execute({
      id_delivery,
      id_deliveryman,
    });

    return response.status(200).json({
      data: updateEndDateDeliveryman,
      message: "Delivery made successfully",
    });
  }
}
