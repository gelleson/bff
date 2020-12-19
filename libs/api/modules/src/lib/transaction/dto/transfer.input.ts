import { IsDate, IsDateString, IsDecimal, IsNotEmpty, IsOptional, IsPositive } from 'class-validator';
import { Optional } from '@nestjs/common';
import { BaseTransactionInput } from './base.input';
import { Expose } from 'class-transformer';

export class TransferInput extends BaseTransactionInput{
  @IsNotEmpty()
  @Expose()
  debit: number;

  @IsNotEmpty()
  @Expose()
  credit: number;
}
