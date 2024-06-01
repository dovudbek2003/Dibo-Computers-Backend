import { ResponseData } from 'src/lib/response-data';
import { CreateProductTagDto } from '../dto/create-product-tag.dto';
import { UpdateProductTagDto } from '../dto/update-product-tag.dto';
import { ProductTag } from '../entities/product-tag.entity';

export interface IProductTagService {
  create(
    CreateProductTagDto: CreateProductTagDto,
  ): Promise<ResponseData<ProductTag>>;
  findAll(): Promise<ResponseData<ProductTag[]>>;
  findOne(id: number): Promise<ResponseData<ProductTag>>;
  update(
    id: number,
    UpdateProductTagDto: Partial<UpdateProductTagDto>,
  ): Promise<ResponseData<ProductTag>>;
  remove(id: number): Promise<ResponseData<ProductTag>>;
}
