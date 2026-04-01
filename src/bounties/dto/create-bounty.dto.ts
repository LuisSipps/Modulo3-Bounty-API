import { IsNotEmpty, IsPositive, IsEnum, IsMongoId, IsOptional, Min } from 'class-validator';

export enum BountyEstado {
  Wanted = 'Wanted',
  Captured = 'Captured',
}

export class CreateBountyDto {
  @IsPositive({ message: 'Tienes que ingresar un valor positivo' })
  @Min(0)
  @IsNotEmpty({ message: 'Es obligatorio ingresar cantidadBellys' })
  cantidadBellys: number;

  @IsEnum(BountyEstado)
  @IsOptional()
  estado?: BountyEstado;

  @IsMongoId()
  @IsNotEmpty({ message: 'Es obligatorio ingresar un id de un Pirata' })
  pirata: string;
}
