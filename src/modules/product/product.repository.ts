import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './entities/product.entity';
import { IProductRepository } from './interfaces/product.repository';

@Injectable()
export class ProductRepository implements IProductRepository {
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
  ) {}

  async delete(entity: Product): Promise<Product> {
    return await this.productRepository.remove(entity);
  }

  async create(entity: Product): Promise<Product> {
    const newProduct = this.productRepository.create(entity);
    await this.productRepository.save(newProduct);
    return newProduct;
  }
  async findAll(): Promise<Array<Product>> {
    return await this.productRepository.find();
  }
  async findByQuery(query: string): Promise<Array<Product>> {
    return this.productRepository
      .createQueryBuilder('product')
      .leftJoinAndSelect('product.detail', 'detail')
      .leftJoinAndSelect('product.brend', 'brend')
      .leftJoinAndSelect('product.tags', 'tags')
      .where('detail.model ILIKE :query', { query: `%${query}%` })
      .getMany();
  }

  async findWithPagination(
    page: number,
    limit: number,
    search?: string,
  ): Promise<[Product[], number]> {
    const queryBuilder = this.productRepository
      .createQueryBuilder('product')
      .leftJoinAndSelect('product.detail', 'detail')
      .leftJoinAndSelect('product.brend', 'brend')
      .leftJoinAndSelect('product.tags', 'tags');

    if (search) {
      queryBuilder.where('detail.model ILIKE :search', {
        search: `%${search}%`,
      });
    }

    queryBuilder.skip((page - 1) * limit).take(limit);

    const [data, total] = await queryBuilder.getManyAndCount();
    return [data, total];
  }

  async update(entity: Product): Promise<Product> {
    return await this.productRepository.save(entity);
  }

  async findById(id: number): Promise<Product | null> {
    return await this.productRepository.findOneBy({ id });
  }
  async findOneByDetailId(detailId: number): Promise<Product | null> {
    return await this.productRepository.findOneBy({ detailId });
  }
}
