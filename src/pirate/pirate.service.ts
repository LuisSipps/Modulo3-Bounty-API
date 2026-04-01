import { Injectable, Inject } from '@nestjs/common';
import { CreatePirateDto } from './dto/create-pirate.dto';
import { UpdatePirateDto } from './dto/update-pirate.dto';
import { Model } from 'mongoose';
import { Pirate } from './entities/pirate.entity';
import { NotFoundException } from '@nestjs/common';

@Injectable()
export class PiratesService {

  constructor(
    @Inject('PIRATE_MODEL')
    private pirateModel: Model<Pirate>,
  ) { }

  create(createPirateDto: CreatePirateDto) {
    const pirate = new this.pirateModel(createPirateDto);
    return pirate.save();
  }

  findAll(): Promise<Pirate[]> {
    return this.pirateModel.find({ deleted: false }).exec();
  }

  async findOne(id: string) {
    const pirate = await this.pirateModel.findOne({ _id: id, deleted: false });

    if (!pirate) {
      throw new NotFoundException('Pirata no encontrado');
    }
    return pirate;
  }

  async update(id: string, updatePirateDto: UpdatePirateDto) {
    return this.pirateModel.findByIdAndUpdate(id, updatePirateDto, {
      new: true,
    });
  }

  async remove(id: string) {
    const pirate = await this.pirateModel.findByIdAndUpdate(id,
      { deleted: true },
      { new: true },
    );

    if (!pirate) {
      throw new NotFoundException('Pirata no encontrado');
    }

    return {
      message: 'Pirata eliminado correctamente',
    };
  }
}
