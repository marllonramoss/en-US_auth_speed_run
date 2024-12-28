import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/db/prisma.service';
import { User, UserDTO, UserRepository as UserRepo } from '@trainingapp/core';

@Injectable()
export class UserRepository implements UserRepo {
  constructor(private readonly prisma: PrismaService) {}

  async save(user: User): Promise<UserDTO> {
    const savedUser = await this.prisma.user.create({
      data: user,
    });
    return {
      email: savedUser.email,
      name: savedUser.name,
      id: savedUser.id,
    };
  }

  async findByEmail(email: string): Promise<User | null> {
    const foundedUser = await this.prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    return foundedUser;
  }
}
