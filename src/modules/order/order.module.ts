import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { OrderRepository } from './order.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Order } from './entities/order.entity';
import { ProductModule } from '../product/product.module';
import { ProductDetailModule } from '../product-detail/product-detail.module';
import { UserModule } from '../user/user.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Order]),
    ProductModule,
    ProductDetailModule,
    UserModule,
  ],
  controllers: [OrderController],
  providers: [
    { provide: 'IOrderService', useClass: OrderService },
    { provide: 'IOrderRepository', useClass: OrderRepository },
  ],
})
export class OrderModule {}
