import { User } from "src/users/entities/user.entity";
import { CreatePostDto } from "../dto/create-post.dto";
import { UpdatePostDto } from "../dto/update-post.dto";

export class Post {
    author:User;

    text: string;

    image:string;//URL we will validate it

    createdAt: string;//time of creation

    updatedAt:string;//last date it was updated

    constructor(createPostDto: CreatePostDto){

        Object.assign(this,createPostDto);

    }
   
    updateOne(updatePostDto:UpdatePostDto){
        Object.assign(this,{...this, ...updatePostDto});
    }

    addAuthor(author:User){
        this.author=author;
    }
}
