import { UserDTO } from '../dto/user.dto';
import User from '../model/User';

export interface UserRepository {
    save(user: User): Promise<UserDTO>;
    findByEmail(email: string): Promise<User | null>;
}
