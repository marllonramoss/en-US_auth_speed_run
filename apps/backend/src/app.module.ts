import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { DbModule } from './db/db.module';
import { AuthModule } from './auth/auth.module';
import { RecoveryModule } from './recovery/recovery.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    DbModule,
    AuthModule,
    RecoveryModule,
    ConfigModule.forRoot({ isGlobal: true, envFilePath: './config/.env' }),
  ],
  controllers: [AppController],
})
export class AppModule {}
