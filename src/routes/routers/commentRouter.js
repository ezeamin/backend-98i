import express from 'express';

import { isAuthenticated } from '../../middlewares/isAuthenticated.js';
import { Comments } from '../../controllers/comments/index.js';

export const commentRouter = express.Router();

// GET
commentRouter.get('/', isAuthenticated, Comments.GetController.getComments);

// POST
commentRouter.post('/', isAuthenticated, Comments.PostController.postComment);
