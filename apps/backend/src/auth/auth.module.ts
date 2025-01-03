import { Module } from '@nestjs/common';
import { UserRepository } from './user_repository';
import { AuthController } from './auth.controller';
import { DbModule } from 'src/db/db.module';
import { AuthService } from './auth.service';
import { IdGeneratorAdapter } from './id-generator_adapter';
import { PasswordHasherAdapter } from './password-hasher_adapter';
import { GoogleStrategy } from './google-strategy';
import { PassportModule } from '@nestjs/passport';


@Module({
  providers: [
    UserRepository,
    AuthService,
    IdGeneratorAdapter,
    PasswordHasherAdapter,
    GoogleStrategy
   
  ],
  controllers: [AuthController],
  imports: [DbModule, PassportModule.register({defaultStrategy: 'google'})],
  exports: [UserRepository],
})
export class AuthModule {}
