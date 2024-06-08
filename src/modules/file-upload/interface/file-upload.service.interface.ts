import { ResponseData } from 'src/lib/response-data';
import { CreateFileUploadDto } from '../dto/create-file-upload.dto';
import { FileUpload } from '../entities/file-upload.entity';
import { UpdateFileUploadDto } from '../dto/update-file-upload.dto';

export interface IFileUploadService {
  create(
    CreateFileUploadDto: CreateFileUploadDto,
  ): Promise<ResponseData<FileUpload>>;
  findAll(): Promise<ResponseData<FileUpload[]>>;
  findOne(id: number): Promise<ResponseData<FileUpload>>;
  update(
    id: number,
    UpdateFileUploadDto: Partial<UpdateFileUploadDto>,
  ): Promise<ResponseData<FileUpload>>;
  remove(id: number): Promise<ResponseData<FileUpload>>;
}
