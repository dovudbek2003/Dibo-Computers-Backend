import { Injectable } from '@nestjs/common';
import { CreateBrendDto } from './dto/create-brend.dto';
import { UpdateBrendDto } from './dto/update-brend.dto';

@Injectable()
export class BrendService {
  create(createBrendDto: CreateBrendDto) {
    return 'This action adds a new brend';
  }

  findAll() {
    return `This action returns all brend`;
  }

  findOne(id: number) {
    return `This action returns a #${id} brend`;
  }

  update(id: number, updateBrendDto: UpdateBrendDto) {
    return `This action updates a #${id} brend`;
  }

  remove(id: number) {
    return `This action removes a #${id} brend`;
  }
}
