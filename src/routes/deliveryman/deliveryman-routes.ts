import express from "express";
import { CreateDeliverymanController } from "../../modules/deliveryman/use-cases/create-deliveryman/create-deliveryman-controller";
import { FindAllDeliveriesDeliverymanController } from "../../modules/deliveryman/use-cases/find-all-deliveries-deliveryman/find-all-deliveries-deliveryman-controller";
import { EnsureAuthenticateDeliverymanMiddleware } from "../../middlewares/ensure-authenticate-deliveryman-middleware";

export class DeliverymanRoutes {
  private router = express.Router();
  private createDeliverymanController: CreateDeliverymanController;
  private findAllDeliveriesDeliverymanController: FindAllDeliveriesDeliverymanController;

  constructor() {
    this.createDeliverymanController = new CreateDeliverymanController();
    this.findAllDeliveriesDeliverymanController =
      new FindAllDeliveriesDeliverymanController();
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post(
      "/deliveryman",
      this.createDeliverymanController.handle.bind(
        this.createDeliverymanController
      )
    );
    this.router.get(
      "/deliveryman/deliveries",
      EnsureAuthenticateDeliverymanMiddleware.ensureAuthenticateDeliverymanMiddleware,
      this.findAllDeliveriesDeliverymanController.handle.bind(
        this.findAllDeliveriesDeliverymanController
      )
    );
  }

  public getRouter(): express.Router {
    return this.router;
  }
}
