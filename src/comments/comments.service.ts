import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { UsersService } from 'src/users/users.service';
import { PostsService } from 'src/posts/posts.service';
import { Comment } from './entities/comment.entity';
import { text } from 'stream/consumers';

@Injectable()
export class CommentsService {
  constructor (private readonly usersService: UsersService,
    private readonly postsService:PostsService,){}

  create(createCommentDto: CreateCommentDto,postID:number) {
    
    const author= this.usersService.findOne(createCommentDto.authorID);
    const post= this.postsService.findOne(postID);

    if(!author || !post) throw new HttpException('user or post not found', HttpStatus.BAD_REQUEST);
    
    const comment = new Comment(createCommentDto.text,  createCommentDto.replyToCommentID ? new Comment(createCommentDto.text) : undefined,);

    if (comment.replyToComment) {
      comment.replyToComment.comments.push(comment);
    }

    comment.addAuthor(author);
  
     
    return {statusCode: HttpStatus.CREATED, message:"Created post Successfully"};



  }

  findAll() {
    return `This action returns all comments`;
  }

  findOne(id: number) {
    return `This action returns a #${id} comment`;
  }

  update(id: number, updateCommentDto: UpdateCommentDto) {
    return `This action updates a #${id} comment`;
  }

  remove(id: number) {
    return `This action removes a #${id} comment`;
  }
}
