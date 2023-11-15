import 'dotenv/config';

interface IApiConfig {
  port: string;
  accessSecret: string;
  refreshSecret: string;
}

export const appConfig: IApiConfig = {
  port: process.env.PORT || '5000',
  accessSecret: process.env.JWT_ACCESS_SECRET!,
  refreshSecret: process.env.JWT_REFRESH_SECRET!,
};
