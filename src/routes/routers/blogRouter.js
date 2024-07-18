import express from 'express';
import { Blogs } from '../../controllers/blogs/index.js';

export const blogRouter = express.Router();

// GET ----------------------------
blogRouter.get('/', Blogs.GetController.getBlogs);

// POST ----------------------------
// /api/v1/blogs/
blogRouter.post('/', Blogs.PostController.postBlog);

// PUT ----------------------------

// DELETE -------------------------
