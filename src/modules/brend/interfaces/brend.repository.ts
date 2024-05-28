import { Brend } from '../entities/brend.entity';

export interface IBrendRepository {
  create(brendEntity: Brend): Promise<Brend>;
  findAll(): Promise<Array<Brend>>;
  findById(id: number): Promise<Brend>;
  findByName(name: string): Promise<Brend | null>;
  update(brendEntity: Brend): Promise<Brend>;
  remove(id: number): Promise<Brend>;
}
