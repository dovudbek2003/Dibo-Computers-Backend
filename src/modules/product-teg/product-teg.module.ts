import { Module } from '@nestjs/common';
import { ProductTegService } from './product-teg.service';
import { ProductTegController } from './product-teg.controller';

@Module({
  controllers: [ProductTegController],
  providers: [ProductTegService],
})
export class ProductTegModule {}
