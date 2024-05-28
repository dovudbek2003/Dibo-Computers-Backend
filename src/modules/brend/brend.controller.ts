import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Inject,
  Put,
  HttpStatus,
  HttpCode,
} from '@nestjs/common';
import { CreateBrendDto } from './dto/create-brend.dto';
import { UpdateBrendDto } from './dto/update-brend.dto';
import { ApiTags } from '@nestjs/swagger';
import { IBrendService } from './interfaces/brend.service';

@ApiTags('Brend')
@Controller('brend')
export class BrendController {
  constructor(
    @Inject('IBrendService') private readonly brendService: IBrendService,
  ) {}

  // CREATE
  @HttpCode(HttpStatus.CREATED)
  @Post()
  async create(@Body() createBrendDto: CreateBrendDto) {
    return this.brendService.create(createBrendDto);
  }

  // READ
  @HttpCode(HttpStatus.OK)
  @Get()
  async findAll() {
    return this.brendService.findAll();
  }

  @HttpCode(HttpStatus.OK)
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.brendService.findOne(+id);
  }

  // UPDATE
  @HttpCode(HttpStatus.OK)
  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateBrendDto: UpdateBrendDto,
  ) {
    return this.brendService.update(+id, updateBrendDto);
  }

  // DELETE
  @HttpCode(HttpStatus.OK)
  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.brendService.remove(+id);
  }
}
