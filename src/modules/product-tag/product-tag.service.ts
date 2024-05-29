import { Injectable } from '@nestjs/common';
import { CreateProductTegDto } from './dto/create-product-tag.dto';
import { UpdateProductTegDto } from './dto/update-product-tag.dto';

@Injectable()
export class ProductTegService {
  create(createProductTegDto: CreateProductTegDto) {
    return 'This action adds a new productTeg';
  }

  findAll() {
    return `This action returns all productTeg`;
  }

  findOne(id: number) {
    return `This action returns a #${id} productTeg`;
  }

  update(id: number, updateProductTegDto: UpdateProductTegDto) {
    return `This action updates a #${id} productTeg`;
  }

  remove(id: number) {
    return `This action removes a #${id} productTeg`;
  }
}
