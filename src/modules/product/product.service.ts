import { Inject, Injectable } from '@nestjs/common';
import { IProductService } from './interfaces/product.service';
import { IProductRepository } from './interfaces/product.repository';
import { CreateProductDto } from './dto/create-product.dto';
import { ProductAlreadyExistException } from './exception/product.exception';
import { Product } from './entities/product.entity';
import { ResponseData } from 'src/lib/response-data';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductService implements IProductService {
  constructor(
    @Inject('IProductRepository')
    private readonly productRepository: IProductRepository,
  ) {}

  async create(createProductDto: CreateProductDto) {
    const checkData = await this.productRepository.findOneByDetailId(
      createProductDto.detailId,
    );
    if (checkData) {
      throw new ProductAlreadyExistException();
    }
    let newProduct = new Product();
    newProduct = Object.assign(createProductDto, newProduct);
    const data = await this.productRepository.create(newProduct);

    return new ResponseData<Product>(
      'product was created successfully',
      201,
      data,
    );
  }
  async findAll(): Promise<ResponseData<Array<Product>>> {
    const data = await this.productRepository.findAll();

    return new ResponseData<Array<Product>>('ok', 200, data);
  }

  // async findByQuery(query: string): Promise<ResponseData<Array<Product>>> {
  //   // console.log(query);
  //   // const allTasks = await this.productRepository.findByQuery(query);
  //   const allTasks = await this.productRepository.findAll();
  //   const data = allTasks.filter((task) => task.name.includes(query));
  //   if (data) {
  //     return new ResponseData<Array<Product>>('ok', 200, data);
  //   }
  //   return new ResponseData<Array<Product>>('ok', 200, allTasks);
  // }

  async findOne(id: number): Promise<ResponseData<Product>> {
    const data = await this.productRepository.findById(id);

    return new ResponseData<Product>(
      'product was founded successfully',
      200,
      data,
    );
  }

  async update(
    id: number,
    updateProductDto: UpdateProductDto,
  ): Promise<ResponseData<Product>> {
    const { data: foundData } = await this.findOne(id);
    const updatedData = Object.assign(foundData, updateProductDto);
    const data = await this.productRepository.update(updatedData);

    return new ResponseData<Product>(
      'product was updated successfully',
      200,
      data,
    );
  }

  async remove(id: number): Promise<ResponseData<Product>> {
    const { data: foundData } = await this.findOne(id);
    const data = await this.productRepository.delete(foundData);

    return new ResponseData<Product>(
      'product was deleted successfully',
      200,
      data,
    );
  }
}
