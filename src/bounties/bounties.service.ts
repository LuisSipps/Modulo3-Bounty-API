import { Injectable, Inject } from '@nestjs/common';
import { CreateBountyDto } from './dto/create-bounty.dto';
import { UpdateBountyDto } from './dto/update-bounty.dto';
import { Model } from 'mongoose';
import { Bounty } from './schemas/bounties.schema';
import { NotFoundException } from '@nestjs/common';

@Injectable()
export class BountiesService {

  constructor(
    @Inject('BOUNTY_MODEL')
    private bountyModel: Model<Bounty>,

  ) { }

  create(createBountyDto: CreateBountyDto) {
    const bounty = new this.bountyModel(createBountyDto);
    return bounty.save();
  }

  findAll(): Promise<Bounty[]> {
    return this.bountyModel.find({ deleted: false }).populate('pirata');
  }

  findActive() {
    return this.bountyModel
      .find({ estado: 'Wanted', deleted: false })
      .populate('pirata');
  }

  async findOne(id: string) {
    const bounty = await this.bountyModel.findOne({ _id: id, deleted: false }).populate('pirata');

    if (!bounty) {
      throw new NotFoundException('Bounty no encontrado');
    }
    return bounty;
  }

  async update(id: string, updateBountyDto: UpdateBountyDto) {
    const bounty = await this.bountyModel.findByIdAndUpdate(id, updateBountyDto, {
      returnDocument: 'after',
    });

    if (!bounty) {
      throw new NotFoundException('Bounty no encontrado');
    }

    return bounty;
  }

  async remove(id: string) {
    const bounty = await this.bountyModel.findByIdAndUpdate(id,
      { deleted: true },
      { returnDocument: 'after' },
    );

    if (!bounty) {
      throw new NotFoundException('Bounty no encontrado');
    }

    return {
      message: 'Bounty eliminado correctamente',
    };
  }
}
