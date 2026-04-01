import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ timestamps: true })
export class Pirate {

  @Prop({ required: true, unique: true })
  nombre: string;

  @Prop({ required: true })
  tripulacion: string;

  @Prop({ default: false })
  tieneFrutaDelDiablo: boolean;

  @Prop({ default: false })
  deleted: boolean;
}

export const PirateSchema = SchemaFactory.createForClass(Pirate);