import { IsNotEmpty, IsUrl, MaxLength } from "class-validator";

export class CreatePostDto {

    @MaxLength(2200)
    @IsNotEmpty()
    text: string;


    @IsUrl(undefined,{message:"Image must be a valid url"})
    @IsNotEmpty()
    image:string;

    createdAt=new Date().toISOString();

    updatedAt=new Date().toISOString();

}
