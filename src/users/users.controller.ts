import {Body, Controller, Get, Post} from "@nestjs/common"
import {UsersService} from "./users.service"
import {CreateUserDto} from "./dto/create-user.dto";
import {LoginUserDto} from "./dto/login-user.dto";

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

@Post('/register')
    create(@Body() createUserDto: CreateUserDto) {
        return this.usersService.create(createUserDto)
}

@Post('/login')
    login(@Body() loginUserDto: LoginUserDto){
        return this.usersService.logIn(loginUserDto)
}

@Get()
    getAll() {
        return this.usersService.getAll()
}
}