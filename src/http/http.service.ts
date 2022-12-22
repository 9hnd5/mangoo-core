import { Inject, Injectable } from '@nestjs/common';
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { Context } from 'src/context/context.model';
import { HttpModuleOptions, HTTP_MODULE_OPTIONS_TOKEN } from 'src/http/http.module-definition';

@Injectable()
export class HttpService {
  constructor(@Inject(HTTP_MODULE_OPTIONS_TOKEN) private options: HttpModuleOptions = { injectToken: false }) {}

  genConfig<D = any>(config?: AxiosRequestConfig<D>): AxiosRequestConfig<D> | undefined {
    if (this.options.injectToken) {
      const ctx = Context.get();
      if (!ctx) throw new Error('Please import ContextModule');
      const token = ctx.request.headers['authorization'];
      if (!token) throw new Error('Token is required');
      return { ...config, headers: { authorization: token } };
    }
    return config;
  }

  get<T = any, R = AxiosResponse<T>, D = any>(url: string, config?: AxiosRequestConfig<D>): Promise<R> {
    return axios.get(url, this.genConfig<D>(config));
  }
  post<T = any, R = AxiosResponse<T>, D = any>(url: string, data?: D, config?: AxiosRequestConfig<D>): Promise<R> {
    return axios.post(url, data, this.genConfig<D>(config));
  }
  put<T = any, R = AxiosResponse<T>, D = any>(url: string, data?: D, config?: AxiosRequestConfig<D>): Promise<R> {
    return axios.put(url, data, this.genConfig<D>(config));
  }
  patch<T = any, R = AxiosResponse<T>, D = any>(url: string, data?: D, config?: AxiosRequestConfig<D>): Promise<R> {
    return axios.patch(url, data, this.genConfig<D>(config));
  }
  delete<T = any, R = AxiosResponse<T>, D = any>(url: string, config?: AxiosRequestConfig<D>): Promise<R> {
    return axios.delete(url, this.genConfig<D>(config));
  }
}
