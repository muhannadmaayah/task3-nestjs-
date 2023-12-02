import { IsNotEmpty, IsNumber, IsOptional, IsPositive, IsString, MaxLength } from "class-validator";
import { Post } from "src/posts/entities/post.entity";
import { User } from "src/users/entities/user.entity";

export class CreateCommentDto {

    @MaxLength(2200)
    @IsString()
    @IsNotEmpty()
    text: string;
  
    @IsPositive()
    @IsNumber()
    @IsNotEmpty()
    authorID: number;
  
    @IsPositive()
    @IsNumber()
    @IsOptional()
    replyToCommentID?: number;



}
