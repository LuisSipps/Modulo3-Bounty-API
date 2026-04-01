import { IsNotEmpty, IsBoolean, IsOptional } from 'class-validator';

export class CreatePirateDto {
  @IsNotEmpty({ message: 'Es obligatorio ingresar un nombre' })
  nombre: string;

  @IsNotEmpty({ message: 'Es obligatorio ingresar el número de la tripulación' })
  tripulacion: string;

  @IsBoolean()
  @IsOptional()
  tieneFrutaDelDiablo?: boolean;
}