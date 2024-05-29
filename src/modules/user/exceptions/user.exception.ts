import { HttpException } from '@nestjs/common';

export class UserNotFound extends HttpException {
  constructor() {
    super('User Not Found', 404);
  }
}

export class UserAlreadyExist extends HttpException {
  constructor() {
    super('User Already Exist', 400);
  }
}
