import { Global, MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ContextMiddleware } from 'src/context/context.middleware';

@Global()
@Module({})
export class ContextModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(ContextMiddleware).forRoutes('*');
  }
}
