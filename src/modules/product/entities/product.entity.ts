import { BaseEntity } from 'src/lib/base-entity';
import { Brend } from 'src/modules/brend/entities/brend.entity';
import { ProductDetail } from 'src/modules/product-detail/entities/product-detail.entity';
import { Teg } from 'src/modules/teg/entities/teg.entity';
import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToOne,
} from 'typeorm';

@Entity('products')
export class Product extends BaseEntity {
  @Column({
    name: 'brend_id',
    type: 'int',
  })
  brendId: number;

  @Column({
    name: 'detail_id',
    type: 'int',
  })
  detailId: number;

  @ManyToOne(() => Brend, (brend) => brend.products)
  @JoinColumn({ name: 'brend_id' })
  brend: Brend;

  @OneToOne(() => ProductDetail)
  @JoinColumn({ name: 'detail_id' })
  detail: ProductDetail;

  @ManyToMany(() => Teg, {
    onDelete: 'SET NULL',
    onUpdate: 'NO ACTION',
  })
  @JoinTable({
    name: 'product_tags',
    joinColumn: {
      name: 'product_id',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'tag_id',
      referencedColumnName: 'id',
    },
  })
  tags?: Array<Teg>;
}
