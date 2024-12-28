import { Injectable } from '@nestjs/common';
import {
  UserDTO,
  UserLogin,
  UserLoginResponseDTO,
  UserRegister,
} from '@trainingapp/core';
import { PasswordHasherAdapter } from './password-hasher_adapter';
import { IdGeneratorAdapter } from './id-generator_adapter';
import { UserRepository } from './user_repository';

@Injectable()
export class AuthService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly passwordHasher: PasswordHasherAdapter,
    private readonly idGenerator: IdGeneratorAdapter,
  ) {}
  async register(
    name: string,
    email: string,
    password: string,
  ): Promise<UserDTO> {
    const trimmedEmail = email.trim();
    const trimmedPassword = password.trim();
    const userRegister = new UserRegister(
      this.idGenerator,
      this.userRepository,
      this.passwordHasher,
    );
    return userRegister.execute(name, trimmedEmail, trimmedPassword);
  }

  async login(email: string, password: string): Promise<UserLoginResponseDTO> {
    const userLogin = new UserLogin(this.userRepository, this.passwordHasher);
    const trimmedEmail = email.trim();
    const trimmedPassword = password.trim();

    return userLogin.execute(trimmedEmail, trimmedPassword);
  }
}
