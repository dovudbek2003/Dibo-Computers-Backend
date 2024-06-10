import { HttpException, HttpStatus } from '@nestjs/common';

export class FileTypeException extends HttpException {
  constructor(fileType: string) {
    super('File type expected image instead of ' + fileType, HttpStatus.BAD_REQUEST);
  }
}