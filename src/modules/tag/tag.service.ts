import { HttpStatus, Inject, Injectable } from '@nestjs/common';
import { CreateTagDto } from './dto/create-tag.dto';
import { UpdateTagDto } from './dto/update-tag.dto';
import { ResponseData } from 'src/lib/response-data';
import { Tag } from './entities/tag.entity';
import { ITagRepository } from './interface/tag.repository.interface';
import { ITagService } from './interface/tag.service.interface';

@Injectable()
export class TagService implements ITagService {
  constructor(
    @Inject('ITagRepository') private readonly tagRepository: ITagRepository,
  ) {}

  async create(
    CreateTagDto: Partial<CreateTagDto>,
  ): Promise<ResponseData<Tag>> {
    const entity = await this.tagRepository.createEntity(CreateTagDto);

    const data = await this.tagRepository.create(entity);
    return new ResponseData<Tag>(
      'Tag created successfully',
      HttpStatus.CREATED,
      data,
    );
  }
  findAll(): Promise<ResponseData<Tag[]>> {
    throw new Error('Method not implemented.');
  }
  findOne(id: number): Promise<ResponseData<Tag>> {
    throw new Error('Method not implemented.');
  }
  update(
    id: number,
    UpdateTagDto: Partial<UpdateTagDto>,
  ): Promise<ResponseData<Tag>> {
    throw new Error('Method not implemented.');
  }
  remove(id: number): Promise<ResponseData<Tag>> {
    throw new Error('Method not implemented.');
  }
}
