import { IsDate, IsDateString, IsDecimal, IsNotEmpty, IsOptional } from 'class-validator';
import { Transform } from 'class-transformer';

export class WithdrawInput {
  @IsNotEmpty()
  credit: number;

  amount: number;

  @IsOptional()
  @Transform(value => new Date(value))
  operationDate?: Date
}
