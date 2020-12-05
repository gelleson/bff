import { Body, Controller, Get, Param, ParseIntPipe, Post, Query } from '@nestjs/common';
import { TransactionService } from './transaction.service';
import { Auth, CurrentUser } from '@bff/api/auth';
import { User } from '../user/user.entity';
import { WithdrawInput } from './dto/withdraw.input';
import { IncomeInput } from './dto/income.input';
import { TransactionOutput } from './dto/transaction.output';
import { PaginationOutput } from './dto/pagination.output';
import { PageQuery } from './dto/page.query';

@Auth()
@Controller('transactions')
export class TransactionController {

  constructor(private transactionService: TransactionService) {
  }

  @Get(':accountId/accounts')
  public async find(@CurrentUser() user: User,
                    @Param('accountId') accountId: number,
                    @Query() query: PageQuery
  ) {
    return new PaginationOutput(
      query.getPageNumber(),
      await this.transactionService.find(
        user.id,
        accountId,
        query.getDate(),
        query.getPage(),
        query.getSize(),
      )
    );
  }

  @Post('withdraw')
  public async withdraw(@CurrentUser() user: User, @Body() payload: WithdrawInput) {
    return new TransactionOutput(
      await this.transactionService.withdraw(user.id, payload)
    );
  }

  @Post('income')
  public async income(@CurrentUser() user: User, @Body() payload: IncomeInput) {
    return new TransactionOutput(
      await this.transactionService.income(user.id, payload)
    );
  }
}
