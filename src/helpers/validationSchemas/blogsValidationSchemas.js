import Joi from 'joi';

export const post_put_blogValidationSchema = Joi.object({
  title: Joi.string().trim().min(3).max(30).required().messages({
    'string.min': "El campo 'title' debe tener como mínimo 3 caracteres",
    'string.max': "El campo 'title' debe tener como mucho 30 caracteres",
    'any.required': "El campo 'title' es requerido",
    '*': "Revisa el campo 'title'",
  }),
  imageUrl: Joi.string().trim().uri().required().messages({
    'string.uri': "El campo 'imageUrl' debe ser una URL valida",
    'any.required': "El campo 'imageUrl' es requerido",
    '*': "Revisa el campo 'imageUrl'",
  }),
  content: Joi.string().trim().min(3).max(500).required().messages({
    'string.min': "El campo 'content' debe tener como mínimo 3 caracteres",
    'string.max': "El campo 'content' debe tener como mucho 500 caracteres",
    'any.required': "El campo 'content' es requerido",
    '*': "Revisa el campo 'content'",
  }),
});
