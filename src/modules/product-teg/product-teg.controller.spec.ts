import { Test, TestingModule } from '@nestjs/testing';
import { ProductTagController } from './product-teg.controller';
import { ProductTegService } from './product-teg.service';

describe('ProductTagController', () => {
  let controller: ProductTagController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductTagController],
      providers: [ProductTegService],
    }).compile();

    controller = module.get<ProductTagController>(ProductTagController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
