import { IsNotEmpty } from "@nestjs/class-validator";

export class PostDTO {
    @IsNotEmpty()
    title: string;
    @IsNotEmpty()
    desc: string;
    
}