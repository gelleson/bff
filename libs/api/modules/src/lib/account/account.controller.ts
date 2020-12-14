import { Body, Controller, Delete, Get, HttpStatus, Param, Patch, Post, Put } from '@nestjs/common';
import { Auth, CurrentUser } from '@bff/api/auth';
import { User } from '../user/user.entity';
import { AccountService } from './account.service';
import { AccountCreateInput } from './dto/account-create.input';
import { AccountUpdateInput } from './dto/account-update.input';
import { AccountObject } from '@bff/interface';
import { IAccount } from './interface/account.interface';

@Auth()
@Controller('accounts')
export class AccountController {

  constructor(private accountService: AccountService) {
  }

  @Get()
  public async getAccounts(@CurrentUser() user: User): Promise<IAccount[]> {
    return this.accountService.findAccountsByUser(user.id);
  }

  @Post()
  public async create(@CurrentUser() user: User, @Body() payload: AccountCreateInput): Promise<IAccount> {
    return this.accountService.create(user.id, payload);
  }

  @Put(':accountId')
  public update(
    @Param('accountId') accountId: number,
    @Body() input: AccountUpdateInput
  ): Promise<IAccount> {
    return this.accountService.update(accountId, input);
  }

  @Delete(':accountId')
  public delete(@Param('accountId') accountId) {
    return this.accountService.delete(accountId);
  }
}
