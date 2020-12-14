import { IsDate, IsDateString, IsDecimal, IsNotEmpty, IsOptional } from 'class-validator';
import { Expose, Transform } from 'class-transformer';
import { BaseTransactionInput } from './base.input';

export class WithdrawInput extends BaseTransactionInput {
  @IsNotEmpty()
  @Expose()
  credit: number;
}
