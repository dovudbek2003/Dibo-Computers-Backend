import { BaseEntity } from 'src/lib/base-entity';
import { Product } from 'src/modules/product/entities/product.entity';
import { Column, Entity, OneToMany } from 'typeorm';

@Entity('brends')
export class Brend extends BaseEntity {
  @Column({
    type: 'varchar',
    unique: true,
    nullable: false,
  })
  name: string;

  @OneToMany(() => Product, (product) => product.brend)
  products: Array<Product>;
}
