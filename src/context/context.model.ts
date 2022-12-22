import { AsyncLocalStorage } from 'async_hooks';
import { Request, Response } from 'express';

export abstract class Context {
  id: any;
  request: Request;
  response: Response;
  
  static asyncLocalStorage = new AsyncLocalStorage<Context>();

  static start = (data: Context): void => {
    Context.asyncLocalStorage.enterWith(data);
  };

  static get = () => {
    return Context.asyncLocalStorage.getStore() as Context | undefined;
  };
}
