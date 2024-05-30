import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { IProductTagRepository } from './interface/product-tag.repository.interface';
import { ProductTag } from './entities/product-tag.entity';
import { CreateProductTagDto } from './dto/create-product-tag.dto';
import { UpdateProductTagDto } from './dto/update-product-tag.dto';

@Injectable()
export class ProductTagRepository implements IProductTagRepository {
  constructor(
    @InjectRepository(ProductTag)
    private ProductTagRepository: Repository<ProductTag>,
  ) {}
  create(entity: Partial<ProductTag>): Promise<ProductTag> {
    return this.ProductTagRepository.save(entity);
  }
  async createEntity(
    dto: CreateProductTagDto | UpdateProductTagDto,
  ): Promise<Partial<ProductTag>> {
    return this.ProductTagRepository.create(dto);
  }

  async findAll(): Promise<ProductTag[]> {
    return await this.ProductTagRepository.find();
  }

  async findOne(id: number): Promise<ProductTag> {
    return await this.ProductTagRepository.findOneBy({ id });
  }

  async update(UpdateProductTagDto: Partial<ProductTag>): Promise<ProductTag> {
    return await this.ProductTagRepository.save(UpdateProductTagDto);
  }

  async remove(entity: ProductTag): Promise<void> {
    await this.ProductTagRepository.delete(entity.id);
  }
}
