import express from "express";
import { CreateClientController } from "../../modules/clients/use-cases/create-client/create-client-controller";

export class ClientRoutes {
  private router = express.Router();
  private createClientController: CreateClientController;

  constructor() {
    this.createClientController = new CreateClientController();
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post(
      "/clients",
      this.createClientController.handle.bind(this.createClientController)
    );
  }

  public getRouter(): express.Router {
    return this.router;
  }
}
