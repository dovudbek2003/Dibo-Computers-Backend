import { BaseEntity } from 'src/lib/base-entity';
import { Brend } from 'src/modules/brend/entities/brend.entity';
<<<<<<< HEAD
import { FileUpload } from 'src/modules/file-upload/entities/file-upload.entity';
=======
import { Order } from 'src/modules/order/entities/order.entity';
>>>>>>> 9c71bb8f1e212cda793fa5cd8cb7d5b15341b694
import { ProductDetail } from 'src/modules/product-detail/entities/product-detail.entity';
import { Tag } from 'src/modules/tag/entities/tag.entity';
import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
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

  @OneToOne(() => ProductDetail)
  @JoinColumn({ name: 'detail_id' })
  detail: ProductDetail;

  @OneToMany(() => Order, (order) => order.product)
  orders: Array<Order>;

  @ManyToOne(() => Brend, (brend) => brend.products)
  @JoinColumn({ name: 'brend_id' })
  brend: Brend;

  @ManyToMany(() => Tag, {
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
  tags?: Array<Tag>;

  @OneToMany(() => FileUpload, (file) => file.id)
  files: Array<FileUpload>;
}
