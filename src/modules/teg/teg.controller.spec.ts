import { Test, TestingModule } from '@nestjs/testing';
import { TegController } from './teg.controller';
import { TegService } from './teg.service';

describe('TegController', () => {
  let controller: TegController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TegController],
      providers: [TegService],
    }).compile();

    controller = module.get<TegController>(TegController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
