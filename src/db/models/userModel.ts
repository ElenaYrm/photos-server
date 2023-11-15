import { CreationOptional, DataTypes, InferAttributes, InferCreationAttributes, Model } from 'sequelize';
import { sequelizeDB } from '../index';

interface IUserModel extends Model<InferAttributes<IUserModel>, InferCreationAttributes<IUserModel>> {
  email: string;
  password: string;
  user_name: string;
  id: CreationOptional<number>;
}

export const UserModel = sequelizeDB.define<IUserModel>('user', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  email: { type: DataTypes.STRING(30), unique: true, allowNull: false },
  password: { type: DataTypes.STRING, allowNull: false },
  user_name: { type: DataTypes.STRING(30), allowNull: false },
});
