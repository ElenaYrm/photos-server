import jwt from 'jsonwebtoken';
import { appConfig, tokenDuration } from '../../constants';
import { ITokens } from '../../types/interfaces';

interface IPayload {
  id: number;
  email: string;
}

class TokenService {
  generateTokens(payload: IPayload): ITokens {
    const accessToken = jwt.sign(payload, appConfig.accessSecret, { expiresIn: `${tokenDuration}m` });
    const refreshToken = jwt.sign(payload, appConfig.refreshSecret, { expiresIn: `${tokenDuration}d` });

    return { accessToken, refreshToken };
  }

  validateAccessToken(token: string): IPayload | null {
    try {
      return jwt.verify(token, appConfig.accessSecret) as IPayload;
    } catch (error) {
      return null;
    }
  }

  validateRefreshToken(token: string): IPayload | null {
    try {
      return jwt.verify(token, appConfig.refreshSecret) as IPayload;
    } catch (error) {
      return null;
    }
  }
}

export default new TokenService();
