import HttpCodes from 'http-status-codes';

import BlogModel from '../../../models/blogSchema.js';
import { internalError } from '../../../helpers/helpers.js';

export class PostController {
  static async postBlog(req, res) {
    // Si llegamos acá, la informacion que nos manda el FE
    // YA ESTÁ VALIDADA
    const { body } = req;

    const newBlog = new BlogModel({
      title: body.title,
      imageUrl: body.imageUrl,
      content: body.content,
    });

    try {
      await newBlog.save();

      res.status(HttpCodes.CREATED).json({
        data: null,
        message: 'Blog guardado correctamente',
      });
    } catch (e) {
      internalError(res, e, 'Ocurrió un error al guardar el blog');
    }
  }
}
