import { Body, Controller, Param, ParseIntPipe, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { PostDTO } from 'src/posts/dto/Post.dto';
import { PostService } from 'src/posts/service/post/post.service';

@Controller('post')
export class PostController {
    constructor(private postService: PostService) {

    }

    @Post('create/:id')
    @UsePipes(new ValidationPipe())
    async createPost(@Body() post: PostDTO, @Param('id', ParseIntPipe) id: number ) {
        return await this.postService.create(id, post);
    }
}
