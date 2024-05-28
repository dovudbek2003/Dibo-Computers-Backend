import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IProductDetailRepository } from './interfaces/product-detail.repository';
import { ProductDetail } from './entities/product-detail.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductDetailRepository implements IProductDetailRepository {
  constructor(
    @InjectRepository(ProductDetail)
    private productRepository: Repository<ProductDetail>,
  ) {}

  async delete(entity: ProductDetail): Promise<ProductDetail> {
    return await this.productRepository.remove(entity);
  }

  async create(entity: ProductDetail): Promise<ProductDetail> {
    const newProductDetail = this.productRepository.create(entity);
    await this.productRepository.save(newProductDetail);
    return newProductDetail;
  }
  async findAll(): Promise<Array<ProductDetail>> {
    return await this.productRepository.find();
  }

  async findByQuery(query: string): Promise<Array<ProductDetail>> {
    // return await this.productRepository.find({ where: { name: query + '%' } });
    return this.productRepository
      .createQueryBuilder()
      .where('products.name ILIKE :letter', { letter: `${query}%` })
      .getMany();
  }
  async update(entity: ProductDetail): Promise<ProductDetail> {
    return await this.productRepository.save(entity);
  }

  async findById(id: number): Promise<ProductDetail | null> {
    return await this.productRepository.findOneBy({ id });
  }
  // async findOneByName(name: string): Promise<ProductDetail | null> {
  //   return await this.productRepository.findOneBy({ name });
  // }
}
