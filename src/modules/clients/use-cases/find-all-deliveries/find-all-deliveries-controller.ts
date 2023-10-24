import { Request, Response } from "express";
import { IControllers } from "../../../../shared/implements/controllers/controllers";
import { FindAllDeliveriesUseCase } from "./find-all-deliveries-use-case";

export class FindAllDeliveriesController implements IControllers {
  private findAllDeliveriesUseCase: FindAllDeliveriesUseCase;

  constructor() {
    this.findAllDeliveriesUseCase = new FindAllDeliveriesUseCase();
  }

  async handle(request: Request, response: Response) {
    const { id_client } = request;
    const deliveries = await this.findAllDeliveriesUseCase.execute(id_client);

    return response
      .status(200)
      .json({ data: deliveries, message: "List of deliveries" });
  }
}
