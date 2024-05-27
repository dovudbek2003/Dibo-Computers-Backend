import { Test, TestingModule } from '@nestjs/testing';
import { ProductTegController } from './product-teg.controller';
import { ProductTegService } from './product-teg.service';

describe('ProductTegController', () => {
  let controller: ProductTegController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductTegController],
      providers: [ProductTegService],
    }).compile();

    controller = module.get<ProductTegController>(ProductTegController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
