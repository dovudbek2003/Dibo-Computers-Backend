import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Inject,
  UseGuards,
} from '@nestjs/common';
import { OrderService } from './order.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { ProductService } from '../product/product.service';
import { ProductDetailService } from '../product-detail/product-detail.service';
import { OrderIsLimited } from './exception/order.exception';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '../shared/guards/auth.guard';
import { RolesGuard } from '../shared/guards/roles.guard';
import { Roles } from 'src/common/decorator/role.decorator';
import { Role } from 'src/common/enums/role.enum';
import { UserDecorator } from 'src/common/decorator/user.decorator';
import { User } from '../user/entities/user.entity';

@ApiTags('Order')
@Controller('order')
export class OrderController {
  constructor(
    @Inject('IOrderService') private readonly orderService: OrderService,
    @Inject('IProductService') private readonly productService: ProductService,
    @Inject('IProductDetailService')
    private readonly productDetailService: ProductDetailService,
  ) {}

  @ApiBearerAuth()
  @UseGuards(AuthGuard, RolesGuard)
  @Roles(Role.USER, Role.ADMIN)
  @Post()
  async create(
    @Body() createOrderDto: CreateOrderDto,
    @UserDecorator() currentUser: User,
  ) {
    const products = createOrderDto.products;

    for (let index = 0; index < products.length; index++) {
      const productId = products[index].productId;
      const productCount = products[index].productCount;

      const { data: foundProduct } =
        await this.productService.findOne(productId);
      const { data: foundProductDetail } =
        await this.productDetailService.findOne(foundProduct.detailId);

      const isInt = foundProductDetail.count - productCount;
      if (isInt < 0) {
        throw new OrderIsLimited();
      }
    }
    return this.orderService.create(createOrderDto, currentUser);
  }

  @Get()
  async findAll() {
    return this.orderService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.orderService.findOne(+id);
  }

  @ApiBearerAuth()
  @UseGuards(AuthGuard, RolesGuard)
  @Roles(Role.USER, Role.ADMIN)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOrderDto: UpdateOrderDto) {
    return this.orderService.update(+id, updateOrderDto);
  }

  @ApiBearerAuth()
  @UseGuards(AuthGuard, RolesGuard)
  @Roles(Role.USER, Role.ADMIN)
  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.orderService.remove(+id);
  }
}
