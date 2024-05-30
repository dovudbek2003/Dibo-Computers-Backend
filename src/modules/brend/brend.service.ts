import { Inject, Injectable } from '@nestjs/common';
import { CreateBrendDto } from './dto/create-brend.dto';
import { UpdateBrendDto } from './dto/update-brend.dto';
import { IBrendService } from './interfaces/brend.service';
import { IBrendRepository } from './interfaces/brend.repository';
import { ResponseData } from 'src/lib/response-data';
import { Brend } from './entities/brend.entity';
import { BrendAlreadyExist, BrendNotFound } from './exception/brend.exception';

@Injectable()
export class BrendService implements IBrendService {
  constructor(
    @Inject('IBrendRepository')
    private readonly brendRepository: IBrendRepository,
  ) {}

  // CREATE
  async create(createBrendDto: CreateBrendDto): Promise<ResponseData<Brend>> {
    const foundBrendByName = await this._findByName(createBrendDto.name);
    if (foundBrendByName) {
      throw new BrendAlreadyExist();
    }

    const newBrend = new Brend();
    newBrend.name = createBrendDto.name;

    const createdBrend = await this.brendRepository.create(newBrend);

    return new ResponseData<Brend>('create', 201, createdBrend);
  }

  // READ
  async findAll(): Promise<ResponseData<Brend[]>> {
    const brends = await this.brendRepository.findAll();
    return new ResponseData<Brend[]>('get all', 200, brends);
  }
  async findOne(id: number): Promise<ResponseData<Brend>> {
    const brend = await this.brendRepository.findById(id);
    const resData = new ResponseData('success', 200, brend);
    if (!brend) {
      resData.message = 'not found';
      resData.statusCode = 404;
    }
    return resData;
  }
  async _findByName(name: string): Promise<Brend> {
    return await this.brendRepository.findByName(name);
  }

  // UPDATE
  async update(
    id: number,
    updateBrendDto: UpdateBrendDto,
  ): Promise<ResponseData<Brend>> {
    const foundBrendByName = await this._findByName(updateBrendDto.name);
    const { data: foundBrend } = await this.findOne(id);

    if (foundBrendByName && foundBrend.id !== foundBrendByName.id) {
      throw new BrendAlreadyExist();
    }

    foundBrend.name = updateBrendDto.name;

    const updatedBrend = await this.brendRepository.update(foundBrend);

    return new ResponseData<Brend>('update', 200, updatedBrend);
  }

  // DELETE
  async remove(id: number): Promise<ResponseData<Brend>> {
    await this.findOne(id);

    const deletedBrend = await this.brendRepository.remove(id);

    return new ResponseData<Brend>('delete', 200, deletedBrend);
  }
}
