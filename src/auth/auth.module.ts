import { Global, Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { AuthorizeGuard } from 'src/auth/guards/authorize.guard';
import { HttpModule } from 'src/http/http.module';

@Global()
@Module({
  imports: [HttpModule.register({ injectToken: true })],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AuthorizeGuard,
    },
  ],
})
export class AuthModule {}
