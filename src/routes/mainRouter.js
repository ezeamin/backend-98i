import express from 'express';
import { blogRouter } from './routers/blogRouter.js';

export const mainRouter = express.Router();

mainRouter.use('/blogs', blogRouter);
