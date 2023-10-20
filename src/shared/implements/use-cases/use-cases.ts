export interface IUseCases {
  execute(...args: any): Promise<any>;
}
