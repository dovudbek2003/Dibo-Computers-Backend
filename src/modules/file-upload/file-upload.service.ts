import { HttpStatus, Inject, Injectable } from '@nestjs/common';
import { IFileUploadService } from './interface/file-upload.service.interface';
import { IFileUploadRepository } from './interface/file-upload.repository.interface';
import { CreateFileUploadDto } from './dto/create-file-upload.dto';
import { FileUpload } from './entities/file-upload.entity';
import { ResponseData } from 'src/lib/response-data';
import { FileNotFound } from './exception/tag.exception';
import { UpdateFileUploadDto } from './dto/update-file-upload.dto';

@Injectable()
export class FileUploadService implements IFileUploadService {
  constructor(
    @Inject('IFileUploadRepository')
    private readonly fileUploadRepository: IFileUploadRepository,
  ) {}

  async create(dto: CreateFileUploadDto): Promise<ResponseData<FileUpload>> {
    const entity = new FileUpload();
    Object.assign(entity, dto);

    const data = await this.fileUploadRepository.create(entity);
    return new ResponseData<FileUpload>(
      'FileUpload created successfully',
      HttpStatus.CREATED,
      data,
    );
  }

  async findAll(): Promise<ResponseData<FileUpload[]>> {
    const data = await this.fileUploadRepository.findAll();

    return new ResponseData<FileUpload[]>(
      'FileUploads found successfully',
      HttpStatus.OK,
      data,
    );
  }

  async findOne(id: number): Promise<ResponseData<FileUpload>> {
    const data = await this.fileUploadRepository.findOne(id);

    if (!data) {
      throw new FileNotFound();
    }

    return new ResponseData<FileUpload>(
      'FileUpload found successfully',
      HttpStatus.OK,
      data,
    );
  }

  async update(
    id: number,
    UpdateFileUploadDto: Partial<UpdateFileUploadDto>,
  ): Promise<ResponseData<FileUpload>> {
    const { data: foundFileUpload } = await this.findOne(id);

    const entity = Object.assign(foundFileUpload, UpdateFileUploadDto);

    const data = await this.fileUploadRepository.update(entity);

    return new ResponseData<FileUpload>(
      'FileUpload updated successfully',
      HttpStatus.OK,
      data,
    );
  }

  async remove(id: number): Promise<ResponseData<FileUpload>> {
    const { data: foundFileUpload } = await this.findOne(id);

    this.fileUploadRepository.remove(foundFileUpload);

    return new ResponseData<FileUpload>(
      'FileUpload deleted successfully',
      HttpStatus.OK,
      foundFileUpload,
    );
  }
}
