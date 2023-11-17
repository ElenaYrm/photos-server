import { UserModel } from './userModel';
import { PhotoModel } from './photoModel';
import { CommentsModel } from './commentsModel';

UserModel.hasMany(CommentsModel, { foreignKey: 'userId' });
CommentsModel.belongsTo(UserModel, { foreignKey: 'userId' });

PhotoModel.hasMany(CommentsModel, { foreignKey: 'photoId' });
CommentsModel.belongsTo(PhotoModel, { foreignKey: 'photoId' });

export { UserModel, CommentsModel, PhotoModel };
