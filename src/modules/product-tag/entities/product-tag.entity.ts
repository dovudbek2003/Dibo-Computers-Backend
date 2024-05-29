import { BaseEntity } from 'src/lib/base-entity';
import { Product } from 'src/modules/product/entities/product.entity';
import { Tag } from 'src/modules/tag/entities/tag.entity';
import { Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';

@Entity('product_tags')
export class ProductTag extends BaseEntity {
  @PrimaryColumn({ name: 'product_id' })
  productId: number;

  @PrimaryColumn({ name: 'tag_id' })
  tagId: number;

  @ManyToOne(() => Product, (product) => product.tags, {
    onDelete: 'SET NULL',
    onUpdate: 'NO ACTION',
  })
  @JoinColumn([{ name: 'product_id', referencedColumnName: 'id' }])
  products: Array<Product>;

  @ManyToOne(() => Tag, (tag) => tag.products, {
    onDelete: 'SET NULL',
    onUpdate: 'NO ACTION',
  })
  @JoinColumn([{ name: 'tag_id', referencedColumnName: 'id' }])
  tegs: Array<Tag>;
}
