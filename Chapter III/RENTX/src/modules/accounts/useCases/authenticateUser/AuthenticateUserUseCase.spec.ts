import { UsersRepositoryInMemory } from "@modules/accounts/repositories/in-memory/UsersRepositoryInMemory";
import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";
import { CreateUserUseCase } from "../createUser/CreateUserUseCase";
import { ICreateUserDTO } from "@modules/accounts/dtos/ICreateUserDTO";
import { AppError } from "@shared/errors/AppError";



let authenticateUserUseCase: AuthenticateUserUseCase;
let usersRepositoryInMemory: UsersRepositoryInMemory;
let createUserUseCase: CreateUserUseCase;

describe("Authenticate user", () => {

  beforeEach(() => {
    usersRepositoryInMemory = new UsersRepositoryInMemory();
    authenticateUserUseCase = new AuthenticateUserUseCase(usersRepositoryInMemory);
    createUserUseCase = new CreateUserUseCase(usersRepositoryInMemory);
  })

  it("should be able to authenticate an user", async () => {
    const user: ICreateUserDTO = {
      driver_license:"000123",
      email: "user@example.com",
      password: "1234",
      name: "User Teste",
    };

    await createUserUseCase.execute(user);

    const result = await authenticateUserUseCase.execute({
      email:user.email,
      password: user.password
    });

    expect(result).toHaveProperty("token")
  })


  it("should not be able to authenticate an no-existent user", () => {

    expect(async () =>{
      await authenticateUserUseCase.execute({
        email:"false@example.com",
        password:"964851"
      });
    }).rejects.toBeInstanceOf(AppError)
  })


  it("should not be able to authenticate with incorrect password", () => {

    expect(async () =>{

      const user : ICreateUserDTO = {
        driver_license: "99999",
        email: "user@example.com",
        password: "123456",
        name: "User Test Error",
      }

      await createUserUseCase.execute(user);

      await authenticateUserUseCase.execute({
        email:user.email,
        password:"IncorrectPassword"
      });
    }).rejects.toBeInstanceOf(AppError)
  })





})