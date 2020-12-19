import { Expose } from 'class-transformer';
import { IsNotEmpty, IsOptional } from 'class-validator';

export class CategoryCreateInput {
  @Expose()
  @IsNotEmpty()
  name: string;

  @IsOptional()
  @IsNotEmpty()
  isGlobal: boolean;
}
