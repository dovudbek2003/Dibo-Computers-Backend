import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  Inject,
} from '@nestjs/common';
import { CreateProductDetailDto } from './dto/create-product-detail.dto';
import { UpdateProductDetailDto } from './dto/update-product-detail.dto';
import { ApiTags } from '@nestjs/swagger';
import { IProductDetailService } from './interfaces/product-detail.service';

@ApiTags('Product Detail')
@Controller('product-detail')
export class ProductDetailController {
  constructor(
    @Inject('IProductDetailService')
    private readonly productDetailService: IProductDetailService,
  ) {}

  @Post()
  create(@Body() createProductDetailDto: CreateProductDetailDto) {
    return this.productDetailService.create(createProductDetailDto);
  }

  @Get()
  findAll() {
    return this.productDetailService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productDetailService.findOne(+id);
  }
  @Get('/query')
  findByQuery(@Query('search') search: string) {
    return this.productDetailService.findByQuery(search);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateProductDetailDto: UpdateProductDetailDto,
  ) {
    return this.productDetailService.update(+id, updateProductDetailDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productDetailService.remove(+id);
  }
}
