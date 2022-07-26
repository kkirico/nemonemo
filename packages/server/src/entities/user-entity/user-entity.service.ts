import { UserModel } from '@models/user/user.model';
import { UserDocument } from '@models/user/user.schema';
import { Injectable } from '@nestjs/common';
import { CreateUserDto } from 'src/dto/user/create-user.dto';
import { FindUserDto } from 'src/dto/user/find-user.dto';
import { HasUserDto } from 'src/dto/user/has-user.dto';
import { UpdateUserDto } from 'src/dto/user/update-user.dto';

@Injectable()
export class UserEntityService {
  constructor(private readonly userModel: UserModel) {}

  createUser(createUserDto: CreateUserDto): Promise<UserDocument> {
    return this.userModel.createUser(createUserDto);
  }

  findUser(findUserDto: FindUserDto): Promise<UserDocument> {
    return this.userModel.findUser(findUserDto);
  }

  hasUser(hasUserDto: HasUserDto): boolean {
    return this.userModel.hasUser(hasUserDto);
  }

  updateUser(updateUserDto: UpdateUserDto): boolean {
    return this.userModel.updateUser(updateUserDto);
  }

}
