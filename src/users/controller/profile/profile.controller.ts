import { Body, Controller, Param, ParseIntPipe, Post, ValidationPipe } from '@nestjs/common';
import { ProileDto } from 'src/users/dto/Profile.dto';
import { ProfileService } from 'src/users/service/profile/profile.service';

@Controller('profile')
export class ProfileController {
    constructor(private profileService: ProfileService) {

    }
    @Post('create/:id')
    async createUserProfile(@Param('id', ParseIntPipe) id: number, 
    @Body() profile: ProileDto){
        return await this.profileService.createProfile(id, profile);
    }
}
