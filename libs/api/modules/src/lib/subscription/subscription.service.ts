import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Subscription } from './subscription.entity';
import { Repository } from 'typeorm';
import { SubCreateInput } from './dto/sub-create.input';
import { UserService } from '../user/user.service';
import { SubscriptionObject } from './dto/subscription.object';
import { TransactionObject } from '../transaction';
import { SubUpdateInput } from './dto/sub-update.input';

@Injectable()
export class SubscriptionService {

  constructor(
    @InjectRepository(Subscription) private subscriptionRepository: Repository<Subscription>,
    private userService: UserService
  ) {
  }

  public async create(userId: number, input: SubCreateInput) {
    const user = await this.userService.findById(userId);

    const sub = await this.subscriptionRepository.save(
      new Subscription({
        owner: user,
        ...input
      })
    );

    return SubscriptionObject.of(sub);
  }

  public async isOwner(userId: number, subscriptionId: number): Promise<boolean>{
    const subscription = await this.subscriptionRepository.findOne(userId);

    if (!subscription) {
      return false;
    }

    return subscription.owner.id === userId;
  }

  public async findAll(userId: number) {
    const subscriptions = await this.subscriptionRepository.find({
      where: {
        owner: {
          id: userId
        }
      }
    });

    return SubscriptionObject.array(subscriptions);
  }

  public async update(subscriptionId: number, input: Partial<SubUpdateInput>) {
    let subscription = await this.subscriptionRepository.findOne(subscriptionId);
    subscription = await this.subscriptionRepository.merge(subscription, input);

    return SubscriptionObject.of(
      await this.subscriptionRepository.save(subscription)
    );
  }

  public async delete(subscriptionId: number) {
    await this.subscriptionRepository.delete(subscriptionId);
  }
}
