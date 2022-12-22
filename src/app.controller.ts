import { Controller, Get } from '@nestjs/common';
import { ModuleRef } from '@nestjs/core';
import { AppService } from './app.service';

@Controller('app')
export class AppController {
  constructor(private readonly appService: AppService, ref: ModuleRef) {}

  @Get()
  getHello() {
    return this.appService.getHello();
  }
}
