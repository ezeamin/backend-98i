import { internalError } from '../../../helpers/helpers.js';

import CommentsModel from '../../../models/commentsSchema.js';

export class PostController {
  static async postComment(req, res) {
    const {
      user: { id },
      body,
    } = req;

    try {
      const newComment = new CommentsModel({
        text: body.text,
        userId: id,
      });

      await newComment.save();

      res.status(201).json({
        data: null,
        message: 'Comentario creado',
      });
    } catch (e) {
      internalError(res, e, 'Ocurrio un error');
    }
  }
}
