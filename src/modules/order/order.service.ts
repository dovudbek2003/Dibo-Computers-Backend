import { Inject, Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { IOrderService } from './interfaces/order.service';
import { IOrderRepository } from './interfaces/order.repository';
import { ResponseData } from 'src/lib/response-data';
import { Order } from './entities/order.entity';
import { Product } from '../product/entities/product.entity';
import { User } from '../user/entities/user.entity';
import { OrderNotFound } from './exception/order.exception';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Order')
@Injectable()
export class OrderService implements IOrderService {
  constructor(
    @Inject('IOrderRepository')
    private readonly orderRepository: IOrderRepository,
  ) {}

  // CREATE
  async create(
    createOrderDto: CreateOrderDto,
    foundProduct: Product,
    currentUser: User,
  ): Promise<ResponseData<Order>> {
    const newOrder = new Order();

    newOrder.count = createOrderDto.count;
    newOrder.productId = createOrderDto.productId;
    newOrder.userId = currentUser.id;
    newOrder.product = foundProduct;
    newOrder.user = currentUser;

    const createdOrder = await this.orderRepository.create(newOrder);

    return new ResponseData<Order>('create', 201, createdOrder);
  }

  // READ
  async findAll(): Promise<ResponseData<Order[]>> {
    const orders = await this.orderRepository.findAll();
    return new ResponseData<Order[]>(
      'All orders retrieved successfully',
      200,
      orders,
    );
  }
  async findOne(id: number): Promise<ResponseData<Order>> {
    const order = await this.orderRepository.findById(id);
    if (!order) {
      throw new OrderNotFound();
    }

    return new ResponseData<Order>('Order retrieved successfully', 200, order);
  }

  // UPDATE
  async update(
    id: number,
    updateOrderDto: UpdateOrderDto,
  ): Promise<ResponseData<Order>> {
    throw new Error('Method not implemented.');
  }

  // DELETE
  async remove(id: number): Promise<ResponseData<Order>> {
    await this.findOne(id);
    const deletedOrder = await this.orderRepository.remove(id);

    return new ResponseData<Order>(
      'Order deleted successfully',
      200,
      deletedOrder,
    );
  }
}
