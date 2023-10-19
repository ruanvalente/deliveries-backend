import express from "express";

import { AuthenticateClientController } from "../../modules/account/use-cases/authenticate-client-controller";

export class AuthenticateClientRoutes {
  private router = express.Router();
  private authenticateController: AuthenticateClientController;

  constructor() {
    this.authenticateController = new AuthenticateClientController();
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post(
      "/",
      this.authenticateController.handle.bind(this.authenticateController)
    );
  }

  public getRouter(): express.Router {
    return this.router;
  }
}
