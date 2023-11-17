import { IUserModel } from '../db/models/userModel';

export interface IUserData {
  email: string;
  password: string;
  username: string;
}

export interface ITokens {
  accessToken: string;
  refreshToken: string;
}

export interface ILoginResult extends ITokens {
  user: IUserModel;
}

export interface ILoginResponse {
  accessToken: string;
  user: {
    id: number;
    email: string;
    username: string;
  };
}
