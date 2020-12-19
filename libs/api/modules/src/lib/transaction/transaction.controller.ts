import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Query } from '@nestjs/common';
import { TransactionService } from './transaction.service';
import { Auth, CurrentUser } from '@bff/api/auth';
import { User } from '../user/user.entity';
import { PageQuery } from './dto/page.query';
import { PaginationObject } from '@bff/api/shared';
import { IncomeInput, TransactionObject, TransferInput, WithdrawInput } from './dto';
import { ITransaction } from '@bff/api/modules';

@Auth()
@Controller('transactions')
export class TransactionController {

  constructor(private transactionService: TransactionService) {
  }

  @Get('')
  public async find(
    @CurrentUser() user: User,
    @Query('accountId') accountId: number,
    @Query() query: PageQuery
  ): Promise<PaginationObject<ITransaction>> {

    if (!accountId) {
      return new PaginationObject(
        query.getPageNumber(),
        TransactionObject.array(await this.transactionService.find(
          user.id,
          query.getDate(),
          query.getPage(),
          query.getSize()
        ))
      );
    }

    return new PaginationObject(
      query.getPageNumber(),
      await this.transactionService.findByAccount(
        user.id,
        accountId,
        query.getDate(),
        query.getPage(),
        query.getSize()
      )
    );
  }

  @Post('withdraw')
  public async withdraw(@CurrentUser() user: User, @Body() payload: WithdrawInput): Promise<ITransaction> {
    return new TransactionObject(
      await this.transactionService.withdraw(user.id, payload)
    );
  }

  @Post('income')
  public async income(@CurrentUser() user: User, @Body() payload: IncomeInput): Promise<ITransaction> {
    return new TransactionObject(
      await this.transactionService.income(user.id, payload)
    );
  }

  @Post('transfer')
  public async transfer(@CurrentUser() user: User, @Body() payload: TransferInput): Promise<ITransaction> {
    return new TransactionObject(
      await this.transactionService.transfer(user.id, payload)
    );
  }

  @Delete(':transactionId')
  public delete(@Param('transactionId') id: number) {
    return this.transactionService.delete(id);
  }
}
