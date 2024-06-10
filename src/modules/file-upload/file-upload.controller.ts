/* eslint-disable prettier/prettier */
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UploadedFiles,
  Inject,
} from '@nestjs/common';
import { UpdateFileUploadDto } from './dto/update-file-upload.dto';
import { AnyFilesInterceptor } from '@nestjs/platform-express';
import { ApiBody, ApiConsumes, ApiTags } from '@nestjs/swagger';
import { fileOption } from 'src/lib/fileStorage';
import * as fs from 'fs';
import { IFileUploadService } from './interface/file-upload.service.interface';
import { IProductRepository } from '../product/interfaces/product.repository';
import { ProductNotFoundException } from '../product/exception/product.exception';

@ApiTags('File-Upload-service')
@Controller('file-upload')
export class FileUploadController {
  constructor(
    @Inject('IFileUploadService')
    private readonly fileUploadService: IFileUploadService,
    @Inject('IProductRepository')
    private readonly productRepository: IProductRepository,
  ) {}

  @Post('upload')
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        files: {
          type: 'array',
          items: { type: 'string', format: 'binary' },
        },
        product: {
          type: 'number',
          nullable: true,
        },
      },
    },
  })
  @UseInterceptors(AnyFilesInterceptor(fileOption))
  async uploadFile(
    @UploadedFiles() files: Array<Express.Multer.File>,
    @Body() dto: { product: number },
  ) {
    const foundProduct = await this.productRepository.findById(+dto.product);

    files.forEach((files) => {
      if (!foundProduct) {
        fs.unlinkSync(files.path);
        throw new ProductNotFoundException();
      }
      this.fileUploadService.create({
        url: files.path,
        mimetype: files.mimetype,
        size: files.size,
        product: +dto.product,
      });
    });
  }

  @Get()
  findAll() {
    return this.fileUploadService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.fileUploadService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateFileUploadDto: UpdateFileUploadDto,
  ) {
    return this.fileUploadService.update(+id, updateFileUploadDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.fileUploadService.remove(+id);
  }
}
