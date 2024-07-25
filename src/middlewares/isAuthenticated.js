import jwt from 'jsonwebtoken';

export const isAuthenticated = (req, res, next) => {
  const { headers } = req;

  const authorizationHeader = headers.authorization;

  if (!authorizationHeader) {
    res.status(401).json({
      data: null,
      message: 'No se encontró un token en la petición',
    });
    return;
  }

  // Si el header está, tiene el valor "Bearer token"
  const token = authorizationHeader.split(' ')[1];

  try {
    const data = jwt.verify(token, process.env.SECRET_KEY);

    // Agregamos el campo "user" a la request para futuro uso
    req.user = data.user;

    next();
  } catch (_) {
    res.status(401).json({
      data: null,
      message: 'El token no es válido',
    });
  }
};
