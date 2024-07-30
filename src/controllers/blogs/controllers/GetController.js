import BlogsModel from '../../../models/blogSchema.js';
import { internalError } from '../../../helpers/helpers.js';

export class GetController {
  static async getBlogs(_, res) {
    try {
      const data = await BlogsModel.find({
        // Criterio de búsqueda
        isActive: true,
      });

      const filteredData = data.map((blog) => {
        return {
          id: blog._doc._id,
          title: blog._doc.title,
          imageUrl: blog._doc.imageUrl,
          content: blog._doc.content,
        };
      });

      res.json({
        data: filteredData,
        message: 'Blogs encontrados correctamente',
      });
    } catch (e) {
      internalError(res, e, 'Ocurrió un error al leer la lista de blogs');
    }
  }

  static async getBlog(req, res) {
    const {
      params: { id },
    } = req;

    try {
      const data = await BlogsModel.findOne({
        // Criterio de búsqueda
        isActive: true,
        _id: id,
      });

      const formattedData = {
        id: data._doc._id,
        title: data._doc.title,
        imageUrl: data._doc.imageUrl,
        content: data._doc.content,
      };

      res.json({
        data: formattedData,
        message: 'Blog encontrado correctamente',
      });
    } catch (e) {
      internalError(res, e, 'Ocurrió un error al leer el blog solicitado');
    }
  }
}
