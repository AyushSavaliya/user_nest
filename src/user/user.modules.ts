import { Module } from '@nestjs/common';
import { userController } from './user.controller';
import { userService } from './user.serivce';

@Module({
    imports:[],
    controllers:[userController],
    providers:[userService]
})
export class userModules {}
