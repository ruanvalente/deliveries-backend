import express from "express";
import { IRoutes } from "../../shared/implements/routes";

import { CreateDeliveryController } from "../../modules/deliveries/use-cases/create-deliveries/create-delivery-controller";
import { EnsureAuthenticateClientMiddleware } from "../../middlewares/ensure-authenticate-client-middleware";
import { FindAllAvailableController } from "../../modules/deliveries/use-cases/find-all-available/find-all-available-controller";
import { EnsureAuthenticateDeliverymanMiddleware } from "../../middlewares/ensure-authenticate-deliveryman-middleware";
import { UpdateDeliverymanController } from "../../modules/deliveries/use-cases/update-deliveryman/update-deliveryman-controller";

export class DeliveriesRoutes implements IRoutes {
  private router = express.Router();
  private createDeliveryController: CreateDeliveryController;
  private findAllAvailableController: FindAllAvailableController;
  private updateDeliverymanController: UpdateDeliverymanController;

  constructor() {
    this.createDeliveryController = new CreateDeliveryController();
    this.findAllAvailableController = new FindAllAvailableController();
    this.updateDeliverymanController = new UpdateDeliverymanController();
    this.initializeRoutes();
  }

  initializeRoutes(): void {
    this.router.post(
      "/delivery",
      EnsureAuthenticateClientMiddleware.ensureAuthenticateClientMiddleware,
      this.createDeliveryController.handle.bind(this.createDeliveryController)
    );
    this.router.get(
      "/delivery/available",
      EnsureAuthenticateDeliverymanMiddleware.ensureAuthenticateDeliverymanMiddleware,
      this.findAllAvailableController.handle.bind(
        this.findAllAvailableController
      )
    );
    this.router.put(
      "/delivery/update-deliveryman/:id",
      EnsureAuthenticateDeliverymanMiddleware.ensureAuthenticateDeliverymanMiddleware,
      this.updateDeliverymanController.handle.bind(
        this.updateDeliverymanController
      )
    );
  }
  getRoutes(): express.Router {
    return this.router;
  }
}
