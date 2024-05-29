import { HttpException } from '@nestjs/common';

export class LoginOrPasswordWrong extends HttpException {
  constructor() {
    super('Login or Password Wrong', 400);
  }
}
