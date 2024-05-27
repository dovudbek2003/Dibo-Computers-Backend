import { Test, TestingModule } from '@nestjs/testing';
import { ProductTegService } from './product-teg.service';

describe('ProductTegService', () => {
  let service: ProductTegService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductTegService],
    }).compile();

    service = module.get<ProductTegService>(ProductTegService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
