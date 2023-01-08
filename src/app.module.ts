import { Module } from '@nestjs/common';
import { AppController } from 'src/app.controller';
import { TestNotificationHandler1, TestRequestHandler } from 'src/app.noti';
import { MediatorModule } from 'src/mediator/mediator.module';

@Module({
  imports: [MediatorModule],
  controllers: [AppController],
  providers: [TestNotificationHandler1, TestRequestHandler],
})
export class AppModule {}
