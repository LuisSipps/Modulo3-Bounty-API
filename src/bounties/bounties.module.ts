import { Module } from '@nestjs/common';
import { BountiesService } from './bounties.service';
import { BountiesController } from './bounties.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Bounty, BountySchema} from './schemas/bounties.schema';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [ DatabaseModule ],
  controllers: [BountiesController],
  providers: [BountiesService],
})
export class BountiesModule {}
