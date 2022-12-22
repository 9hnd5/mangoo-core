import { OnModuleInit } from '@nestjs/common';
import { ModuleRef } from '@nestjs/core';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
/**
 * @function
 * Import CqrsModule before use BaseController
 */
export class BaseController implements OnModuleInit {
  protected commandBus: CommandBus;
  protected queryBus: QueryBus;
  constructor(private moduleRef: ModuleRef) {}
  onModuleInit() {
    this.commandBus = this.moduleRef.get(CommandBus);
    this.queryBus = this.moduleRef.get(QueryBus);
  }
}
