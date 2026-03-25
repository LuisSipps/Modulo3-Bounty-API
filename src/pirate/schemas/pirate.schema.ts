import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Pirate {

  @Prop({ required: true, unique: true })
  nombre: string;

  @Prop({ required: true })
  tripulacion: string;

  @Prop({ default: false })
  tieneFrutaDelDiablo: boolean;
}

export const PirateSchema = SchemaFactory.createForClass(Pirate);