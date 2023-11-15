import { CreationOptional, DataTypes, InferAttributes, InferCreationAttributes, Model } from 'sequelize';
import { sequelizeDB } from '../index';

export interface IPhotoModel extends Model<InferAttributes<IPhotoModel>, InferCreationAttributes<IPhotoModel>> {
  id: CreationOptional<number>;
  url: string;
}

export const PhotoModel = sequelizeDB.define<IPhotoModel>('photo', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  url: { type: DataTypes.TEXT, allowNull: false },
});
