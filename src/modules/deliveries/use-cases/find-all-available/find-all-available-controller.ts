import { Request, Response } from "express";
import { IControllers } from "../../../../shared/implements/controllers/controllers";
import { FindAllAvailableUseCase } from "./find-all-available-use-case";

export class FindAllAvailableController implements IControllers {
  private findAllAvailableUseCase: FindAllAvailableUseCase;

  constructor() {
    this.findAllAvailableUseCase = new FindAllAvailableUseCase();
  }
  async handle(request: Request, response: Response) {
    const deliveries = await this.findAllAvailableUseCase.execute();

    return response.status(200).json({
      data: deliveries,
      message: "List all deliveries without end date",
    });
  }
}
