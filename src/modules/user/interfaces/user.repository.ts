import { User } from '../entities/user.entity';

export interface IUserRepository {
  create(userEntity: User): Promise<User>;
  findAll(): Promise<Array<User>>;
  findById(id: number): Promise<User | null>;
  findByLogin(login: string): Promise<User | null>;
  findByPhone(phone: string): Promise<User | null>;
  update(userEntity: User): Promise<User>;
  remove(id: number): Promise<User>;
}
