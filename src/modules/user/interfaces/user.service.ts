import { ResponseData } from 'src/lib/response-data';
import { User } from '../entities/user.entity';
import { UpdateUserDto } from '../dto/update-user.dto';
import { CreateUserDto } from '../dto/create-user.dto';

export interface IRegistrResponseData {
  user: User;
  token: string;
}

export interface IUserService {
  create(createUserDto: CreateUserDto): Promise<ResponseData<IRegistrResponseData>>;
  findAll(): Promise<ResponseData<User[]>>;
  findOne(id: number): Promise<ResponseData<User>>;
  findByLogin(login: string): Promise<User | null>;
  findByPhone(phone: string): Promise<User | null>;
  update(id: number, updateUserDto: UpdateUserDto): Promise<ResponseData<User>>;
  remove(id: number): Promise<ResponseData<User>>;
}
