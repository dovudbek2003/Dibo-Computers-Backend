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
  create(CreateTagDto: Partial<Tag>): Promise<Tag> {
    throw new Error('Method not implemented.');
  }
  createEntity(dto: CreateTagDto | UpdateTagDto): Promise<Partial<Tag>> {
    throw new Error('Method not implemented.');
  }
  findAll(): Promise<Tag[]> {
    throw new Error('Method not implemented.');
  }
  findOne(id: number): Promise<Tag> {
    throw new Error('Method not implemented.');
  }
  update(id: number, UpdateTagDto: Partial<Tag>): Promise<Tag> {
    throw new Error('Method not implemented.');
  }
  remove(id: number): Promise<Tag> {
    throw new Error('Method not implemented.');
  }
}
