import { IsDate, IsNumber, IsOptional, IsPositive } from 'class-validator';
import { Expose, Transform } from 'class-transformer';

export class BaseTransactionInput {
  @Expose()
  @Transform(value => Number(value))
  @IsPositive()
  amount: number;

  @IsOptional()
  @IsDate()
  @Expose()
  operationDate?: Date

  @IsOptional()
  @Expose()
  narrative?: string;

  @IsOptional()
  @IsNumber()
  @Expose()
  categoryId?: number;
}
