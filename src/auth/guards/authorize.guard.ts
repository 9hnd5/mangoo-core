import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Request } from 'express';
import { HEADER_KEY } from 'src/auth/auth.const';
import { ROLE_KEY } from 'src/auth/decorators/authorize.decorator';
import { HttpService } from 'src/http/http.service';

@Injectable()
export class AuthorizeGuard implements CanActivate {
  constructor(private reflector: Reflector, private httpService: HttpService) {}

  async auth(token?: string, role?: string) {

    
    const { data } = await this.httpService.post(
      'http://localhost:3002/users/check',
      { role: role },
      {
        headers: {
          [HEADER_KEY.AUTHORIZATION]: token,
        },
      },
    );
    console.log("aa", data);
    return data;
  }

  async canActivate(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest() as Request;
    const role = this.reflector.get<string | null>(ROLE_KEY, context.getHandler());
    if (!role) return true;
    const token = request.headers[HEADER_KEY.AUTHORIZATION] as string | undefined;
    if (!token) throw new UnauthorizedException();
    const data = await this.auth(token, role);
    if (!data) throw new UnauthorizedException();
    request.user = data;
    return true;
  }
}
