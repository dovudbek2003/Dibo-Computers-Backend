import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TegService } from './teg.service';
import { CreateTegDto } from './dto/create-teg.dto';
import { UpdateTegDto } from './dto/update-teg.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Teg')
@Controller('teg')
export class TegController {
  constructor(private readonly tegService: TegService) {}

  @Post()
  create(@Body() createTegDto: CreateTegDto) {
    return this.tegService.create(createTegDto);
  }

  @Get()
  findAll() {
    return this.tegService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tegService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTegDto: UpdateTegDto) {
    return this.tegService.update(+id, updateTegDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tegService.remove(+id);
  }
}
