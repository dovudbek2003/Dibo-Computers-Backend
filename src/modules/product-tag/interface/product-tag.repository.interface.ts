import { UpdateProductTagDto } from '../dto/update-product-tag.dto';
import { ProductTag } from '../entities/product-tag.entity';

export interface IProductTagRepository {
  create(entity: Partial<ProductTag>): Promise<ProductTag>;
  createEntity(
    dto: UpdateProductTagDto | ProductTag,
  ): Promise<Partial<ProductTag>>;
  findAll(): Promise<ProductTag[]>;
  findOne(id: number): Promise<ProductTag>;
  update(entity: Partial<ProductTag>): Promise<ProductTag>;
  remove(entity: ProductTag): void;
}
