import { Injectable } from '@nestjs/common';
import { PasswordHasher } from '@trainingapp/core';
import * as bcrypt from 'bcrypt';

@Injectable()
export class PasswordHasherAdapter implements PasswordHasher {
  async hash(password: string): Promise<string> {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    return hashedPassword;
  }

  async compare(password: string, hash: string): Promise<boolean> {
    const result = await bcrypt.compare(password, hash);

    return result;
  }
}
