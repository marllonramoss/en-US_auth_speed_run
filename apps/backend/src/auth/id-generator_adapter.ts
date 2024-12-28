import { Injectable } from '@nestjs/common';
import { IdGenerator } from '@trainingapp/core';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class IdGeneratorAdapter implements IdGenerator {
  generate(): string {
    return uuidv4();
  }
}
