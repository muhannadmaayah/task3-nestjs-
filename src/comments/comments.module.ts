import { Module } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CommentsController } from './comments.controller';
import { UsersModule } from 'src/users/users.module';
import { PostsModule } from 'src/posts/posts.module';

@Module({
  controllers: [CommentsController],
  providers: [CommentsService],
  imports: [UsersModule,PostsModule],

  
})
export class CommentsModule {}
