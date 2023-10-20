import express from "express";
import { CreateDeliverymanController } from "../../modules/deliveryman/use-cases/create-deliveryman-controller";

export class DeliverymanRoutes {
  private router = express.Router();
  private createDeliverymanController: CreateDeliverymanController;

  constructor() {
    this.createDeliverymanController = new CreateDeliverymanController();
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post(
      "/deliveryman",
      this.createDeliverymanController.handle.bind(
        this.createDeliverymanController
      )
    );
  }

  public getRouter(): express.Router {
    return this.router;
  }
}
