import { BaseEntity } from 'src/lib/base-entity';
import { Product } from 'src/modules/product/entities/product.entity';
import { Column, Entity, ManyToMany } from 'typeorm';

@Entity('tags')
export class Tag extends BaseEntity {
  @Column({
    type: 'varchar',
    default: null,
  })
  name: string;

  @ManyToMany(() => Product, {
    onDelete: 'SET NULL',
    onUpdate: 'NO ACTION',
  })
  products?: Array<Product>;
}
