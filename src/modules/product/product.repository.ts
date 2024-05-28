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

  // async findByQuery(query: string): Promise<Array<Product>> {
  //   // return await this.productRepository.find({ where: { name: query + '%' } });
  //   return this.productRepository
  //     .createQueryBuilder()
  //     .where('products.name ILIKE :letter', { letter: `${query}%` })
  //     .getMany();
  // }
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
