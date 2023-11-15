import { PhotoModel } from '../../db/models';
import { IPhotoModel } from '../../db/models/photoModel';
import { ApiError } from '../../error';

class PhotoService {
  async getAll(): Promise<IPhotoModel[]> {
    return await PhotoModel.findAll();
  }

  async create(data: Omit<IPhotoModel, 'id'>): Promise<IPhotoModel> {
    if (!data.url) throw ApiError.BadRequest('Incorrect data');
    return await PhotoModel.create({ url: data.url });
  }
}

export default new PhotoService();
