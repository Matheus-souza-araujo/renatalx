import { AppError } from "@errors/AppError";
import { UserRepositoryInMemory } from "@modules/accounts/repositories/in-memory/UserRepositoryInMemory";

import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { CreateUserUseCase } from "../createUser/CreateUseCase";
import { AuthenticateUserCase } from "./AuthenticateUserCase";

let authenticateUserUseCase: AuthenticateUserCase;
let userRepositoryInMemory: UserRepositoryInMemory;
let createUserUseCase: CreateUserUseCase;

describe("Authenticate User", () => {
  beforeEach(() => {
    userRepositoryInMemory = new UserRepositoryInMemory();
    authenticateUserUseCase = new AuthenticateUserCase(userRepositoryInMemory);
    createUserUseCase = new CreateUserUseCase(userRepositoryInMemory);
  });
  it("should be able authenticate an user", async () => {
    const user: ICreateUserDTO = {
      driver_license: "0202156",
      email: "user@teste.com",
      password: "1234",
      name: "User Test",
    };

    await createUserUseCase.execute(user);

    const result = await authenticateUserUseCase.execute({
      email: user.email,
      password: user.password,
    });

    expect(result).toHaveProperty("token");
  });

  it("should not be able to authenticate an nonexistent user", async () => {
    expect(async () => {
      await authenticateUserUseCase.execute({
        email: "false@email.com",
        password: "123456",
      });
    }).rejects.toBeInstanceOf(AppError);
  });

  it("should not be able to authenticate with incorrect password", async () => {
    expect(async () => {
      const user: ICreateUserDTO = {
        driver_license: "99999",
        email: "user@user.com",
        password: "1234",
        name: "User Test Error",
      };

      await createUserUseCase.execute(user);

      await authenticateUserUseCase.execute({
        email: user.email,
        password: "incorrect password",
      });
    }).rejects.toBeInstanceOf(AppError);
  });
});
