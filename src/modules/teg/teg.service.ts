import { Injectable } from '@nestjs/common';
import { CreateTegDto } from './dto/create-teg.dto';
import { UpdateTegDto } from './dto/update-teg.dto';

@Injectable()
export class TegService {
  create(createTegDto: CreateTegDto) {
    return 'This action adds a new teg';
  }

  findAll() {
    return `This action returns all teg`;
  }

  findOne(id: number) {
    return `This action returns a #${id} teg`;
  }

  update(id: number, updateTegDto: UpdateTegDto) {
    return `This action updates a #${id} teg`;
  }

  remove(id: number) {
    return `This action removes a #${id} teg`;
  }
}
