import { Test, TestingModule } from '@nestjs/testing';
import { BountiesService } from './bounties.service';
import { NotFoundException } from '@nestjs/common';

describe('BountiesService', () => {
  let service: BountiesService;

  const mockBountyModel = {
    find: jest.fn(),
    findById: jest.fn(),
  };

  const mockPirateModel = {
    findById: jest.fn(),
  };


  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        BountiesService,
        {
          provide: 'BOUNTY_MODEL',
          useValue: mockBountyModel,
        },
        {
          provide: 'PIRATE_MODEL',
          useValue: mockPirateModel,
        },
      ],
    }).compile();

    service = module.get<BountiesService>(BountiesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return an array of bounties', async () => {
    const mockData = [{ cantidadBellys: 1000 }];

    mockBountyModel.find.mockReturnValue({
      populate: jest.fn().mockResolvedValue(mockData),
    });

    const result = await service.findAll();

    expect(result).toEqual(mockData);
  });

  it('should throw NotFoundException if bounty does not exist', async () => {
    mockBountyModel.findById.mockReturnValue({
      populate: jest.fn().mockResolvedValue(null),
    });

    await expect(service.findOne('123')).rejects.toThrow(NotFoundException);
  });
});
