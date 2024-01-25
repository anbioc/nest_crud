import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { UserEntity } from './typeorm/entity/user';
import { UserModule } from './users/module/user.module';
import { Profile } from './typeorm/entity/Profile';
import { PostEntity } from './typeorm/entity/Post';
import { PostModule } from './posts/module/post/post.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host:'localhost',
    port:3306,
    username: "root",
    password: "1qrt",
    database: 'nest_test',
    entities: [UserEntity, Profile, PostEntity],
    synchronize: true
  }),
ConfigModule.forRoot(),
UserModule, PostModule],
})
export class AppModule {}
