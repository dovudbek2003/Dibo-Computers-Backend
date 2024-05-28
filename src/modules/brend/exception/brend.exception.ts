import { HttpException } from '@nestjs/common';

export class BrendNotFound extends HttpException {
  constructor() {
    super('brend not found', 404);
  }
}

export class BrendAlreadyExist extends HttpException {
  constructor() {
    super('Brand Already Exist', 400);
  }
}
