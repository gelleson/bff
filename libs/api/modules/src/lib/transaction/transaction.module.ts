import { Module } from '@nestjs/common';
import { TransactionService } from './services/transaction.service';
import { TransactionController } from './transaction.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Transaction } from './entities/transaction.entity';
import { AccountModule } from '../account/account.module';
import { UserModule } from '../user/user.module';

@Module({
  imports: [
    AccountModule,
    UserModule,
    TypeOrmModule.forFeature([Transaction])
  ],
  providers: [TransactionService],
  controllers: [TransactionController]
})
export class TransactionModule {}
