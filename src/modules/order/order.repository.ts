import { InjectRepository } from '@nestjs/typeorm';
import { IOrderRepository } from './interfaces/order.repository';
import { Order } from './entities/order.entity';
import { DataSource, Repository } from 'typeorm';
import { Product } from '../product/entities/product.entity';
import { ProductDetail } from '../product-detail/entities/product-detail.entity';

export class OrderRepository implements IOrderRepository {
  constructor(
    @InjectRepository(Order) private orderRepository: Repository<Order>,
    private dataSource: DataSource,
  ) {}

  //   CREATE
  async create(orderEntity: Order): Promise<Order> {
    const queryRunner = this.dataSource.createQueryRunner();

    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      const productRepository = queryRunner.manager.getRepository(Product);
      const productDetailRepository =
        queryRunner.manager.getRepository(ProductDetail);

      const foundProduct = await productRepository.findOneBy({
        id: orderEntity.productId,
      });

      const foundProductDetail = await productDetailRepository.findOneBy({
        id: foundProduct.detailId,
      });

      foundProductDetail.count = foundProductDetail.count - orderEntity.count;

      await productDetailRepository.save(foundProductDetail);

      const savedOrder = await this.orderRepository.save(orderEntity);
      await queryRunner.commitTransaction();
      return savedOrder;
    } catch (err) {
      await queryRunner.rollbackTransaction();
    } finally {
      await queryRunner.release();
    }
  }

  //   READ
  async findAll(): Promise<Order[]> {
    return await this.orderRepository.find();
  }
  async findById(id: number): Promise<Order> {
    return await this.orderRepository.findOneBy({ id });
  }

  //   UPDATE
  async update(orderEntity: Order): Promise<Order> {
    return await this.orderRepository.save(orderEntity);
  }

  //   REMOVE
  async remove(id: number): Promise<Order> {
    const foundOrder = await this.findById(id);
    await this.orderRepository.delete(id);
    return foundOrder;
  }
}
