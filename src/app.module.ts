import { Module } from '@nestjs/common';
import { AuthModule } from './modules/auth/auth.module';
import { UserModule } from './modules/user/user.module';
import { ProductModule } from './modules/product/product.module';
import { BrendModule } from './modules/brend/brend.module';
import { TagModule } from './modules/tag/tag.module';
import { ProductTagModule } from './modules/product-tag/product-tag.module';
import { ProductDetailModule } from './modules/product-detail/product-detail.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from './common/config/env.config';
import { User } from './modules/user/entities/user.entity';
import { Brend } from './modules/brend/entities/brend.entity';
import { Tag } from './modules/tag/entities/tag.entity';
import { Product } from './modules/product/entities/product.entity';
import { ProductDetail } from './modules/product-detail/entities/product-detail.entity';
import { ProductTag } from './modules/product-tag/entities/product-tag.entity';
import { FileUploadModule } from './modules/file-upload/file-upload.module';
import { FileUpload } from './modules/file-upload/entities/file-upload.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: config.dbHost,
      port: config.dbPort,
      username: config.dbUsername,
      password: config.dbPassword,
      database: config.dbName,
      entities: [
        User,
        Brend,
        Tag,
        Product,
        ProductTag,
        ProductDetail,
        FileUpload,
      ],
      synchronize: true,
    }),
    AuthModule,
    UserModule,
    ProductModule,
    BrendModule,
    TagModule,
    ProductTagModule,
    ProductDetailModule,
    FileUploadModule,
  ],
})
export class AppModule {}
