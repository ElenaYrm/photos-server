import 'dotenv/config';

interface IApiConfig {
  port: string;
}

export const appConfig: IApiConfig = {
  port: process.env.PORT || '5000',
};
