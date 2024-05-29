import { Role } from 'src/common/enums/role.enum';
import { BaseEntity } from 'src/lib/base-entity';
import { Column, Entity } from 'typeorm';

@Entity('users')
export class User extends BaseEntity {
  @Column({
    name: 'first_name',
    type: 'varchar',
    nullable: false,
  })
  firstName: string;

  @Column({
    name: 'last_name',
    type: 'varchar',
    default: null,
  })
  lastName: string;

  @Column({
    type: 'varchar',
    unique: true,
    nullable: false,
  })
  phone: string;

  @Column({
    type: 'varchar',
    unique: true,
    nullable: false,
  })
  login: string;

  @Column({
    type: 'text',
    nullable: false,
  })
  password: string;

  @Column({
    type: 'enum',
    enum: Role,
    default: Role.USER,
  })
  role: Role;
}
