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
<<<<<<< HEAD
import { FileUploadModule } from './modules/file-upload/file-upload.module';
import { FileUpload } from './modules/file-upload/entities/file-upload.entity';
=======
import { OrderModule } from './modules/order/order.module';
import { Order } from './modules/order/entities/order.entity';
>>>>>>> 9c71bb8f1e212cda793fa5cd8cb7d5b15341b694

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: config.dbHost,
      port: config.dbPort,
      username: config.dbUsername,
      password: config.dbPassword,
      database: config.dbName,
<<<<<<< HEAD
      entities: [
        User,
        Brend,
        Tag,
        Product,
        ProductTag,
        ProductDetail,
        FileUpload,
      ],
=======
      entities: [User, Brend, Tag, Product, ProductTag, ProductDetail, Order],
>>>>>>> 9c71bb8f1e212cda793fa5cd8cb7d5b15341b694
      synchronize: true,
    }),
    AuthModule,
    UserModule,
    ProductModule,
    BrendModule,
    TagModule,
    ProductTagModule,
    ProductDetailModule,
<<<<<<< HEAD
    FileUploadModule,
=======
    OrderModule,
>>>>>>> 9c71bb8f1e212cda793fa5cd8cb7d5b15341b694
  ],
})
export class AppModule {}
