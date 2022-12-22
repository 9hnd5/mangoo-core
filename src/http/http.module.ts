import { DynamicModule, Module } from '@nestjs/common';
import {
  HttpModuleClass,
  HTTP_ASYNC_OPTIONS_TYPE, HTTP_OPTIONS_TYPE
} from 'src/http/http.module-definition';
import { HttpService } from 'src/http/http.service';

@Module({
  providers: [HttpService],
  exports: [HttpService],
})
export class HttpModule extends HttpModuleClass {
  static register(options: typeof HTTP_OPTIONS_TYPE): DynamicModule {
    return {
      ...super.register(options),
    };
  }

  static registerAsync(options: typeof HTTP_ASYNC_OPTIONS_TYPE): DynamicModule {
    return {
      ...super.registerAsync(options),
    };
  }
}
