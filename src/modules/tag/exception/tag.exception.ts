import { HttpException } from '@nestjs/common';

export class TagNotFound extends HttpException {
  constructor() {
    super('Tag not found', 404);
  }
}

export class TagAlreadyExist extends HttpException {
  constructor() {
    super('Tag Already Exist', 400);
  }
}
