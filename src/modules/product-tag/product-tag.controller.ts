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
import { CreateProductTagDto } from './dto/create-product-tag.dto';
import { UpdateProductTagDto } from './dto/update-product-tag.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { IProductTagService } from './interface/product-tag.service.interface';
import { ITagService } from '../tag/interface/tag.service.interface';
import { IProductRepository } from '../product/interfaces/product.repository';
import { IProductService } from '../product/interfaces/product.service';
import { AuthGuard } from '../shared/guards/auth.guard';
import { RolesGuard } from '../shared/guards/roles.guard';
import { Roles } from 'src/common/decorator/role.decorator';
import { Role } from 'src/common/enums/role.enum';

@ApiTags('product-tag')
@Controller('product-tag')
export class ProductTagController {
  constructor(
    @Inject('IProductTagService')
    private readonly productTagService: IProductTagService,
    @Inject('ITagService')
    private readonly tegService: ITagService,
    @Inject('IProductService')
    private readonly productService: IProductService,
  ) {}

  @ApiBearerAuth()
  @UseGuards(AuthGuard, RolesGuard)
  @Roles(Role.ADMIN)
  @Post()
  async create(@Body() createProductTagDto: CreateProductTagDto) {
    await this.tegService.findOne(createProductTagDto.tagId);
    await this.productService.findOne(createProductTagDto.productId);

    return this.productTagService.create(createProductTagDto);
  }

  @Get()
  findAll() {
    return this.productTagService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productTagService.findOne(+id);
  }

  @ApiBearerAuth()
  @UseGuards(AuthGuard, RolesGuard)
  @Roles(Role.ADMIN)
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateProductTagDto: UpdateProductTagDto,
  ) {
    return this.productTagService.update(+id, updateProductTagDto);
  }

  @ApiBearerAuth()
  @UseGuards(AuthGuard, RolesGuard)
  @Roles(Role.ADMIN)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productTagService.remove(+id);
  }
}
