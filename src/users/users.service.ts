import { HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  users:User[]=[];
  async create(createUserDto: CreateUserDto) {
    const {password}=createUserDto;
    let length = this.users.length;
    const hashedPassword=await bcrypt.hash(password,10);
    console.log(hashedPassword);
    const user=new User({...createUserDto, id: length++, password:hashedPassword});
   this.users.push(user);
    return {statusCode: HttpStatus.CREATED, message:"Created User Successfully"}
  }

  findAll() {
    return this.users;
  }

  findOne(id: number) {
    return this.users.find((user)=>user.id===id);
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    const user= this.users.find((user)=>user.id===id);
    user.updateOne(updateUserDto);
    return {data:user, message:"Updated User Successfully", statusCode:HttpStatus.OK};
  }

  remove(id: number) {
    //task 3 {1}
    const index=this.users.findIndex(user=>user.id===id);

    if(index===-1)
    {
      return "user not found";
    }
    this.users.splice(index, 1)[0];
    return `This action removes a #${id} user`;
  }
}
