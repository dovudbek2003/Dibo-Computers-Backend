import { Inject, Injectable } from '@nestjs/common';
import { IProductDetailService } from './interfaces/product-detail.service';
import { IProductDetailRepository } from './interfaces/product-detail.repository';
import { CreateProductDetailDto } from './dto/create-product-detail.dto';
import { ProductDetail } from './entities/product-detail.entity';
import { ResponseData } from 'src/lib/response-data';
import { UpdateProductDetailDto } from './dto/update-product-detail.dto';

@Injectable()
export class ProductDetailService implements IProductDetailService {
  constructor(
    @Inject('IProductDetailRepository')
    private readonly productDetailRepository: IProductDetailRepository,
  ) {}

  async create(createProductDto: CreateProductDetailDto) {
    // const checkData = await this.productDetailRepository.findOneByName(
    //   createProductDto.name,
    // );
    // if (checkData) {
    //   throw new ProductAlreadyExistException();
    // }
    let newProduct = new ProductDetail();
    newProduct = Object.assign(createProductDto, newProduct);
    const data = await this.productDetailRepository.create(newProduct);

    return new ResponseData<ProductDetail>(
      'product was created successfully',
      201,
      data,
    );
  }
  async findAll(): Promise<ResponseData<Array<ProductDetail>>> {
    const data = await this.productDetailRepository.findAll();

    return new ResponseData<Array<ProductDetail>>('ok', 200, data);
  }

  async findOne(id: number): Promise<ResponseData<ProductDetail>> {
    const data = await this.productDetailRepository.findById(id);

    return new ResponseData<ProductDetail>(
      'product was founded successfully',
      200,
      data,
    );
  }

  async update(
    id: number,
    updateProductDto: UpdateProductDetailDto,
  ): Promise<ResponseData<ProductDetail>> {
    const { data: foundData } = await this.findOne(id);
    const updatedData = Object.assign(foundData, updateProductDto);
    const data = await this.productDetailRepository.update(updatedData);

    return new ResponseData<ProductDetail>(
      'product was updated successfully',
      200,
      data,
    );
  }

  async remove(id: number): Promise<ResponseData<ProductDetail>> {
    const { data: foundData } = await this.findOne(id);
    const data = await this.productDetailRepository.delete(foundData);

    return new ResponseData<ProductDetail>(
      'product was deleted successfully',
      200,
      data,
    );
  }
}
