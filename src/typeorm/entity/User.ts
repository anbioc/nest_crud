import { Column, Entity, JoinColumn, JoinTable, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Profile } from "./Profile";
import { Post } from "@nestjs/common";
import { PostEntity } from "./Post";

 @Entity({
    name: 'users'
 })
 export class UserEntity {
    @PrimaryGeneratedColumn({
      type: 'bigint'
    })
    id: number;

    @Column({unique: true})
    username: string;

    @Column()
    password: string;

    @Column()
    createdAt: Date;

    @Column({ nullable: true })
    authStrategy: string;

    @OneToOne(() => Profile)
    @JoinColumn()
    profile: Profile;
   
    @OneToMany(() => PostEntity, (post)=> post.user)
    posts: PostEntity[]
 }