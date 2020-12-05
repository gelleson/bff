import { Body, Controller, Delete, Get, HttpStatus, Param, Patch, Post, Put } from '@nestjs/common';
import { Auth, CurrentUser } from '@bff/api/auth';
import { User } from '../user/user.entity';
import { AccountService } from './account.service';
import { AccountCreateInput } from './dto/account-create.input';
import { AccountUpdateInput } from './dto/account-update.input';

@Auth()
@Controller('accounts')
export class AccountController {

  constructor(private accountService: AccountService) {
  }

  @Get()
  public async getAccounts(@CurrentUser() user: User) {
    return (await this.accountService.findAccountsByUser(user.id))
      .map(account => account.toObject());
  }

  @Post()
  public async create(@CurrentUser() user: User, @Body() payload: AccountCreateInput) {
    return (await this.accountService.create(user.id, payload)).toObject();
  }

  @Put(':accountId')
  public update(
    @Param('accountId') accountId: number,
    @Body() input: AccountUpdateInput,
  ) {
    return this.accountService.update(accountId, input);
  }

  @Delete(':accountId')
  public delete(@Param('accountId') accountId) {
    return this.accountService.delete(accountId);
  }
}
