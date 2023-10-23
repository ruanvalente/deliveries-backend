import { Router } from "express";
export interface IRoutes {
  initializeRoutes(): void;
  getRoutes(): Router;
}
