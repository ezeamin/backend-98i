import HttpCodes from 'http-status-codes';

import BlogModel from '../../../models/blogSchema.js';
import { internalError } from '../../../helpers/helpers.js';

export class PutController {
  static async putBlog(req, res) {
    const {
      body,
      params: { id },
    } = req;

    // Si llegamos al controlador, body está validado
    // y tiene los campos correspondientes

    try {
      const action = await BlogModel.updateOne(
        {
          _id: id,
        },
        body,
      );

      if (action.matchedCount === 0) {
        res.status(HttpCodes.BAD_REQUEST).json({
          data: null,
          message: 'El blog indicado no fue encontrado',
        });
      }

      res.json({
        data: null,
        message: 'Blog actualizado correctamente',
      });
    } catch (e) {
      internalError(
        res,
        e,
        'Ocurrió un error actualizando el recurso indicado',
      );
    }
  }
}
