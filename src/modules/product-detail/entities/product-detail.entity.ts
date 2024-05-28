import { BaseEntity } from 'src/lib/base-entity';
import { Column, Entity } from 'typeorm';

@Entity('product_details')
export class ProductDetail extends BaseEntity {
  @Column({
    type: 'varchar',
    nullable: false,
  })
  model: string;

  @Column({
    type: 'varchar',
    nullable: false,
  })
  protsessor: string;

  @Column({
    type: 'int',
    nullable: false,
  })
  ram: number;

  @Column({
    type: 'int',
    nullable: false,
  })
  hdd: number;

  @Column({
    type: 'varchar',
    nullable: false,
  })
  displey: string;

  @Column({
    type: 'varchar',
    nullable: false,
  })
  color: string;

  @Column({
    type: 'numeric',
    nullable: true,
  })
  kg: number;

  @Column({
    type: 'int',
    default: 0,
  })
  count: number;

  @Column({
    type: 'int',
    default: 0,
  })
  price: number;
}
