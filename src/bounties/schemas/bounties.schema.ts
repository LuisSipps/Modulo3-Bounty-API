import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Pirate } from '../../pirates/schemas/pirates.schema';

@Schema()
export class Bounty {

  @Prop({ required: true })
  cantidadBellys: number;

  @Prop({ 
    enum: ['Wanted', 'Captured'], 
    default: 'Wanted' 
  })
  estado: string;

  @Prop({ 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Pirate',
    required: true
  })
  pirata: Pirate;
}

export const BountySchema = SchemaFactory.createForClass(Bounty);