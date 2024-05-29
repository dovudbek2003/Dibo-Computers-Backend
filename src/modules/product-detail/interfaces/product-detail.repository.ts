import { ProductDetail } from '../entities/product-detail.entity';

export interface IProductDetailRepository {
  create(dto: ProductDetail): Promise<ProductDetail>;
  findAll(): Promise<Array<ProductDetail>>;
  findByQuery(query: string): Promise<Array<ProductDetail>>;
  update(dto: ProductDetail): Promise<ProductDetail>;
  delete(entity: ProductDetail): Promise<ProductDetail>;
  findById(id: number): Promise<ProductDetail | null>;
  // findOneByName(name: string): Promise<ProductDetail | null>;
}
