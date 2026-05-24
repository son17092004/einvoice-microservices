import { Injectable } from '@nestjs/common';
import { PORT } from '@common/constants';
@Injectable()
export class AppService {
  constructor() {
    console.log(PORT);
  }
  getData(): { message: string } {
    return { message: 'Hello API' };
  }
}
