import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
import { AuthModule } from './auth/auth.module';
import { AccountModule } from './account/account.module';
import { TransactionModule } from './transaction/transaction.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { SubscriptionModule } from './subscription/subscription.module';
import database from './config/database.config';
import auth from './config/auth.config';
import { AutomapperModule } from 'nestjsx-automapper';
import { SharedModule } from '@bff/api/shared';

@Module({
  imports: [
    UserModule,
    ConfigModule.forRoot({
      load: [database, auth]
    }),
    AutomapperModule.withMapper(),
    SharedModule,
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        return {
          type: 'postgres',
          url: configService.get('database.uri'),
          logging: configService.get('database.logging'),
          synchronize: configService.get<boolean>('database.synchronize'),
          autoLoadEntities: true,
          namingStrategy: new SnakeNamingStrategy(),
        }
      }
    }),
    AuthModule,
    AccountModule,
    TransactionModule,
    SubscriptionModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {
}
