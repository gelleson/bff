import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from '../../../../libs/api/modules/src/lib/user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
import { AuthModule } from '../../../../libs/api/modules/src/lib/auth/auth.module';
import { AccountModule } from '../../../../libs/api/modules/src/lib/account/account.module';
import { TransactionModule } from '../../../../libs/api/modules/src/lib/transaction/transaction.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { SubscriptionModule } from '../../../../libs/api/modules/src/lib/subscription/subscription.module';
import database from '../../../../libs/api/modules/src/lib/config/database.config';
import auth from '../../../../libs/api/modules/src/lib/config/auth.config';
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
