import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from 'src/typeorm/entity/user';
import { UserDto } from 'src/users/dto/User.dto';
import { UserType } from 'src/users/types/User.type';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {

    constructor(@InjectRepository(UserEntity) private userRepository: Repository<UserEntity>) {
    }

    async GetUsers() {
        return await this.userRepository.find({relations: ['profile', 'posts']});
    }

    async getUser(id: number) {
        return await this.userRepository.find({relations:['profile'], where: {id}})
    }

    async createUser(user: UserType) {
        const instance =  this.userRepository.create({
            ...user,
            createdAt: new Date()
        });
        return await this.userRepository.save(instance);
    }

    async updateUserByID(id: number, user: UserDto) {
        return await this.userRepository.update({
            id
        }, {...user});
    }

    async deleteUser(id: number) {
        return await this.userRepository.delete({
            id: id
        });
    }
}
