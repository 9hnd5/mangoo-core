import { Module } from '@nestjs/common';
import { Mediator } from 'src/mediator/mediator.service';

@Module({
  providers: [Mediator],
  exports: [Mediator],
})
export class MediatorModule {}
