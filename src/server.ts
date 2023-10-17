import express, { Express } from "express";

export class App {
  private app: Express;

  constructor() {
    this.app = express();
    this.app.use(express.json());
    this.routes();
  }

  private routes() {
    this.app.use("/api/deliveries", (request, response) => {
      response.json({ message: "delivery" });
    });
  }

  public startServer(port: number | string) {
    this.app.listen(port, () => {
      console.log(`server started in http://localhost:${port} 🚀`);
    });
  }
}
