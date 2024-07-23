import express from 'express';

import { Blogs } from '../../controllers/blogs/index.js';
import { validateBody } from '../../middlewares/validateBody.js';
import { post_put_blogValidationSchema } from '../../helpers/validationSchemas/blogsValidationSchemas.js';

export const blogRouter = express.Router();

// GET ----------------------------
blogRouter.get('/', Blogs.GetController.getBlogs);

// POST ----------------------------
// /api/v1/blogs/
blogRouter.post(
  '/',
  (req, res, next) =>
    validateBody(req, res, next, post_put_blogValidationSchema),
  Blogs.PostController.postBlog,
);

// PUT ----------------------------
blogRouter.put(
  '/:id',
  (req, res, next) =>
    validateBody(req, res, next, post_put_blogValidationSchema),
  Blogs.PutController.putBlog,
);

// DELETE -------------------------
blogRouter.delete('/:id', Blogs.DeleteController.deleteBlog);
