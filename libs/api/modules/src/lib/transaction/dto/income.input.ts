import { IsDate, IsDateString, IsDecimal, IsNotEmpty, IsOptional, IsPositive } from 'class-validator';
import { BaseTransactionInput } from './base.input';
import { Expose } from 'class-transformer';

export class IncomeInput  extends BaseTransactionInput {
  @IsNotEmpty()
  @Expose()
  debit: number;
}
