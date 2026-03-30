import { Test, TestingModule } from '@nestjs/testing';
import { BountiesController } from './bounties.controller';
import { BountiesService } from './bounties.service';

describe('BountiesController', () => {
  let controller: BountiesController;

  const mockBountiesService = {
    findAll: jest.fn(),
    findOne: jest.fn(),
    create: jest.fn(),
    update: jest.fn(),
    remove: jest.fn(),
    findActive: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BountiesController],
      providers: [
        BountiesService,
        {
          provide: BountiesService,
          useValue: mockBountiesService,
        },
      ],
    }).compile();

    controller = module.get<BountiesController>(BountiesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
