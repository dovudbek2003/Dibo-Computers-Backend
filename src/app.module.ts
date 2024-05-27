import { Module } from '@nestjs/common';
import { AuthModule } from './modules/auth/auth.module';
import { UserModule } from './modules/user/user.module';
import { ProductModule } from './modules/product/product.module';
import { BrendModule } from './modules/brend/brend.module';
import { TegModule } from './modules/teg/teg.module';
import { ProductTegModule } from './modules/product-teg/product-teg.module';
import { ProductDetailModule } from './modules/product-detail/product-detail.module';

@Module({
  imports: [AuthModule, UserModule, ProductModule, BrendModule, TegModule, ProductTegModule, ProductDetailModule]
})
export class AppModule {}
