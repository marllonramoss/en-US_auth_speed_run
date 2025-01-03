import { Module } from '@nestjs/common';
import { RecoveryController } from './recovery.controller';
import { RecoveryService } from './recovery.service';
import { AuthModule } from 'src/auth/auth.module';
import { TokenGeneratorAdapter } from './token-generator-adapter';
import { EmailSenderAdapter } from './email-sender-adapter';

@Module({
  controllers: [RecoveryController],
  providers: [RecoveryService, TokenGeneratorAdapter, EmailSenderAdapter],
  imports: [AuthModule],
})
export class RecoveryModule {}
