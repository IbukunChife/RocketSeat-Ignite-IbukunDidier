import {injectable,inject} from 'tsyringe';
import { getRepository, Repository } from 'typeorm';
import {IUsersRepository } from "@modules/accounts/repositories/IUsersRepository";
import { ICreateUserDTO } from "@modules/accounts/dtos/ICreateUserDTO";
import { User } from '@modules/accounts/infra/typeorm/entities/User';



class UsersRepository implements IUsersRepository {
  private repository: Repository<User>;

  constructor(){
    this.repository = getRepository(User);
  }


  async create({
    name,
    // username,
    email, 
    driver_license, 
    password, id, avatar}: ICreateUserDTO): Promise<void>{
    
    const user = this.repository.create({
      name,
      // username,
      email,
      driver_license,
      password,
      avatar,
      id
    })
    await this.repository.save(user);
  }


  async findByEmail(email: string): Promise<User> {
    const user = await this.repository.findOne({ email });
    return user;
  }

  async findById(id: string): Promise<User> {
    const user = await this.repository.findOne(id);
    return user;
  }
}




export{UsersRepository}