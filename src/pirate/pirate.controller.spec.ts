import { Test, TestingModule } from '@nestjs/testing';
import { PiratesController } from './pirate.controller';
import { PiratesService } from './pirate.service';

describe('PiratesController', () => {
  let controller: PiratesController;

  const mockPiratesService = {
    findAll: jest.fn(),
    findOne: jest.fn(),
    create: jest.fn(),
    update: jest.fn(),
    remove: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PiratesController],
      providers: [
        PiratesService,
        {
          provide: PiratesService,
          useValue: mockPiratesService,
        },
      ],
    }).compile();

    controller = module.get<PiratesController>(PiratesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
