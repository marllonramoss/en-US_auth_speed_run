import { RecoveryResponseDTO } from '../dto/recoveryResponse.DTO';
import { EmailSender } from '../provider/EmailSender';
import { TokenGenerator } from '../provider/TokenGenerator';
import { UserRepository } from '../provider/UserRepository';

export class UserPasswordRecovery {
    constructor(
        private readonly userRepository: UserRepository,
        private readonly tokenGenerator: TokenGenerator,
        private readonly emailSender: EmailSender,
    ) {}

    async execute(email: string): Promise<RecoveryResponseDTO> {
        this.validateInput(email);

        const user = await this.userRepository.findByEmail(email);
        if (!user) {
            throw new Error('User not found');
        }

        const token = this.tokenGenerator.generate(user.id);
        await this.emailSender.sendEmail(
            email,
            'Password Recovery',
            `Click here to define a new password: http://seuapp.com/reset-password?token=${token}`,
        );

        return { message: 'Success - Email has been sended' };
    }

    private validateInput(email: string) {
        if (!email) {
            throw new Error('Email field is required');
        }
    }
}
