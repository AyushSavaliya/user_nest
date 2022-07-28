import { IsDefined, IsEmail, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class UserDto{
    @IsNumber()
    id:number;

    @IsString()
    @IsEmail()
    @IsNotEmpty()
    @IsDefined()
    email:string;

    @IsString()
    @IsNotEmpty()
    password:string;
}

export class USerParamsDto{
    @IsString()
    @IsEmail()
    @IsNotEmpty()
    @IsDefined()
    email:string;
}