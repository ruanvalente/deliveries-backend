export interface IControllers {
  handle(...args: any): Promise<any>;
}
