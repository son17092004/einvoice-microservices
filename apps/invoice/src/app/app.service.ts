import { Injectable } from '@nestjs/common';
import { PORT } from '@common/constants';
@Injectable()
export class AppService {
  constructor() {
    const x = 1;
    console.log(PORT);
  }
  getData(): { message: string } {
    return { message: 'Hello API' };
  }
}
