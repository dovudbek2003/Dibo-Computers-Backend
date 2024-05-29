import { InjectRepository } from '@nestjs/typeorm';
import { IUserRepository } from './interfaces/user.repository';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

export class UserRepository implements IUserRepository {
  constructor(@InjectRepository(User) private repository: Repository<User>) {}

  //   CREATE
  async create(userEntity: User): Promise<User> {
    return await this.repository.save(userEntity);
  }

  // READ
  async findAll(): Promise<User[]> {
    return await this.repository.find();
  }
  async findById(id: number): Promise<User> {
    return await this.repository.findOneBy({ id });
  }
  async findByLogin(login: string): Promise<User> {
    return await this.repository.findOneBy({ login });
  }
  async findByPhone(phone: string): Promise<User> {
    return await this.repository.findOneBy({ phone });
  }

  // UPDATE
  async update(userEntity: User): Promise<User> {
    return await this.repository.save(userEntity);
  }

  // DELETE
  async remove(id: number): Promise<User> {
    const foundUser = await this.findById(id);
    await this.repository.delete(id);
    return foundUser;
  }
}
