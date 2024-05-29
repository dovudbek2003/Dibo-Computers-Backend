import { ResponseData } from 'src/lib/response-data';
import { ProductDetail } from '../entities/product-detail.entity';
import { CreateProductDetailDto } from '../dto/create-product-detail.dto';
import { UpdateProductDetailDto } from '../dto/update-product-detail.dto';

export interface IProductDetailService {
  create(dto: CreateProductDetailDto): Promise<ResponseData<ProductDetail>>;
  findAll(): Promise<ResponseData<Array<ProductDetail>>>;
  findByQuery(query: string): Promise<ResponseData<Array<ProductDetail>>>;
  update(
    id: number,
    dto: UpdateProductDetailDto,
  ): Promise<ResponseData<ProductDetail>>;
  remove(id: number): Promise<ResponseData<ProductDetail>>;
  findOne(id: number): Promise<ResponseData<ProductDetail>>;
}
