import { HttpException } from '@nestjs/common';

export class OrderIsLimited extends HttpException {
  constructor() {
    super('the number of orders is limited', 400);
  }
}

export class OrderNotFound extends HttpException {
  constructor() {
    super('Order not found', 404);
  }
}
