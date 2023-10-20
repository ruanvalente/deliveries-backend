import express, { Express } from "express";
import "express-async-errors";

import { AuthenticateClientRoutes } from "./routes/authenticate-client/authenticate-client-routes";
import { ClientRoutes } from "./routes/clients/clients-routes";
import { ExceptionMiddleWare } from "./routes/middlewares/exception-middleware";
import { DeliverymanRoutes } from "./routes/deliveryman/deliveryman-routes";

export class App {
  private app: Express;

  constructor() {
    this.app = express();
    this.app.use(express.json());
    this.routes();
    this.app.use(ExceptionMiddleWare.exceptionMiddle);
  }

  private routes() {
    const clientRoutes = new ClientRoutes();
    const authenticateClientRoutes = new AuthenticateClientRoutes();
    const deliverymanRoutes = new DeliverymanRoutes();

    this.app.use(
      "/api/deliveries/auth/client",
      authenticateClientRoutes.getRouter()
    );
    this.app.use("/api/deliveries", clientRoutes.getRouter());
    this.app.use("/api/deliveries", deliverymanRoutes.getRouter());
  }

  public startServer(port: number | string) {
    this.app.listen(port, () => {
      console.log(`server started in http://localhost:${port} 🚀`);
    });
  }
}
