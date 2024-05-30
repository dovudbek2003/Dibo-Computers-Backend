import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IProductDetailRepository } from './interfaces/product-detail.repository';
import { ProductDetail } from './entities/product-detail.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductDetailRepository implements IProductDetailRepository {
  constructor(
    @InjectRepository(ProductDetail)
    private productDetailRepository: Repository<ProductDetail>,
  ) {}

  async delete(entity: ProductDetail): Promise<ProductDetail> {
    return await this.productDetailRepository.remove(entity);
  }

  async create(entity: ProductDetail): Promise<ProductDetail> {
    const newProductDetail = this.productDetailRepository.create(entity);
    await this.productDetailRepository.save(newProductDetail);
    return newProductDetail;
  }
  async findAll(): Promise<Array<ProductDetail>> {
    return await this.productDetailRepository.find();
  }

  async update(entity: ProductDetail): Promise<ProductDetail> {
    return await this.productDetailRepository.save(entity);
  }

  async findById(id: number): Promise<ProductDetail | null> {
    return await this.productDetailRepository.findOneBy({ id });
  }
  // async findOneByName(name: string): Promise<ProductDetail | null> {
  //   return await this.productDetailRepository.findOneBy({ name });
  // }
}
