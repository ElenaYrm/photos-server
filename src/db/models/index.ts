import { UserModel } from './userModel';
import { PhotoModel } from './photoModel';
import { CommentsModel } from './commentsModel';

UserModel.hasMany(CommentsModel);
CommentsModel.belongsTo(UserModel);

PhotoModel.hasMany(CommentsModel);
CommentsModel.belongsTo(PhotoModel);

export { UserModel, CommentsModel, PhotoModel };
