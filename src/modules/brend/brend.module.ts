import { Module } from '@nestjs/common';
import { BrendService } from './brend.service';
import { BrendController } from './brend.controller';

@Module({
  controllers: [BrendController],
  providers: [BrendService],
})
export class BrendModule {}
