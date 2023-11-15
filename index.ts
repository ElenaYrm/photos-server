import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { appConfig } from './src/constants';
import { sequelizeDB } from './src/db';
import { router } from './src/api/routes';

const PORT = appConfig.port;

const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use('/api', router);

const start = async (): Promise<void> => {
  try {
    await sequelizeDB.authenticate();
    console.log('Connection has been established successfully');
    // await sequelizeDB.sync({ force: true });
    await sequelizeDB.sync({ alter: true });
    console.log('All models were synchronized successfully');
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
  } catch (error) {
    console.log(error);
  }
};

start();
