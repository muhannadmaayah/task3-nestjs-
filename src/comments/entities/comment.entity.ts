import { User } from "src/users/entities/user.entity";
import { Post } from "src/posts/entities/post.entity";
import { CreateCommentDto } from "../dto/create-comment.dto";
import { UpdateCommentDto } from "../dto/update-comment.dto";

export class Comment {


    text:string;

    author:User;

    post:Post;

    replyToComment?: Comment;

    comments: Comment[]=[];

    constructor(text: string, replyToComment?: Comment) {
        this.text = text;
        this.replyToComment = replyToComment;
    }
   
    updateOne(updateCommentDto:UpdateCommentDto){
        Object.assign(this,{...this, ...updateCommentDto});
    }

    addAuthor(author:User){
        this.author=author;
    }
   
}
