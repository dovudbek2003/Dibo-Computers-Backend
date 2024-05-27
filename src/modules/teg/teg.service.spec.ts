import { Test, TestingModule } from '@nestjs/testing';
import { TegService } from './teg.service';

describe('TegService', () => {
  let service: TegService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TegService],
    }).compile();

    service = module.get<TegService>(TegService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
