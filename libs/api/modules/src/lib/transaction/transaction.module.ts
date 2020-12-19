import { Module } from '@nestjs/common';
import { TransactionService } from './services/transaction.service';
import { TransactionController } from './transaction.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Transaction } from './entities/transaction.entity';
import { AccountModule } from '../account/account.module';
import { UserModule } from '../user/user.module';
import { CategoryService } from './services/category.service';
import { CategoryController } from './controllers/category.controller';
import { Category } from './entities/category.entity';

@Module({
  imports: [
    AccountModule,
    UserModule,
    TypeOrmModule.forFeature([Transaction, Category])
  ],
  providers: [TransactionService, CategoryService],
  controllers: [TransactionController, CategoryController],
  exports: [
    CategoryService,
    TransactionService,
  ]
})
export class TransactionModule {}
