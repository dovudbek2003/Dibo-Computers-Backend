import { Module } from '@nestjs/common';
import { ProductTegService } from './product-teg.service';
import { ProductTagController } from './product-teg.controller';

@Module({
  controllers: [ProductTagController],
  providers: [ProductTegService],
})
export class ProductTegModule {}
