import express, { Express } from "express";

import { ClientRoutes } from "./routes/clients/clients-routes";

export class App {
  private app: Express;

  constructor() {
    this.app = express();
    this.app.use(express.json());
    this.routes();
  }

  private routes() {
    const clientRoutes = new ClientRoutes();
    this.app.use("/api/deliveries", clientRoutes.getRouter());
  }

  public startServer(port: number | string) {
    this.app.listen(port, () => {
      console.log(`server started in http://localhost:${port} 🚀`);
    });
  }
}
