import { Injectable } from '@nestjs/common';
import { CreatePirateDto } from './dto/create-pirate.dto';
import { UpdatePirateDto } from './dto/update-pirate.dto';

@Injectable()
export class PiratesService {
  create(createPirateDto: CreatePirateDto) {
    return 'This action adds a new pirate';
  }

  findAll() {
    return `This action returns all pirates`;
  }

  findOne(id: number) {
    return `This action returns a #${id} pirate`;
  }

  update(id: number, updatePirateDto: UpdatePirateDto) {
    return `This action updates a #${id} pirate`;
  }

  remove(id: number) {
    return `This action removes a #${id} pirate`;
  }
}
