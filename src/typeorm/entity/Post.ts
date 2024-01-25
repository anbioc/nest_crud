import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { UserEntity } from "./user";

@Entity({name: 'posts', schema: 'public' } )
export class PostEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    desc: string;

    @ManyToOne(() => UserEntity, (user) => user.posts)
    user: UserEntity
}