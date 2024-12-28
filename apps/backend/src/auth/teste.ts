import * as bcrypt from 'bcrypt';
import { PasswordHasherAdapter } from './password-hasher_adapter';

const password = 'sample';

async function test(): Promise<boolean> {
  const hasher = new PasswordHasherAdapter();

  const password = 'coco';

  const passwordHashered = await hasher.hash(password);

  const passwordCompared = await hasher.compare(password, passwordHashered);

  console.log(passwordCompared);
  return passwordCompared;
}

console.log(test());
