import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PiratesModule } from './pirates/pirates.module';
import { BountiesModule } from './bounties/bounties.module';

@Module({
  imports: [PiratesModule, BountiesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
