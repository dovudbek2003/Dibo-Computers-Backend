import { HttpStatus, Inject, Injectable } from '@nestjs/common';
import { CreateTagDto } from './dto/create-tag.dto';
import { UpdateTagDto } from './dto/update-tag.dto';
import { ResponseData } from 'src/lib/response-data';
import { Tag } from './entities/tag.entity';
import { ITagRepository } from './interface/tag.repository.interface';
import { ITagService } from './interface/tag.service.interface';
import { TagAlreadyExist, TagNotFound } from './exception/tag.exception';

@Injectable()
export class TagService implements ITagService {
  constructor(
    @Inject('ITagRepository') private readonly tagRepository: ITagRepository,
  ) {}

  async create(CreateTagDto: CreateTagDto): Promise<ResponseData<Tag>> {
    const entity = await this.tagRepository.createEntity(CreateTagDto);

    const foundTag = await this.tagRepository.findOneByName(CreateTagDto.name);

    if (foundTag) {
      throw new TagAlreadyExist();
    }

    const data = await this.tagRepository.create(entity);
    return new ResponseData<Tag>(
      'Tag created successfully',
      HttpStatus.CREATED,
      data,
    );
  }

  async findAll(): Promise<ResponseData<Tag[]>> {
    const data = await this.tagRepository.findAll();

    return new ResponseData<Tag[]>(
      'Tags found successfully',
      HttpStatus.OK,
      data,
    );
  }

  async findOne(id: number): Promise<ResponseData<Tag>> {
    const data = await this.tagRepository.findOne(id);

    if (!data) {
      throw new TagNotFound();
    }

    return new ResponseData<Tag>('Tag found successfully', HttpStatus.OK, data);
  }

  async update(
    id: number,
    UpdateTagDto: Partial<UpdateTagDto>,
  ): Promise<ResponseData<Tag>> {
    const { data: foundTag } = await this.findOne(id);

    const entity = Object.assign(foundTag, UpdateTagDto);

    const data = await this.tagRepository.update(entity);

    return new ResponseData<Tag>(
      'Tag updated successfully',
      HttpStatus.OK,
      data,
    );
  }

  async remove(id: number): Promise<ResponseData<Tag>> {
    const { data: foundTag } = await this.findOne(id);

    this.tagRepository.remove(foundTag);

    return new ResponseData<Tag>(
      'Tag deleted successfully',
      HttpStatus.OK,
      foundTag,
    );
  }
}
