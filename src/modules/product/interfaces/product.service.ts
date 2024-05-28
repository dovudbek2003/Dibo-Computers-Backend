import { ResponseData } from 'src/lib/response-data';
import { Product } from '../entities/product.entity';
import { CreateProductDto } from '../dto/create-product.dto';
import { UpdateProductDto } from '../dto/update-product.dto';

export interface IProductService {
  create(dto: CreateProductDto): Promise<ResponseData<Product>>;
  findAll(): Promise<ResponseData<Array<Product>>>;
  // findByQuery(query: string): Promise<ResponseData<Array<Product>>>;
  update(id: number, dto: UpdateProductDto): Promise<ResponseData<Product>>;
  remove(id: number): Promise<ResponseData<Product>>;
  findOne(id: number): Promise<ResponseData<Product>>;
}
