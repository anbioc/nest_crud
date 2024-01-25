import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from 'src/typeorm/entity/user';
import { PostController } from 'src/posts/contrller/post/post.controller';
import { PostService } from 'src/posts/service/post/post.service';
import { PostEntity } from 'src/typeorm/entity/Post';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity, PostEntity])],
  controllers: [PostController],
  providers: [PostService],
})
export class PostModule {}
