import { Body, Controller, Delete, ForbiddenException, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { SubscriptionService } from './subscription.service';
import { Auth, CurrentUser } from '@bff/api/auth';
import { SubCreateInput } from './dto/sub-create.input';
import { User } from '../user/user.entity';
import { SubscriptionOutput } from './dto/subscription.output';
import { SubUpdateInput } from './dto/sub-update.input';

@Auth()
@Controller('subscriptions')
export class SubscriptionController {
  constructor(private subscriptionService: SubscriptionService) {
  }

  @Post()
  public create(@CurrentUser() user: User, @Body() payload: SubCreateInput): Promise<SubscriptionOutput> {
    return this.subscriptionService.create(
      user.id,
      payload
    );
  }

  @Get()
  public findAll(@CurrentUser() user: User) {
    return this.subscriptionService.findAll(user.id);
  }

  @Put(':subscriptionId')
  public async update(
    @CurrentUser() user: User,
    @Param('subscriptionId') subscriptionId: number,
    @Body() input: SubUpdateInput
  ) {
    if (!(await this.subscriptionService.isOwner(user.id, subscriptionId))) {
      throw new ForbiddenException();
    }

    return this.subscriptionService.update(subscriptionId, input);
  }

  @Delete(':subscriptionId')
  public async delete(
    @CurrentUser() user: User,
    @Param('subscriptionId') subscriptionId: number
  ) {
    if (!(await this.subscriptionService.isOwner(user.id, subscriptionId))) {
      throw new ForbiddenException();
    }

    return this.subscriptionService.delete(subscriptionId);
  }
}
