import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PiratesModule } from './pirates/pirates.module';

@Module({
  imports: [PiratesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
