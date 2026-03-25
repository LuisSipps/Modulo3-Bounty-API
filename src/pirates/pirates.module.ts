import { Module } from '@nestjs/common';
import { PiratesService } from './pirates.service';
import { PiratesController } from './pirates.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Pirate, PirateSchema } from './schemas/pirates.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Pirate.name, schema: PirateSchema },
    ]),
  ],
  controllers: [PiratesController],
  providers: [PiratesService],
})
export class PiratesModule {}
