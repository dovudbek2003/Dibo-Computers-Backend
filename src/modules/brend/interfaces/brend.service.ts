import { ResponseData } from 'src/lib/response-data';
import { Brend } from '../entities/brend.entity';
import { UpdateBrendDto } from '../dto/update-brend.dto';
import { CreateBrendDto } from '../dto/create-brend.dto';

export interface IBrendService {
  create(createBrendDto: CreateBrendDto): Promise<ResponseData<Brend>>;

  findAll(): Promise<ResponseData<Array<Brend>>>;

  findOne(id: number): Promise<ResponseData<Brend>>;

  _findByName(name: string): Promise<Brend | null>;

  update(
    id: number,
    updateBrendDto: UpdateBrendDto,
  ): Promise<ResponseData<Brend>>;

  remove(id: number): Promise<ResponseData<Brend>>;
}
