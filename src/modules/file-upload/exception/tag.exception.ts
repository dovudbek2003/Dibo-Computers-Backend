import { HttpException } from '@nestjs/common';

export class FileNotFound extends HttpException {
  constructor() {
    super('File not found', 404);
  }
}

