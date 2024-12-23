import { Product } from '../entities/product.entity';

export interface IProductRepository {
  create(dto: Product): Promise<Product>;
  findAll(): Promise<Array<Product>>;
  findByQuery(query: string): Promise<Array<Product>>;
  findWithPagination(
    page: number,
    limit: number,
    search?: string,
  ): Promise<[Product[], number]>;
  update(dto: Product): Promise<Product>;
  delete(entity: Product): Promise<Product>;
  findById(id: number): Promise<Product | null>;
  findOneByDetailId(detailId: number): Promise<Product | null>;
}
