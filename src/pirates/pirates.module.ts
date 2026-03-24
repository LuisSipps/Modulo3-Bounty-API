import { Module } from '@nestjs/common';
import { PiratesService } from './pirates.service';
import { PiratesController } from './pirates.controller';

@Module({
  controllers: [PiratesController],
  providers: [PiratesService],
})
export class PiratesModule {}
