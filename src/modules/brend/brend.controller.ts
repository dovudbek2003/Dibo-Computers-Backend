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
  UseGuards,
} from '@nestjs/common';
import { CreateBrendDto } from './dto/create-brend.dto';
import { UpdateBrendDto } from './dto/update-brend.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { IBrendService } from './interfaces/brend.service';
import { AuthGuard } from '../shared/guards/auth.guard';
import { RolesGuard } from '../shared/guards/roles.guard';
import { Roles } from 'src/common/decorator/role.decorator';
import { Role } from 'src/common/enums/role.enum';

@ApiTags('Brend')
@Controller('brend')
export class BrendController {
  constructor(
    @Inject('IBrendService') private readonly brendService: IBrendService,
  ) {}

  // CREATE
  // @ApiBearerAuth()
  // @UseGuards(AuthGuard, RolesGuard)
  // @Roles(Role.ADMIN)
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
  @ApiBearerAuth()
  @UseGuards(AuthGuard, RolesGuard)
  @Roles(Role.ADMIN)
  @HttpCode(HttpStatus.OK)
  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateBrendDto: UpdateBrendDto,
  ) {
    return this.brendService.update(+id, updateBrendDto);
  }

  // DELETE
  @ApiBearerAuth()
  @UseGuards(AuthGuard, RolesGuard)
  @Roles(Role.ADMIN)
  @HttpCode(HttpStatus.OK)
  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.brendService.remove(+id);
  }
}
