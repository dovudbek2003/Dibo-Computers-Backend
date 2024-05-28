import { BaseEntity } from 'src/lib/base-entity';
import { Product } from 'src/modules/product/entities/product.entity';
import { Teg } from 'src/modules/teg/entities/teg.entity';
import { Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';

@Entity('product_tegs')
export class ProductTeg extends BaseEntity {
  @PrimaryColumn({ name: 'product_id' })
  productId: number;

  @PrimaryColumn({ name: 'teg_id' })
  tegId: number;

  @ManyToOne(() => Product, (product) => product.tegs, {
    onDelete: 'SET NULL',
    onUpdate: 'NO ACTION',
  })
  @JoinColumn([{ name: 'product_id', referencedColumnName: 'id' }])
  products: Array<Product>;

  @ManyToOne(() => Teg, (teg) => teg.products, {
    onDelete: 'SET NULL',
    onUpdate: 'NO ACTION',
  })
  @JoinColumn([{ name: 'teg_id', referencedColumnName: 'id' }])
  tegs: Array<Teg>;
}
