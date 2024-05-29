import { Tag } from '../entities/tag.entity';
import { UpdateTagDto } from '../dto/update-tag.dto';
import { CreateTagDto } from '../dto/create-tag.dto';

export interface ITagRepository {
  create(entity: Partial<Tag>): Promise<Tag>;
  createEntity(dto: UpdateTagDto | CreateTagDto): Promise<Partial<Tag>>;
  findAll(): Promise<Tag[]>;
  findOne(id: number): Promise<Tag>;
  findOneByName(name: string): Promise<Tag>;
  update(entity: Partial<Tag>): Promise<Tag>;
  remove(entity: Tag): void;
}
