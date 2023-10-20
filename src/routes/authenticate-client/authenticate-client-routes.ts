import express from "express";

import { AuthenticateClientController } from "../../modules/account/use-cases/client/authenticate-client-controller";
import { AuthenticateDeliverymanController } from "../../modules/account/use-cases/deliveryman/authenticate-deliveryman-controller";

export class AuthenticateClientRoutes {
  private router = express.Router();
  private authenticateClientController: AuthenticateClientController;
  private authenticateDeliverymanController: AuthenticateDeliverymanController;

  constructor() {
    this.authenticateClientController = new AuthenticateClientController();
    this.authenticateDeliverymanController =
      new AuthenticateDeliverymanController();
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post(
      "/client",
      this.authenticateClientController.handle.bind(
        this.authenticateClientController
      )
    );
    this.router.post(
      "/deliveryman",
      this.authenticateDeliverymanController.handle.bind(
        this.authenticateDeliverymanController
      )
    );
  }

  public getRouter(): express.Router {
    return this.router;
  }
}
