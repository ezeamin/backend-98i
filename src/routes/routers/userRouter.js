import express from 'express';

import { Users } from '../../controllers/users/index.js';
// import { validateBody } from '../../middlewares/validateBody.js';
// import { post_put_userValidationSchema } from '../../helpers/validationSchemas/usersValidationSchemas.js';

export const userRouter = express.Router();

// GET ----------------------------
userRouter.get('/', Users.GetController.getUsers);

// POST ----------------------------
// /api/v1/users/
userRouter.post(
  '/',
  // TODO: Agregar este middleware (tarea p/ la casa)
  //   (req, res, next) =>
  //     validateBody(req, res, next, post_put_userValidationSchema),
  Users.PostController.postUser,
);
