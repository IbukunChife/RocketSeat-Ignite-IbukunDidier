import { inject, injectable } from "tsyringe";
import {hash} from "bcrypt";

import { AppError } from "@shared/errors/AppError";
import { ICreateUserDTO } from "@modules/accounts/dtos/ICreateUserDTO";
import { IUsersRepository } from "@modules/accounts/repositories/IUsersRepository";

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
      throw new AppError("User already exists")
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