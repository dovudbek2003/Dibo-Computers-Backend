import { CreateFileUploadDto } from '../dto/create-file-upload.dto';
import { UpdateFileUploadDto } from '../dto/update-file-upload.dto';
import { FileUpload } from '../entities/file-upload.entity';

export interface IFileUploadRepository {
  create(fileUpload: FileUpload): Promise<FileUpload>;
  findAll(): Promise<FileUpload[]>;
  findOne(id: number): Promise<FileUpload | undefined>;
  update(fileUpload: FileUpload): Promise<FileUpload>;
  remove(fileUpload: FileUpload): Promise<FileUpload>;
}
