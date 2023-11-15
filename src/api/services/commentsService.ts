import { CommentsModel, ICommentsModel } from '../../db/models/commentsModel';
import { ApiError } from '../../error';

interface INewComment {
  userId: number;
  photoId: number;
  text: string;
}

class CommentsService {
  async create(data: INewComment): Promise<ICommentsModel> {
    return await CommentsModel.create(data);
  }

  async delete(id: number): Promise<number> {
    if (!id) throw ApiError.BadRequest('There is no comment with provided ID');
    return await CommentsModel.destroy({ where: { id: id } });
  }
}

export default new CommentsService();
