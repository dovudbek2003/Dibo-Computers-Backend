import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Inject,
} from '@nestjs/common';
import { CreateTagDto } from './dto/create-tag.dto';
import { UpdateTagDto } from './dto/update-tag.dto';
import { ApiTags } from '@nestjs/swagger';
import { ITagService } from './interface/tag.service.interface';

@ApiTags('Tag')
@Controller('tag')
export class TagController {
  constructor(
    @Inject('ITagService')
    private readonly tegService: ITagService,
  ) {}

  @Post()
  create(@Body() CreateTagDto: CreateTagDto) {
    return this.tegService.create(CreateTagDto);
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
  update(@Param('id') id: string, @Body() UpdateTagDto: UpdateTagDto) {
    return this.tegService.update(+id, UpdateTagDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tegService.remove(+id);
  }
}
