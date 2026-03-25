import { Test, TestingModule } from '@nestjs/testing';
import { PiratesController } from './pirate.controller';
import { PiratesService } from './pirate.service';

describe('PiratesController', () => {
  let controller: PiratesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PiratesController],
      providers: [PiratesService],
    }).compile();

    controller = module.get<PiratesController>(PiratesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
