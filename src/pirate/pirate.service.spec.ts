import { Test, TestingModule } from '@nestjs/testing';
import { PiratesService } from './pirate.service';
import { NotFoundException } from '@nestjs/common';

describe('PiratesService', () => {
  let service: PiratesService;

  const mockPirateModel = {
    find: jest.fn(),
    findOne: jest.fn(),
    findByIdAndUpdate: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PiratesService,
        {
          provide: 'PIRATE_MODEL',
          useValue: mockPirateModel,
        },
      ],
    }).compile();

    service = module.get<PiratesService>(PiratesService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return an array of pirates', async () => {
    const mockData = [{ nombre: 'Luffy' }];

    mockPirateModel.find.mockReturnValue({
      exec: jest.fn().mockResolvedValue(mockData),
    });

    const result = await service.findAll();

    expect(result).toEqual(mockData);
  });

  it('should return a pirate if found', async () => {
    const mockPirate = { nombre: 'Zoro' };

    mockPirateModel.findOne.mockResolvedValue(mockPirate);

    const result = await service.findOne('123');

    expect(result).toEqual(mockPirate);
  });

  it('should throw NotFoundException if pirate does not exist', async () => {
    mockPirateModel.findOne.mockResolvedValue(null);

    await expect(service.findOne('123')).rejects.toThrow(NotFoundException);
  });
});