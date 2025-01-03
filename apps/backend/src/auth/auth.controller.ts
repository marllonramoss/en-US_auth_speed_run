import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserDTO, UserLoginResponseDTO } from '@trainingapp/core';
import { AuthGuard } from '@nestjs/passport';

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

  @Get('google')
  @UseGuards(AuthGuard('google'))
  async googleLogin() {
    // Redireciona o usuário para o Google
  }

  // Recebe o callback do Google
  @Get('callback/google')
  @UseGuards(AuthGuard('google'))
  async googleCallback(@Req() req) {
    // O Google envia os dados do usuário autenticado para cá
    return {
      message: 'Login successful',
      user: req.user, // Dados do usuário retornados pelo GoogleStrategy
    };
  }
}
