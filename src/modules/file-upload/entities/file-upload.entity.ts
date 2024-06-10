import { BaseEntity } from 'src/lib/base-entity';
import { Product } from 'src/modules/product/entities/product.entity';
import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';

@Entity('files')
export class FileUpload extends BaseEntity {
  @Column({ type: 'text', nullable: false })
  url: string;

  @Column({ type: 'text', nullable: false })
  mimetype: string;

  @Column({ type: 'int', nullable: false })
  size: number;

  @ManyToOne(() => Product, (product) => product.id, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'product_id' })
  product: Product;
}
