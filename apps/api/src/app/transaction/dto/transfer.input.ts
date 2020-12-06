import { IsDate, IsDateString, IsDecimal, IsNotEmpty, IsOptional, IsPositive } from 'class-validator';

export class TransferInput {
  @IsNotEmpty()
  debit: number;

  @IsNotEmpty()
  credit: number;

  @IsPositive()
  amount: number;

  @IsOptional()
  @IsDate()
  operationDate?: Date
}
