import { Module } from '@nestjs/common';
import { ProductDetailService } from './product-detail.service';
import { ProductDetailController } from './product-detail.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductDetail } from './entities/product-detail.entity';
import { ProductDetailRepository } from './product-detail.repository';
import { SharedModule } from '../shared/shared.module';

@Module({
  imports: [TypeOrmModule.forFeature([ProductDetail]), SharedModule],
  controllers: [ProductDetailController],
  providers: [
    { provide: 'IProductDetailService', useClass: ProductDetailService },
    { provide: 'IProductDetailRepository', useClass: ProductDetailRepository },
  ],
  exports: [
    { provide: 'IProductDetailService', useClass: ProductDetailService },
    { provide: 'IProductDetailRepository', useClass: ProductDetailRepository },
  ],
})
export class ProductDetailModule {}
