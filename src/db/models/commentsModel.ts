import { CreationOptional, DataTypes, InferAttributes, InferCreationAttributes, Model } from 'sequelize';
import { sequelizeDB } from '../index';

export interface ICommentsModel
  extends Model<InferAttributes<ICommentsModel>, InferCreationAttributes<ICommentsModel>> {
  id: CreationOptional<number>;
  text: string;
}

export const CommentsModel = sequelizeDB.define<ICommentsModel>('comments', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  text: { type: DataTypes.TEXT, allowNull: false },
});
