import { Module } from '@nestjs/common';
import { ProductTegService } from './product-tag.service';
import { ProductTagController } from './product-tag.controller';

@Module({
  controllers: [ProductTagController],
  providers: [ProductTegService],
})
export class ProductTegModule {}
