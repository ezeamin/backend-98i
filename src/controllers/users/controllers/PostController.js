import HttpCodes from 'http-status-codes';
import bcryptjs from 'bcryptjs';

import UserModel from '../../../models/userSchema.js';
import { internalError } from '../../../helpers/helpers.js';

export class PostController {
  static async postUser(req, res) {
    // Si llegamos acá, la informacion que nos manda el FE
    // YA ESTÁ VALIDADA
    const { body } = req;

    const hashedPassword = bcryptjs.hashSync(body.password, 10);

    const newUser = new UserModel({
      firstname: body.firstname,
      lastname: body.lastname,
      username: body.username,
      password: hashedPassword,
    });

    try {
      await newUser.save();

      res.status(HttpCodes.CREATED).json({
        data: null,
        message: 'Usuario guardado correctamente',
      });
    } catch (e) {
      internalError(res, e, 'Ocurrió un error al guardar el usuario');
    }
  }
}
