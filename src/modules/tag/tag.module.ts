import { Module } from '@nestjs/common';
import { TagController } from './tag.controller';
import { TagService } from './tag.service';
import { TagRepository } from './tag.repository';
import { Tag } from './entities/tag.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SharedModule } from '../shared/shared.module';

@Module({
  imports: [TypeOrmModule.forFeature([Tag]), SharedModule],
  controllers: [TagController],
  providers: [
    { provide: 'ITagService', useClass: TagService },
    { provide: 'ITagRepository', useClass: TagRepository },
  ],
})
export class TagModule {}
