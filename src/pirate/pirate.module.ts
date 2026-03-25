import { Module } from '@nestjs/common';
import { PiratesService } from './pirate.service';
import { PiratesController } from './pirate.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Pirate, PirateSchema } from './schemas/pirate.schema';

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
