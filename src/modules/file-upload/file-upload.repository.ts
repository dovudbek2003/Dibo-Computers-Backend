import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { IFileUploadRepository } from './interface/file-upload.repository.interface';
import { FileUpload } from './entities/file-upload.entity';

@Injectable()
export class FileUploadRepository implements IFileUploadRepository {
  constructor(
    @InjectRepository(FileUpload)
    private fileUploadRepository: Repository<FileUpload>,
  ) {}
  async create(fileUpload: FileUpload): Promise<FileUpload> {
    return this.fileUploadRepository.save(fileUpload);
  }

  async findAll(): Promise<FileUpload[]> {
    return this.fileUploadRepository.find();
  }

  async findOne(id: number): Promise<FileUpload | undefined> {
    return await this.fileUploadRepository.findOne({ where: { id } });
  }

  async update(fileUpload: FileUpload): Promise<FileUpload> {
    return this.fileUploadRepository.save(fileUpload);
  }

  async remove(fileUpload: FileUpload): Promise<FileUpload> {
    return await this.fileUploadRepository.remove(fileUpload);
  }
}
