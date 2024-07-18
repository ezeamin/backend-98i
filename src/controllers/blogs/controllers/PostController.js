import BlogModel from '../../../models/blogSchema.js';

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

      res.status(201).json({
        data: null,
        message: 'Blog guardado correctamente',
      });
    } catch (e) {
      console.error(e);

      res.status(500).json({
        data: null,
        message: 'Ocurrió un error al guardar el blog',
      });
    }
  }
}
