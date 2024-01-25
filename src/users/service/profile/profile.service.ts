import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Profile } from 'src/typeorm/entity/Profile';
import { UserEntity } from 'src/typeorm/entity/user';
import { ProfileType } from 'src/users/types/Profile.type';
import { Repository } from 'typeorm';

@Injectable()
export class ProfileService {
  constructor(
    @InjectRepository(Profile) private profileRepository: Repository<Profile>,
    @InjectRepository(UserEntity) private userRepository: Repository<UserEntity>,
  ) {}

  async createProfile(userId: number, profile: ProfileType) {
    const user = await this.userRepository.findOneBy({ id: userId });
    if (!user) {
      throw new HttpException('User not found', HttpStatus.BAD_REQUEST);
    }
    
    const instance = this.profileRepository.create({
      ...profile
    });
    const createProfile = await this.profileRepository.save(instance);
    user.profile = createProfile;
    return await this.userRepository.save(user);
  }
}
