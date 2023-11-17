import { ICommentsModel } from '../../db/models/commentsModel';

export class CommentsDto {
  id: number;
  photoId: number;
  userId: number;
  username: string;
  text: string;

  constructor(data: ICommentsModel) {
    this.id = data.id;
    this.userId = data.userId;
    this.username = data.user?.username || '';
    this.photoId = data.photoId;
    this.text = data.text;
  }
}
