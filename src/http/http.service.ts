import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
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

  async get<T = any, R = AxiosResponse<T, any>, D = any>(url: string, config?: AxiosRequestConfig<D>): Promise<R> {
    try {
      return await axios.get<T, R, D>(url, this.genConfig<D>(config));
    } catch (err) {
      if (err.response) {
        const { data, status } = err.response;
        throw new HttpException(data, status);
      } else if (err.request) {
        throw new HttpException(err.toJSON(), HttpStatus.INTERNAL_SERVER_ERROR);
      } else {
        throw new HttpException(err.message, HttpStatus.INTERNAL_SERVER_ERROR);
      }
    }
  }
  async post<T = any, R = AxiosResponse<T>, D = any>(
    url: string,
    data?: D,
    config?: AxiosRequestConfig<D>,
  ): Promise<R> {
    try {
      return await axios.post<T, R, D>(url, data, this.genConfig<D>(config));
    } catch (err) {
      if (err.response) {
        const { data, status } = err.response;
        throw new HttpException(data, status);
      } else if (err.request) {
        throw new HttpException(err.toJSON(), HttpStatus.INTERNAL_SERVER_ERROR);
      } else {
        throw new HttpException(err.message, HttpStatus.INTERNAL_SERVER_ERROR);
      }
    }
  }
  async put<T = any, R = AxiosResponse<T>, D = any>(url: string, data?: D, config?: AxiosRequestConfig<D>): Promise<R> {
    try {
      return await axios.put<T, R, D>(url, data, this.genConfig<D>(config));
    } catch (err) {
      if (err.response) {
        const { data, status } = err.response;
        throw new HttpException(data, status);
      } else if (err.request) {
        throw new HttpException(err.toJSON(), HttpStatus.INTERNAL_SERVER_ERROR);
      } else {
        throw new HttpException(err.message, HttpStatus.INTERNAL_SERVER_ERROR);
      }
    }
  }
  async patch<T = any, R = AxiosResponse<T>, D = any>(
    url: string,
    data?: D,
    config?: AxiosRequestConfig<D>,
  ): Promise<R> {
    try {
      return await axios.patch<T, R, D>(url, data, this.genConfig<D>(config));
    } catch (err) {
      if (err.response) {
        const { data, status } = err.response;
        throw new HttpException(data, status);
      } else if (err.request) {
        throw new HttpException(err.toJSON(), HttpStatus.INTERNAL_SERVER_ERROR);
      } else {
        throw new HttpException(err.message, HttpStatus.INTERNAL_SERVER_ERROR);
      }
    }
  }
  async delete<T = any, R = AxiosResponse<T>, D = any>(url: string, config?: AxiosRequestConfig<D>): Promise<R> {
    try {
      return await axios.delete<T, R, D>(url, this.genConfig<D>(config));
    } catch (err) {
      if (err.response) {
        const { data, status } = err.response;
        throw new HttpException(data, status);
      } else if (err.request) {
        throw new HttpException(err.toJSON(), HttpStatus.INTERNAL_SERVER_ERROR);
      } else {
        throw new HttpException(err.message, HttpStatus.INTERNAL_SERVER_ERROR);
      }
    }
  }
}
