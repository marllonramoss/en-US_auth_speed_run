import { Injectable } from '@nestjs/common';
import { TokenGenerator } from '@trainingapp/core';
import * as jwt from 'jsonwebtoken'

@Injectable()
export class TokenGeneratorAdapter implements TokenGenerator {
  generate(userId: string): string {
    return jwt.sign({ id: userId }, 'JWTSECRET', {
      expiresIn: '1h',
    });
  }
}

