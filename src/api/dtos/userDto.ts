import { ILoginResponse, ILoginResult } from '../../types/interfaces';

export class UserDto {
  accessToken: string;
  userId: number;
  username: string;
  email: string;

  constructor(data: ILoginResult) {
    this.accessToken = data.accessToken;
    this.userId = data.user.id;
    this.username = data.user.username;
    this.email = data.user.email;
  }

  getUser(): ILoginResponse {
    return {
      accessToken: this.accessToken,
      user: {
        id: this.userId,
        username: this.username,
        email: this.email,
      },
    };
  }
}
