import { Module } from '@nestjs/common';
import { PiratesService } from './pirate.service';
import { PiratesController } from './pirate.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Pirate, PirateSchema } from './schemas/pirate.schema';
import { DatabaseModule } from 'src/database/database.module';
import { piratesProviders } from './pirate.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [PiratesController],
  providers: [
    PiratesService,
    ...piratesProviders
  ],
})
export class PiratesModule { }
