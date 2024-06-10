import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Inject,
  Query,
  UseGuards,
} from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ApiBearerAuth, ApiQuery, ApiTags } from '@nestjs/swagger';
import { IProductService } from './interfaces/product.service';
import { PaginationSearchDto } from './dto/pagination-product';
import { IProductDetailService } from '../product-detail/interfaces/product-detail.service';
import {
  BrandIdNotFoundException,
  DetailIdNotFoundException,
} from './exception/product.exception';
import { AuthGuard } from '../shared/guards/auth.guard';
import { RolesGuard } from '../shared/guards/roles.guard';
import { Roles } from 'src/common/decorator/role.decorator';
import { Role } from 'src/common/enums/role.enum';

@ApiTags('Product')
@Controller('product')
export class ProductController {
  constructor(
    @Inject('IProductService')
    private readonly productService: IProductService,
    @Inject('IProductDetailService')
    private readonly productDetailService: IProductDetailService,
    @Inject('IBrendService')
    private readonly brendService: IProductDetailService,
  ) {}

  @ApiBearerAuth()
  @UseGuards(AuthGuard, RolesGuard)
  @Roles(Role.ADMIN)
  @Post()
  async create(@Body() createProductDto: CreateProductDto) {
    const checkBrand = await this.brendService.findOne(
      createProductDto.brendId,
    );
    if ((checkBrand.statusCode == 404)) {
      throw new BrandIdNotFoundException();
    }

    const checkDetail = await this.productDetailService.findOne(
      createProductDto.detailId,
    );
    if (!checkDetail) {
      throw new DetailIdNotFoundException();
    }

    return this.productService.create(createProductDto);
  }

  @Get()
  @ApiQuery({
    name: 'page',
    required: false,
    type: Number,
    description: 'Page number',
  })
  @ApiQuery({
    name: 'limit',
    required: false,
    type: Number,
    description: 'Number of items per page',
  })
  @ApiQuery({
    name: 'search',
    required: false,
    type: String,
    description: 'Search term',
  })
  findAll(@Query() paginationSearchDto: PaginationSearchDto) {
    return this.productService.findWithPagination(paginationSearchDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productService.findOne(+id);
  }

  @ApiBearerAuth()
  @UseGuards(AuthGuard, RolesGuard)
  @Roles(Role.ADMIN)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productService.update(+id, updateProductDto);
  }

  @ApiBearerAuth()
  @UseGuards(AuthGuard, RolesGuard)
  @Roles(Role.ADMIN)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productService.remove(+id);
  }
}
