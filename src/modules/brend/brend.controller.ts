import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { BrendService } from './brend.service';
import { CreateBrendDto } from './dto/create-brend.dto';
import { UpdateBrendDto } from './dto/update-brend.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Brend')
@Controller('brend')
export class BrendController {
  constructor(private readonly brendService: BrendService) {}

  @Post()
  create(@Body() createBrendDto: CreateBrendDto) {
    return this.brendService.create(createBrendDto);
  }

  @Get()
  findAll() {
    return this.brendService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.brendService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBrendDto: UpdateBrendDto) {
    return this.brendService.update(+id, updateBrendDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.brendService.remove(+id);
  }
}
