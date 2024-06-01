import { BaseEntity } from 'src/lib/base-entity';
import { Product } from 'src/modules/product/entities/product.entity';
import { User } from 'src/modules/user/entities/user.entity';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

@Entity('orders')
export class Order extends BaseEntity {
  @Column({
    name: 'user_id',
    type: 'int',
    nullable: false,
  })
  userId: number;

  @Column({
    name: 'product_id',
    type: 'int',
    nullable: false,
  })
  productId: number;

  @Column({
    type: 'int',
    default: null,
  })
  count: number;

  @ManyToOne(() => Product, (product) => product.orders)
  @JoinColumn({ name: 'product_id' })
  product: Product;

  @ManyToOne(() => User, (user) => user.orders)
  @JoinColumn({ name: 'user_id' })
  user: User;
}
