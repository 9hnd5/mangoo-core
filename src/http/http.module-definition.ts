import { ConfigurableModuleBuilder } from '@nestjs/common';
export type HttpModuleOptions = {
  injectToken?: boolean;
};
export const {
  ConfigurableModuleClass: HttpModuleClass,
  MODULE_OPTIONS_TOKEN: HTTP_MODULE_OPTIONS_TOKEN,
  ASYNC_OPTIONS_TYPE: HTTP_ASYNC_OPTIONS_TYPE,
  OPTIONS_TYPE: HTTP_OPTIONS_TYPE,
} = new ConfigurableModuleBuilder<HttpModuleOptions>().build();
