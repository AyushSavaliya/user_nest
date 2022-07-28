import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { LoggerMiddleware } from './middleware';
import { userController } from './user.controller';
import { userService } from './user.serivce';

@Module({
  imports: [],
  controllers: [userController],
  providers: [userService],
  exports: [userService],
})
export class userModules implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    // throw new Error('Method not implemented.');
    consumer
      .apply(LoggerMiddleware)
      .exclude(
        { path: 'user', method: RequestMethod.GET },
        { path: 'user', method: RequestMethod.POST },
      )
      .forRoutes(userController);
  }
}
