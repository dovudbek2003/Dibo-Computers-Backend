import { ResponseData } from 'src/lib/response-data';
import { Order } from '../entities/order.entity';
import { CreateOrderDto } from '../dto/create-order.dto';
import { UpdateOrderDto } from '../dto/update-order.dto';
import { Product } from 'src/modules/product/entities/product.entity';
import { User } from 'src/modules/user/entities/user.entity';

export interface IOrderService {
  create(
    createOrderDto: CreateOrderDto,
    foundProduct: Product,
    currentUser: User
  ): Promise<ResponseData<Order>>;

  findAll(): Promise<ResponseData<Order[]>>;

  findOne(id: number): Promise<ResponseData<Order>>;

  update(
    id: number,
    updateOrderDto: UpdateOrderDto,
  ): Promise<ResponseData<Order>>;

  remove(id: number): Promise<ResponseData<Order>>;
}
