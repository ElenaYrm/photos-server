import bcrypt from 'bcrypt';
import { ILoginResult, ITokens, IUserData } from '../../types/interfaces';
import { UserModel } from '../../db/models';
import { ApiError } from '../../error';
import TokenService from './tokenService';

class UserService {
  async signup(newUser: IUserData): Promise<ILoginResult> {
    const existsUser = await UserModel.findOne({ where: { email: newUser.email } });
    if (existsUser) {
      throw ApiError.BadRequest('User with provided email is exist');
    }

    const existsUsername = await UserModel.findOne({ where: { username: newUser.username } });
    if (existsUsername) {
      throw ApiError.BadRequest('User with provided username is exist');
    }

    const hashedPassword = await bcrypt.hash(newUser.password, 10);
    const user = await UserModel.create({ ...newUser, password: hashedPassword });

    const tokens: ITokens = TokenService.generateTokens({ id: user.id, email: user.email });
    return { ...tokens, user };
  }

  async login(email: string, password: string): Promise<ILoginResult> {
    const user = await UserModel.findOne({ where: { email } });
    if (!user) {
      throw ApiError.BadRequest('User with provided email is not found');
    }

    const isSamePassword = await bcrypt.compare(password, user.password);
    if (!isSamePassword) {
      throw ApiError.BadRequest('Password is incorrect');
    }

    const tokens = TokenService.generateTokens({ id: user.id, email: user.email });
    return { ...tokens, user };
  }

  async refresh(refreshToken: string): Promise<ILoginResult> {
    if (!refreshToken) throw ApiError.UnauthorizedError();

    const userData = TokenService.validateRefreshToken(refreshToken);
    if (!userData) throw ApiError.UnauthorizedError();

    const user = await UserModel.findByPk(userData.id);
    if (!user) throw ApiError.UnauthorizedError();

    const tokens = TokenService.generateTokens({ id: user.id, email: user.email });
    return { ...tokens, user };
  }
}

export default new UserService();
