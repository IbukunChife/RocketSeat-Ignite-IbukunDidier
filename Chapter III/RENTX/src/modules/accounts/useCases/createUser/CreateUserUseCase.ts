import { inject, injectable } from "tsyringe";
import {hash} from "bcrypt";

import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { IUsersRepository } from "../../repositories/IUsersRepository";

@injectable()
class CreateUserUseCase {

  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ){};
//  async execute({name, username, password, email,driver_license}: ICreateUserDTO): Promise<void>{
  async execute({name, password, email,driver_license}: ICreateUserDTO): Promise<void>{

    const userAlreadyExists = await this.usersRepository.findByEmail(email);

    if (userAlreadyExists){
      throw new Error("User already exists")
    }

    const passwordhash = await hash(password, 8 );

    await this.usersRepository.create({
      name,
      // username, 
      password: passwordhash, 
      email,
      driver_license
    })

  }

}

export {CreateUserUseCase}