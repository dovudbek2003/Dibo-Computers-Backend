import { HttpException } from '@nestjs/common';

export class ProductTagNotFound extends HttpException {
  constructor() {
    super('ProductTag not found', 404);
  }
}

export class ProductTagAlreadyExist extends HttpException {
  constructor() {
    super('ProductTag already Exist', 400);
  }
}
