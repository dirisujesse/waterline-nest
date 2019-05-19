import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './services/app.service';
import { CatModule } from './modules/cat/cat.module';
import { logger } from './services/middlewares/logger.middleware';
import { IdMiddleware } from './services/middlewares/id.middleware';

@Module({
  imports: [
    CatModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(logger)
      .forRoutes({ path: '*', method: RequestMethod.ALL });
    consumer
      .apply(IdMiddleware)
      .exclude(
        { path: 'cat', method: RequestMethod.GET },
        { path: 'cat', method: RequestMethod.HEAD },
        { path: 'cat', method: RequestMethod.OPTIONS },
        { path: 'cat', method: RequestMethod.POST },
      )
      .forRoutes({ path: 'cat', method: RequestMethod.PUT });
  }
}
