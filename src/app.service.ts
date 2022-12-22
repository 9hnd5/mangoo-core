import { Injectable } from '@nestjs/common';
import { BaseCommandHandler } from 'src/base/base.command-handler';
import { HttpService } from 'src/http/http.service';

@Injectable()
export class AppService extends BaseCommandHandler {
  constructor(private httpService: HttpService) {
    super();
  }
  async getHello() {
    const { data } = await this.httpService.get('http://localhost:3002/users');
    return data;
  }
}
