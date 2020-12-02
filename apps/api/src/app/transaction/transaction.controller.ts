import { Body, Controller, Get, Post } from '@nestjs/common';
import { TransactionService } from './transaction.service';
import { Auth, CurrentUser } from '@bff/api/auth';
import { User } from '../user/user.entity';
import { WithdrawInput } from './dto/withdraw.input';
import { IncomeInput } from './dto/income.input';

@Auth()
@Controller('transactions')
export class TransactionController {

  constructor(private transactionService: TransactionService) {
  }

  @Post('withdraw')
  public async withdraw(@CurrentUser() user: User, @Body() payload: WithdrawInput) {
    return (await this.transactionService.withdraw(user.id, payload)).toObject();
  }

  @Post('income')
  public async income(@CurrentUser() user: User, @Body() payload: IncomeInput) {
    return (await this.transactionService.income(user.id, payload)).toObject();
  }
}
