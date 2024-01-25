import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from 'src/typeorm/entity/user';
import { UserController } from '../controller/user/user.controller';
import { UserService } from '../service/user-service/user-service.service';
import { ProfileController } from '../controller/profile/profile.controller';
import { ProfileService } from '../service/profile/profile.service';
import { Profile } from 'src/typeorm/entity/Profile';

@Module({
    imports: [TypeOrmModule.forFeature([UserEntity, Profile])],
    controllers: [UserController, ProfileController],
    providers: [UserService, ProfileService]
})
export class UserModule {}
