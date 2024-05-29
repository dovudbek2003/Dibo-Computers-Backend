import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProductTegService } from './product-tag.service';
import { CreateProductTegDto } from './dto/create-product-tag.dto';
import { UpdateProductTegDto } from './dto/update-product-tag.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Product Teg')
@Controller('product-teg')
export class ProductTagController {
  constructor(private readonly productTegService: ProductTegService) {}

  @Post()
  create(@Body() createProductTegDto: CreateProductTegDto) {
    return this.productTegService.create(createProductTegDto);
  }

  @Get()
  findAll() {
    return this.productTegService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productTegService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductTegDto: UpdateProductTegDto) {
    return this.productTegService.update(+id, updateProductTegDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productTegService.remove(+id);
  }
}
