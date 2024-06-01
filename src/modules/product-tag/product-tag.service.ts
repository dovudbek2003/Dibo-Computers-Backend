import { HttpStatus, Inject, Injectable } from '@nestjs/common';
import { IProductTagRepository } from './interface/product-tag.repository.interface';
import { ResponseData } from 'src/lib/response-data';
import { CreateProductTagDto } from './dto/create-product-tag.dto';
import { ProductTag } from './entities/product-tag.entity';
import { ProductTagNotFound } from './exception/product-tag.exception';
import { UpdateProductTagDto } from './dto/update-product-tag.dto';

@Injectable()
export class ProductTagService {
  constructor(
    @Inject('IProductTagRepository')
    private readonly productTagRepository: IProductTagRepository,
  ) {}

  async create(
    CreateProductTagDto: CreateProductTagDto,
  ): Promise<ResponseData<ProductTag>> {
    const entity =
      await this.productTagRepository.createEntity(CreateProductTagDto);

    const data = await this.productTagRepository.create(entity);
    return new ResponseData<ProductTag>(
      'ProductTag created successfully',
      HttpStatus.CREATED,
      data,
    );
  }

  async findAll(): Promise<ResponseData<ProductTag[]>> {
    const data = await this.productTagRepository.findAll();

    return new ResponseData<ProductTag[]>(
      'ProductTags found successfully',
      HttpStatus.OK,
      data,
    );
  }

  async findOne(id: number): Promise<ResponseData<ProductTag>> {
    const data = await this.productTagRepository.findOne(id);

    if (!data) {
      throw new ProductTagNotFound();
    }

    return new ResponseData<ProductTag>(
      'ProductTag found successfully',
      HttpStatus.OK,
      data,
    );
  }

  async update(
    id: number,
    UpdateProductTagDto: Partial<UpdateProductTagDto>,
  ): Promise<ResponseData<ProductTag>> {
    const { data: foundProductTag } = await this.findOne(id);

    const entity = Object.assign(foundProductTag, UpdateProductTagDto);

    const data = await this.productTagRepository.update(entity);

    return new ResponseData<ProductTag>(
      'ProductTag updated successfully',
      HttpStatus.OK,
      data,
    );
  }

  async remove(id: number): Promise<ResponseData<ProductTag>> {
    const { data: foundProductTag } = await this.findOne(id);

    this.productTagRepository.remove(foundProductTag);

    return new ResponseData<ProductTag>(
      'ProductTag deleted successfully',
      HttpStatus.OK,
      foundProductTag,
    );
  }
}
