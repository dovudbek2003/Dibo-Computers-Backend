import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UpdateTagDto } from './dto/update-tag.dto';
import { ITagRepository } from './interface/tag.repository.interface';
import { CreateTagDto } from './dto/create-tag.dto';
import { Tag } from './entities/tag.entity';

@Injectable()
export class TagRepository implements ITagRepository {
  constructor(
    @InjectRepository(Tag)
    private tagRepository: Repository<Tag>,
  ) {}
  create(entity: Partial<Tag>): Promise<Tag> {
    return this.tagRepository.save(entity);
  }
  async createEntity(dto: CreateTagDto | UpdateTagDto): Promise<Partial<Tag>> {
    return this.tagRepository.create(dto);
  }

  async findAll(): Promise<Tag[]> {
    return await this.tagRepository.find();
  }

  async findOne(id: number): Promise<Tag> {
    return await this.tagRepository.findOneBy({ id });
  }

  async findOneByName(name: string): Promise<Tag> {
    return await this.tagRepository.findOneBy({ name });
  }

  async update(UpdateTagDto: Partial<Tag>): Promise<Tag> {
    return await this.tagRepository.save(UpdateTagDto);
  }

  async remove(entity: Tag): Promise<void> {
    await this.tagRepository.delete(entity.id);
  }
}
