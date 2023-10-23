import express from "express";
import { IRoutes } from "../../shared/implements/routes";

import { CreateDeliveryController } from "../../modules/deliveries/use-cases/create-deliveries/create-delivery-controller";
import { EnsureAuthenticateClientMiddleware } from "../../middlewares/ensure-authenticate-client-middleware";

export class DeliveriesRoutes implements IRoutes {
  private router = express.Router();
  private createDeliveryController: CreateDeliveryController;

  constructor() {
    this.createDeliveryController = new CreateDeliveryController();
    this.initializeRoutes();
  }

  initializeRoutes(): void {
    this.router.post(
      "/delivery",
      EnsureAuthenticateClientMiddleware.ensureAuthenticateClientMiddleware,
      this.createDeliveryController.handle.bind(this.createDeliveryController)
    );
  }
  getRoutes(): express.Router {
    return this.router;
  }
}
