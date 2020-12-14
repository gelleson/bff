import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from '@bff/api/modules';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
import { AuthModule } from '@bff/api/modules';
import { AccountModule } from '@bff/api/modules';
import { TransactionModule } from '@bff/api/modules';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { SubscriptionModule } from '@bff/api/modules';
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
          namingStrategy: new SnakeNamingStrategy()
        };
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
