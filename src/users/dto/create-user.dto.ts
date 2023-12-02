import { IsEnum, IsISO8601, IsNotEmpty, IsNumber, IsOptional, IsString, MaxLength, MinLength } from "class-validator";
import { Gender } from "../shared/enums/gender.enum";

export class CreateUserDto {

    id: number;
    
    @MaxLength(20)
    @MinLength(3)
    @IsString()
    @IsNotEmpty({message:"user name must be provided"})
    username: string;

    @IsNotEmpty()
    email:string;

    @IsNotEmpty()
    password:string;

    @IsNumber({allowInfinity:false,allowNaN:false,},{message:"Gender must be a number"})
    @IsEnum(Gender)
    @IsNotEmpty()
    gender: Gender;

    @IsISO8601()
    @IsNotEmpty()
    birthday: string;

    @MaxLength(20)
    @MinLength(3)
    @IsNotEmpty()
    @IsOptional()
    city : string;
}
