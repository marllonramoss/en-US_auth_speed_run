import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserDTO, UserLoginResponseDTO } from '@trainingapp/core';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async register(
    @Body() userData: { name: string; email: string; password: string },
  ): Promise<UserDTO> {
    return this.authService.register(
      userData.name,
      userData.email,
      userData.password,
    );
  }

  @Post('login')
  async login(
    @Body() userData: { email: string; password: string },
  ): Promise<UserLoginResponseDTO> {
    return this.authService.login(userData.email, userData.password);
  }
}
