import { internalError } from '../../../helpers/helpers.js';

import CommentsModel from '../../../models/commentsSchema.js';

export class GetController {
  static async getComments(req, res) {
    const {
      user: { id },
    } = req;

    try {
      const data = await CommentsModel.find({
        userId: id,
      });

      // TODO: Formatear data

      res.json({
        data,
        message: 'Comentarios encontrados',
      });
    } catch (e) {
      internalError(res, e, 'Ocurrio un error');
    }
  }
}
