import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { ProductRepository } from './product.repository';
import { Product } from './entities/product.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductDetailModule } from '../product-detail/product-detail.module';
import { BrendModule } from '../brend/brend.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Product]),
    ProductDetailModule,
    BrendModule,
  ],
  controllers: [ProductController],
  providers: [
    { provide: 'IProductService', useClass: ProductService },
    { provide: 'IProductRepository', useClass: ProductRepository },
  ],
})
export class ProductModule {}
