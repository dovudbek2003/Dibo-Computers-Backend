import { HttpException } from '@nestjs/common';

export class ProductNotFoundException extends HttpException {
  constructor() {
    super('product not found', 404);
  }
}

export class ProductAlreadyExistException extends HttpException {
  constructor() {
    super('product already exist', 400);
  }
}

export class DetailIdNotFoundException extends HttpException {
  constructor() {
    super('DetailId not found', 404);
  }
}

export class BrandIdNotFoundException extends HttpException {
  constructor() {
    super('BrandId not found', 404);
  }
}
