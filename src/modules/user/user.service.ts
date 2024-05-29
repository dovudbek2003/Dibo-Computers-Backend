import { Inject, Injectable, Res } from '@nestjs/common';
import { IUserRepository } from './interfaces/user.repository';
import { User } from './entities/user.entity';
import { ResponseData } from 'src/lib/response-data';
import { IRegistrResponseData, IUserService } from './interfaces/user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserAlreadyExist, UserNotFound } from './exceptions/user.exception';
import { hashPassword } from 'src/lib/bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UserService implements IUserService {
  constructor(
    @Inject('IUserRepository') private userRepository: IUserRepository,
    private jwtService: JwtService,
  ) {}

  // CREATE
  async create(
    createUserDto: CreateUserDto,
  ): Promise<ResponseData<IRegistrResponseData>> {
    const foundUserByLogin = await this.findByLogin(createUserDto.login);
    const foundUserByPhone = await this.findByPhone(createUserDto.phone);

    if (foundUserByLogin) {
      throw new UserAlreadyExist();
    }

    if (foundUserByPhone) {
      throw new UserAlreadyExist();
    }

    const newUser = new User();
    newUser.firstName = createUserDto.firstName;
    newUser.lastName = createUserDto.lastName;
    newUser.phone = createUserDto.phone;
    newUser.login = createUserDto.login;
    newUser.password = await hashPassword(createUserDto.password);

    const createdUser = await this.userRepository.create(newUser);
    const token = await this.jwtService.signAsync({ id: createdUser.id });

    return new ResponseData<IRegistrResponseData>('create', 201, {
      user: createdUser,
      token,
    });
  }

  // READ
  async findAll(): Promise<ResponseData<User[]>> {
    const users = await this.userRepository.findAll();
    return new ResponseData<User[]>('get all', 200, users);
  }
  async findOne(id: number): Promise<ResponseData<User>> {
    const user = await this.userRepository.findById(id);
    if (!user) {
      throw new UserNotFound();
    }

    return new ResponseData<User>('get one', 200, user);
  }
  async findByLogin(login: string): Promise<User> {
    return await this.userRepository.findByLogin(login);
  }
  async findByPhone(phone: string): Promise<User> {
    return await this.userRepository.findByPhone(phone);
  }

  // UPDATE
  async update(
    id: number,
    updateUserDto: UpdateUserDto,
  ): Promise<ResponseData<User>> {
    const foundUserByLogin = await this.findByLogin(updateUserDto.login);
    const foundUserByPhone = await this.findByPhone(updateUserDto.phone);

    const { data: foundUserById } = await this.findOne(id);

    if (foundUserByLogin && foundUserByLogin.id !== foundUserById.id) {
      throw new UserAlreadyExist();
    }

    if (foundUserByPhone && foundUserByPhone.id !== foundUserById.id) {
      throw new UserAlreadyExist();
    }

    foundUserById.firstName = updateUserDto.firstName;
    foundUserById.lastName = updateUserDto.lastName;
    foundUserById.phone = updateUserDto.phone;
    foundUserById.login = updateUserDto.login;
    foundUserById.password = await hashPassword(updateUserDto.password);

    const updatedUser = await this.userRepository.update(foundUserById);

    return new ResponseData<User>('update', 200, updatedUser);
  }

  // DELETE
  async remove(id: number): Promise<ResponseData<User>> {
    await this.findOne(id);

    const deletedUser = await this.userRepository.remove(id);

    return new ResponseData<User>('delete', 200, deletedUser);
  }
}
