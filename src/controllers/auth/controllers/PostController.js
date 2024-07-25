import HttpCodes from 'http-status-codes';
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';

import UserModel from '../../../models/userSchema.js';
import { internalError } from '../../../helpers/helpers.js';

export class PostController {
  static async postLogin(req, res) {
    const { body } = req;

    try {
      const user = await UserModel.findOne({
        username: body.username,
        isActive: true,
      });

      if (!user || !bcryptjs.compareSync(body.password, user.password)) {
        res.status(HttpCodes.UNAUTHORIZED).json({
          data: null,
          message: 'Usuario y/o contraseña incorrectos',
        });
        return;
      }

      // Aca: El usuario es válido y sus credenciales correctas
      // Paso siguiente: Crear el token con la info necesaria y devolverle al cliente

      const userInfo = {
        user: {
          firstname: user.firstname,
          lastname: user.lastname,
          username: user.username,
          isAdmin: user.isAdmin,
        },
      };

      const token = jwt.sign(userInfo, process.env.SECRET_KEY, {
        expiresIn: '1h',
      });

      res.json({
        data: token,
        message: 'Logueo exitoso',
      });
    } catch (e) {
      internalError(res, e, 'Ocurrió un error intentando iniciar sesión');
    }
  }
}
