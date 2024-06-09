import { Order } from '../entities/order.entity';

export interface IOrderRepository {
  create(orderEntity: Order): Promise<Order>;
  findAll(): Promise<Array<Order>>;
  findById(id: number): Promise<Order>;
  update(orderEntity: Order): Promise<Order>;
  remove(id: number): Promise<Order>;
}
