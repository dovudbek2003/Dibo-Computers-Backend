import { Tag } from '../entities/tag.entity';
import { UpdateTagDto } from '../dto/update-tag.dto';
import { CreateTagDto } from '../dto/create-tag.dto';

export interface ITagRepository {
  create(CreateTagDto: Partial<Tag>): Promise<Tag>;
  createEntity(dto: UpdateTagDto | CreateTagDto): Promise<Partial<Tag>>;
  findAll(): Promise<Tag[]>;
  findOne(id: number): Promise<Tag>;
  update(id: number, UpdateTagDto: Partial<Tag>): Promise<Tag>;
  remove(id: number): Promise<Tag>;
}
