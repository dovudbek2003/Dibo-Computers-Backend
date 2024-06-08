import { Module } from '@nestjs/common';
import { FileUploadService } from './file-upload.service';
import { FileUploadController } from './file-upload.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FileUpload } from './entities/file-upload.entity';
import { ProductModule } from '../product/product.module';
import { FileUploadRepository } from './file-upload.repository';

@Module({
  imports: [TypeOrmModule.forFeature([FileUpload]), ProductModule],
  controllers: [FileUploadController],
  providers: [
    {
      provide: 'IFileUploadService',
      useClass: FileUploadService,
    },
    {
      provide: 'IFileUploadRepository',
      useClass: FileUploadRepository,
    },
  ],
})
export class FileUploadModule {}
