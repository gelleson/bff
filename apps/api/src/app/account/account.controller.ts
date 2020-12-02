import { Body, Controller, Get, Post } from '@nestjs/common';
import { Auth, CurrentUser } from '@bff/api/auth';
import { User } from '../user/user.entity';
import { AccountService } from './account.service';
import { AccountCreateInput } from './dto/account-create.input';

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
}
