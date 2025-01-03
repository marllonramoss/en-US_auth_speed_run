import { Body, Controller, Post } from '@nestjs/common';

import { RecoveryService } from './recovery.service';
import { RecoveryResponseDTO } from '@trainingapp/core';

@Controller('recovery')
export class RecoveryController {
  constructor(private readonly recoveryService: RecoveryService) {}

  @Post('send-email')
  async sendRecoveryEmail(
    @Body('email') email: string,
  ): Promise<RecoveryResponseDTO> {
    return await this.recoveryService.sendRecoveryEmail(email);
  }
}
