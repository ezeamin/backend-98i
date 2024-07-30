import express from 'express';

import { Blogs } from '../../controllers/blogs/index.js';
import { validateBody } from '../../middlewares/validateBody.js';
import { isAuthenticated } from '../../middlewares/isAuthenticated.js';
import { isAdmin } from '../../middlewares/isAdmin.js';

import { post_put_blogValidationSchema } from '../../helpers/validationSchemas/blogsValidationSchemas.js';

export const blogRouter = express.Router();

// GET ----------------------------
blogRouter.get('/', Blogs.GetController.getBlogs);
blogRouter.get('/:id', Blogs.GetController.getBlog);

// POST ----------------------------
// /api/v1/blogs/
blogRouter.post(
  '/',
  isAuthenticated,
  isAdmin,
  (req, res, next) =>
    validateBody(req, res, next, post_put_blogValidationSchema),
  Blogs.PostController.postBlog,
);

// PUT ----------------------------
blogRouter.put(
  '/:id',
  isAuthenticated,
  isAdmin,
  (req, res, next) =>
    validateBody(req, res, next, post_put_blogValidationSchema),
  Blogs.PutController.putBlog,
);

// DELETE -------------------------
blogRouter.delete(
  '/:id',
  isAuthenticated,
  isAdmin,
  Blogs.DeleteController.deleteBlog,
);
