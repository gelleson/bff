import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
import { AuthModule } from './auth/auth.module';
import { AccountModule } from './account/account.module';
import { TransactionModule } from './transaction/transaction.module';

@Module({
  imports: [
    UserModule,
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'test.db',
      autoLoadEntities: true,
      namingStrategy: new SnakeNamingStrategy(),
      synchronize: true
    }),
    AuthModule,
    AccountModule,
    TransactionModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {
}
