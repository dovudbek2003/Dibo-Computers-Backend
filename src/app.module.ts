import { Module } from '@nestjs/common';
import { AuthModule } from './modules/auth/auth.module';
import { UserModule } from './modules/user/user.module';
import { ProductModule } from './modules/product/product.module';
import { BrendModule } from './modules/brend/brend.module';
import { TegModule } from './modules/teg/teg.module';
import { ProductTegModule } from './modules/product-teg/product-teg.module';
import { ProductDetailModule } from './modules/product-detail/product-detail.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from './common/config/env.config';
import { User } from './modules/user/entities/user.entity';
import { Brend } from './modules/brend/entities/brend.entity';
import { Teg } from './modules/teg/entities/teg.entity';
import { Product } from './modules/product/entities/product.entity';
import { ProductTeg } from './modules/product-teg/entities/product-teg.entity';
import { ProductDetail } from './modules/product-detail/entities/product-detail.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: config.dbHost,
      port: config.dbPort,
      username: config.dbUsername,
      password: config.dbPassword,
      database: config.dbName,
      entities: [User, Brend, Teg, Product, ProductTeg, ProductDetail],
      synchronize: true,
    }),
    AuthModule,
    UserModule,
    ProductModule,
    BrendModule,
    TegModule,
    ProductTegModule,
    ProductDetailModule,
  ],
})
export class AppModule {}
