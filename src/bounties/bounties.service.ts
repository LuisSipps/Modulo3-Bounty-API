import { Injectable, Inject } from '@nestjs/common';
import { CreateBountyDto } from './dto/create-bounty.dto';
import { UpdateBountyDto } from './dto/update-bounty.dto';
import { Model } from 'mongoose';
import { Bounty } from './schemas/bounties.schema';

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
    return this.bountyModel.find().populate('pirata');
  }

  findOne(id: number) {
    return `This action returns a #${id} bounty`;
  }

  update(id: number, updateBountyDto: UpdateBountyDto) {
    return `This action updates a #${id} bounty`;
  }

  remove(id: number) {
    return `This action removes a #${id} bounty`;
  }
}
