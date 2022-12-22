import { Injectable, NestMiddleware } from '@nestjs/common';
import { ContextIdFactory, ModuleRef } from '@nestjs/core';
import { NextFunction, Request, Response } from 'express';
import { Context } from 'src/context/context.model';

@Injectable()
export class ContextMiddleware implements NestMiddleware {
  constructor(private moduleRef: ModuleRef) {}
  use(request: Request, response: Response, next: NextFunction) {
    const id = ContextIdFactory.getByRequest(request);
    this.moduleRef.registerRequestByContextId(request, id);
    Context.start({ id: id.id, request, response });
    next();
  }
}
