import { Module } from '@nestjs/common';
import { AppController } from 'src/app.controller';
import { AppService } from 'src/app.service';
import { ContextModule } from 'src/context/context.module';
import { HttpModule } from 'src/http/http.module';

@Module({
  imports: [ContextModule, HttpModule.register({ injectToken: true })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
