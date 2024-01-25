import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { UserDto } from 'src/users/dto/User.dto';
import { UserModule } from 'src/users/module/user.module';
import { UserService } from 'src/users/service/user-service/user-service.service';
import { UserType } from 'src/users/types/User.type';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  getUsers() {
    return this.userService.GetUsers();
  }

  @Get("/:id")
  async getUser(@Param("id", ParseIntPipe) id: number) {
    return await this.userService.getUser(id);
  }

  @Post()
  async createUser(@Body() user: UserDto) {
    const { consfirmPassword, ...userDetail } = user;
    return await this.userService.createUser(userDetail);
  }

  @Put(':id')
  async updateUserById(@Param('id', ParseIntPipe) id: number,
  @Body() user: UserDto){
    return await this.userService.updateUserByID(id, user);
  }

  @Delete(':id')
  async deleteUserById(@Param('id', ParseIntPipe) id: number) {
    return await this.userService.deleteUser(id);
  }

  
}
