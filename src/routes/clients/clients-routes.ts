import express from "express";
import { CreateClientController } from "../../modules/clients/use-cases/create-client/create-client-controller";
import { EnsureAuthenticateClientMiddleware } from "../../middlewares/ensure-authenticate-client-middleware";
import { FindAllDeliveriesController } from "../../modules/clients/use-cases/find-all-deliveries/find-all-deliveries-controller";

export class ClientRoutes {
  private router = express.Router();
  private createClientController: CreateClientController;
  private findAllDeliveriesController: FindAllDeliveriesController;

  constructor() {
    this.createClientController = new CreateClientController();
    this.findAllDeliveriesController = new FindAllDeliveriesController();
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post(
      "/clients",
      this.createClientController.handle.bind(this.createClientController)
    );
    this.router.get(
      "/clients/deliveries",
      EnsureAuthenticateClientMiddleware.ensureAuthenticateClientMiddleware,
      this.findAllDeliveriesController.handle.bind(
        this.findAllDeliveriesController
      )
    );
  }

  public getRouter(): express.Router {
    return this.router;
  }
}
