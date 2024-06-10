import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Inject,
  UseGuards,
} from '@nestjs/common';
import { CreateTagDto } from './dto/create-tag.dto';
import { UpdateTagDto } from './dto/update-tag.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { ITagService } from './interface/tag.service.interface';
import { AuthGuard } from '../shared/guards/auth.guard';
import { RolesGuard } from '../shared/guards/roles.guard';
import { Roles } from 'src/common/decorator/role.decorator';
import { Role } from 'src/common/enums/role.enum';

@ApiTags('Tag')
@Controller('tag')
export class TagController {
  constructor(
    @Inject('ITagService')
    private readonly tegService: ITagService,
  ) {}

  @ApiBearerAuth()
  @UseGuards(AuthGuard, RolesGuard)
  @Roles(Role.ADMIN)
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

  @ApiBearerAuth()
  @UseGuards(AuthGuard, RolesGuard)
  @Roles(Role.ADMIN)
  @Patch(':id')
  update(@Param('id') id: string, @Body() UpdateTagDto: UpdateTagDto) {
    return this.tegService.update(+id, UpdateTagDto);
  }

  @ApiBearerAuth()
  @UseGuards(AuthGuard, RolesGuard)
  @Roles(Role.ADMIN)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tegService.remove(+id);
  }
}
