import { InjectRepository } from '@nestjs/typeorm';
import { IBrendRepository } from './interfaces/brend.repository';
import { Brend } from './entities/brend.entity';
import { Repository } from 'typeorm';

export class BrendRepository implements IBrendRepository {
  constructor(@InjectRepository(Brend) private repository: Repository<Brend>) {}

  //   CREATE
  async create(brendEntity: Brend): Promise<Brend> {
    return await this.repository.save(brendEntity);
  }

  // READ
  async findAll(): Promise<Brend[]> {
    return await this.repository.find();
  }
  async findById(id: number): Promise<Brend> {
    return await this.repository.findOneBy({ id });
  }
  async findByName(name: string): Promise<Brend> {
    return await this.repository.findOneBy({ name });
  }

  // UPDATE
  async update(brendEntity: Brend): Promise<Brend> {
    return await this.repository.save(brendEntity);
  }

  // DELETE
  async remove(id: number): Promise<Brend> {
    const foundBrend = await this.findById(id);
    await this.repository.delete(id);
    return foundBrend;
  }
}
