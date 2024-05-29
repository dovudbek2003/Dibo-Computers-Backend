import { ResponseData } from 'src/lib/response-data';
import { Tag } from '../entities/tag.entity';
import { CreateTagDto } from '../dto/create-tag.dto';
import { UpdateTagDto } from '../dto/update-tag.dto';

export interface ITagService {
  create(CreateTagDto: CreateTagDto): Promise<ResponseData<Tag>>;
  findAll(): Promise<ResponseData<Tag[]>>;
  findOne(id: number): Promise<ResponseData<Tag>>;
  update(
    id: number,
    UpdateTagDto: Partial<UpdateTagDto>,
  ): Promise<ResponseData<Tag>>;
  remove(id: number): Promise<ResponseData<Tag>>;
}
