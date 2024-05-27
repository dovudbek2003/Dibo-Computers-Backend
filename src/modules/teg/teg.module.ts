import { Module } from '@nestjs/common';
import { TegService } from './teg.service';
import { TegController } from './teg.controller';

@Module({
  controllers: [TegController],
  providers: [TegService],
})
export class TegModule {}
