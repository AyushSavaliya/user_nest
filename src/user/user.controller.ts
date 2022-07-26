import { Controller, Get } from '@nestjs/common';
import { userService } from './user.serivce';

@Controller('user')
export class userController {
  constructor(private readonly userService: userService) {}

  @Get()
  getUser(){
    return this.userService.getUSer();
  }
}
