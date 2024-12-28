import { UserLoginResponseDTO } from '../dto/UserLoginResponse.DTO';
import { PasswordHasher } from '../provider/PasswordHasher';
import { UserRepository } from '../provider/UserRepository';

export class UserLogin {
    constructor(
        private readonly userRepository: UserRepository,
        private readonly passwordHasher: PasswordHasher,
    ) {}

    async execute(
        email: string,
        password: string,
    ): Promise<UserLoginResponseDTO> {
        this.validateInput(email, password);

        const userFounded = await this.userRepository.findByEmail(email);

        if (!userFounded) {
            throw new Error('Email not founded - Invalid Email or Password');
        }

        const passwordValid = await this.passwordHasher.compare(
            password,
            userFounded.password,
        );

        if (!passwordValid) {
            throw new Error('Password not correct - Invalid Email or Password');
        }

        const responseLogin = {
            id: userFounded.id,
            email: userFounded.email,
        };

        return responseLogin;
    }

    private validateInput(email: string, password: string) {
        if (!email || !password) {
            throw new Error('All fields are required.');
        }
    }
}
