import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

import * as helmet from 'helmet';
// import * as csurf from 'csurf';
import * as rateLimit from 'express-rate-limit';

async function bootstrap() {
  const app = await NestFactory
    .create(AppModule, {
      cors: {
        origin: '*', credentials: true,
      },
      logger: true,
    });
  app.useGlobalPipes(new ValidationPipe());
  app.use(helmet(), rateLimit({windowMs: 60 * 1000, max: 60}));
  await app.listen(3000);
}
bootstrap();
