import {Injectable} from "@nestjs/common"
import { InjectRepository } from '@nestjs/typeorm'
import {User} from "./user.entity"
import {Repository} from "typeorm"
import {CreateUserDto} from "./dto/create-user.dto";
import {LoginUserDto} from "./dto/login-user.dto";

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>){}

    async create(createUserDto: CreateUserDto): Promise<User> {

        try{
            return this.userRepository.save(createUserDto)
        }
        catch (error) {
            console.log(error.code)
        }
    }

    async getAll(): Promise<User[]> {
        return await this.userRepository.find()
    }

    async logIn(loginUserDto: LoginUserDto): Promise<User> {
        const data = await this.userRepository.findOne({
            where:{
                username: loginUserDto.username
            }
            })

        if (data.password === loginUserDto.password){
            return data
        }
        else{
            return null
        }
    }
}