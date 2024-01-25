import { isURL } from '@nestjs/class-validator';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PostDTO } from 'src/posts/dto/Post.dto';
import { PostEntity } from 'src/typeorm/entity/Post';
import { UserEntity } from 'src/typeorm/entity/user';
import { Repository } from 'typeorm';

@Injectable()
export class PostService {
    constructor(@InjectRepository(PostEntity) private postRepository: Repository<PostEntity>,
    @InjectRepository(UserEntity) private userRepository: Repository<UserEntity>) {
    }


    async create(userid: number, post: PostDTO) {
        const user = await this.userRepository.findOneBy({id: userid});

        if (! user) {
            throw new HttpException('User not found', HttpStatus.BAD_REQUEST);
        }

        const instance = this.postRepository.create({
            ...post,
            user: user,
        });
       return await this.postRepository.save(instance);
    }
}
