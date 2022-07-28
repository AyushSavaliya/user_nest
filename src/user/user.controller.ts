import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  Header,
  HttpCode,
  HttpException,
  HttpStatus,
  Param,
  ParseBoolPipe,
  ParseIntPipe,
  Post,
  Query,
  Req,
  Res,
  UseFilters,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { UserDto, USerParamsDto } from './dto/user.dto';
import { UserInterface } from './interface/user';
import { userService } from './user.serivce';
import { Request, Response } from 'express';
import { HttpExceptionFilter } from './filter';
import { BaseExceptionFilter } from '@nestjs/core';
import { JoiValidationPipe } from './pipe';

@Controller('user')
export class userController {
  constructor(private readonly userService: userService) {}

  // @Param('id', ParseIntPipe) id: number,
  // @Query('sort', ParseBoolPipe) sort: boolean,
  // @Body() data:UserDto

  @Get()
  getUser(
    @Param('id', ParseIntPipe) id: number,
    @Query('sort', ParseBoolPipe) sort: boolean,
    @Body() data: UserDto,
    @Req() req: Request,
  ) {
    return this.userService.getUSer();
  }

  @Get(':email')
  @UseFilters(new HttpExceptionFilter())
  @HttpCode(204)
  @Header('Cache-Control', 'none')
  async getUserById(
    @Param() param: USerParamsDto,
    @Req() req: Request,
    @Res() res: Response,
  ) {
    try {
      const data = this.userService.getUserById(param.email);
    res.status(HttpStatus.CREATED).send(data);
    } catch (error) {
      throw new BadRequestException('test'); 
    }
  }

  @Post()
  // @UsePipes(new JoiValidationPipe({}))
  async addUser(@Body() users: UserDto): Promise<UserInterface> {
    return this.userService.addUser(users);
  }
  @Delete(':email')
  async deleteUser(@Param() params: USerParamsDto): Promise<UserInterface[]> {
    return this.userService.deleteUser(params.email);
  }
}
