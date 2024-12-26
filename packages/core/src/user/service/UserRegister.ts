import { UserDTO } from '../dto/user.dto';
import User from '../model/User';
import { IdGenerator } from '../provider/IdGenerator';
import { PasswordHasher } from '../provider/PasswordHasher';
import { UserRepository } from '../provider/UserRepository';

export class UserRegister {
    constructor(
        private readonly idGenerator: IdGenerator,
        private readonly userRepository: UserRepository,
        private readonly passwordHasher: PasswordHasher,
    ) {}

    async execute(
        name: string,
        email: string,
        password: string,
    ): Promise<UserDTO> {
        this.validateInput(name, email, password);

        const existingUser = await this.userRepository.findByEmail(email);
        if (existingUser) {
            throw new Error('Email already in use');
        }

        const hashedPassword = await this.passwordHasher.hash(password);

        const idGenerated = await this.idGenerator.generate();

        const newUser = new User(idGenerated, name, email, hashedPassword);
        await this.userRepository.save(newUser);

        return {
            id: newUser.id,
            name: newUser.name,
            email: newUser.email,
        };
    }

    private validateInput(name: string, email: string, password: string) {
        if (!name || !email || !password) {
            throw new Error('All fields are required.');
        }
    }
}
