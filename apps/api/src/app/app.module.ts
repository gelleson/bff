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
import database from './config/database.config';

@Module({
  imports: [
    UserModule,
    ConfigModule.forRoot({
      load: [database]
    }),
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
        }
      }
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
