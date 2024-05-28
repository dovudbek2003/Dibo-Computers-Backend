import { Module } from '@nestjs/common';
import { BrendService } from './brend.service';
import { BrendController } from './brend.controller';
import { BrendRepository } from './brend.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Brend } from './entities/brend.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Brend])],
  controllers: [BrendController],
  providers: [
    { provide: 'IBrendService', useClass: BrendService },
    { provide: 'IBrendRepository', useClass: BrendRepository },
  ],
})
export class BrendModule {}
