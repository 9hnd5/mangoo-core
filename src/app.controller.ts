import { Controller, Get } from '@nestjs/common';
import { TestNotification, TestRequest } from 'src/app.noti';
import { Mediator } from 'src/mediator/mediator.service';

@Controller('app')
export class AppController {
  constructor(private mediator: Mediator) {}

  @Get()
  get() {
    const noti = new TestNotification();
    noti.id = 1;

    const ttest = new TestRequest();
    ttest.id = 2;
    this.mediator.send(ttest);
    return this.mediator.publish(noti);
  }
}
