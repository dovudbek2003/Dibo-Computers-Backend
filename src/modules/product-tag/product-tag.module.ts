import { Module } from '@nestjs/common';
import { ProductTagService } from './product-tag.service';
import { ProductTagController } from './product-tag.controller';
import { ProductTagRepository } from './product-tag.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductTag } from './entities/product-tag.entity';
import { ProductService } from '../product/product.service';
import { ProductRepository } from '../product/product.repository';
import { Product } from '../product/entities/product.entity';
import { TagService } from '../tag/tag.service';
import { TagRepository } from '../tag/tag.repository';
import { Tag } from '../tag/entities/tag.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ProductTag, Product, Tag])],

  controllers: [ProductTagController],
  providers: [
    { provide: 'IProductTagService', useClass: ProductTagService },
    { provide: 'IProductTagRepository', useClass: ProductTagRepository },
    { provide: 'IProductService', useClass: ProductService },
    { provide: 'IProductRepository', useClass: ProductRepository },
    { provide: 'ITagService', useClass: TagService },
    { provide: 'ITagRepository', useClass: TagRepository },
  ],
})
export class ProductTagModule {}
