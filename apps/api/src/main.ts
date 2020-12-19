/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { ClassSerializerInterceptor, Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory, Reflector } from '@nestjs/core';

import { AppModule } from './app/app.module';
import { initializeTransactionalContext, patchTypeORMRepositoryWithBaseRepository } from 'typeorm-transactional-cls-hooked';

async function bootstrap() {


  initializeTransactionalContext()
  patchTypeORMRepositoryWithBaseRepository()
  const app = await NestFactory.create(AppModule);
  app.enableCors();

  const reflector = app.get<Reflector>(Reflector);

  app.useGlobalInterceptors(
    new ClassSerializerInterceptor(reflector, {
      strategy: 'excludeAll',
      excludeExtraneousValues: true,
      enableImplicitConversion: true
    })
  )

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true
    })
  );
  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);
  const port = process.env.PORT || 3333;
  await app.listen(port, () => {
    Logger.log('Listening at http://localhost:' + port + '/' + globalPrefix);
  });
}

bootstrap();
