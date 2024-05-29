import { HttpException } from '@nestjs/common';

export class ProductDetailNotFoundException extends HttpException {
  constructor() {
    super('product-detail not found', 404);
  }
}

export class ProductDetailAlreadyExistException extends HttpException {
  constructor() {
    super('product-detail already exist', 400);
  }
}
