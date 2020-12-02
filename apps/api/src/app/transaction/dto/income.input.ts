import { IsDate, IsDateString, IsDecimal, IsNotEmpty, IsOptional, IsPositive } from 'class-validator';

export class IncomeInput {
  @IsNotEmpty()
  debit: number;

  @IsPositive()
  amount: number;

  @IsOptional()
  @IsDate()
  operationDate?: Date
}
