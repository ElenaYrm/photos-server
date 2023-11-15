import { Sequelize } from 'sequelize';

export const sequelizeDB = new Sequelize({
  dialect: 'sqlite',
  storage: 'data/database.sqlite',
});
