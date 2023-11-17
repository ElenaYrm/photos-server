import { CommentsModel, ICommentsModel } from '../../db/models/commentsModel';
import { ApiError } from '../../error';
import { UserModel } from '../../db/models';

interface INewComment {
  userId: number;
  photoId: number;
  text: string;
}

class CommentsService {
  async getByPhotoId(id: number): Promise<ICommentsModel[]> {
    return await CommentsModel.findAll({
      where: { photoId: id },
      include: [
        {
          model: UserModel,
        },
      ],
    });
  }

  async create(data: INewComment): Promise<ICommentsModel> {
    return await CommentsModel.create(data);
  }

  async delete(id: number): Promise<number> {
    if (!id) throw ApiError.BadRequest('There is no comment with provided ID');
    return await CommentsModel.destroy({ where: { id: id } });
  }
}

export default new CommentsService();
