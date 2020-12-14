import { Body, Controller, Delete, Get, HttpStatus, Param, Patch, Post, Put } from '@nestjs/common';
import { Auth, CurrentUser } from '@bff/api/auth';
import { User } from '../user/user.entity';
import { AccountService } from './account.service';
import { AccountCreateInput } from './dto/account-create.input';
import { AccountUpdateInput } from './dto/account-update.input';
import { AccountObject } from '@bff/interface';

@Auth()
@Controller('accounts')
export class AccountController {

  constructor(private accountService: AccountService) {
  }

  @Get()
  public async getAccounts(@CurrentUser() user: User): Promise<AccountObject[]> {
    return (await this.accountService.findAccountsByUser(user.id))
      .map(account => account.toObject() as AccountObject);
  }

  @Post()
  public async create(@CurrentUser() user: User, @Body() payload: AccountCreateInput): Promise<AccountObject> {
    return (await this.accountService.create(user.id, payload)).toObject() as AccountObject;
  }

  @Put(':accountId')
  public update(
    @Param('accountId') accountId: number,
    @Body() input: AccountUpdateInput,
  ): Promise<AccountObject> {
    return this.accountService.update(accountId, input);
  }

  @Delete(':accountId')
  public delete(@Param('accountId') accountId) {
    return this.accountService.delete(accountId);
  }
}
