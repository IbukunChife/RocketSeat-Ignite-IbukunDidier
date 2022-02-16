import {container} from "tsyringe";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import {CreateUserUseCase} from "./CreateUserUseCase";
import {Request, Response} from "express";


class CreateUserController {

  async handle(request: Request, response: Response): Promise<Response> {

    const { name,
      username,
      password,
      email,
      driver_license} = request.body;

    const  createUserUseCase = container.resolve(CreateUserUseCase)

    await createUserUseCase.execute({
      name, 
      // username, 
      password, 
      email, 
      driver_license
    });

    return response.status(201).send()
  }


}

export {CreateUserController}