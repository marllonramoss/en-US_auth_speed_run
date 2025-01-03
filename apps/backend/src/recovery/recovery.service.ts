import { Injectable, NotFoundException } from '@nestjs/common';
import { UserRepository } from 'src/auth/user_repository';
import { TokenGeneratorAdapter } from './token-generator-adapter';
import { EmailSenderAdapter } from './email-sender-adapter';
import {RecoveryResponseDTO, UserPasswordRecovery} from '@trainingapp/core'

@Injectable()
export class RecoveryService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly tokenGenerator: TokenGeneratorAdapter,
    private readonly emailSender: EmailSenderAdapter
  ) {}

  async sendRecoveryEmail(email: string): Promise<RecoveryResponseDTO> {
    const userPasswordRecovery = new UserPasswordRecovery(this.userRepository, this.tokenGenerator, this.emailSender)

    return await userPasswordRecovery.execute(email)
  }
}
