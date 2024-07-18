import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

import './database/database.js';

import { mainRouter } from './routes/mainRouter.js';

console.clear();
console.log('⌛ Inicializando servidor...');

// 1. Inicializar el servidor
const app = express();

// 2. Configurar los valores del servidor
const PORT = process.env.PORT || 3000;

// 3. Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

// 4. Rutas (o endpoints)
app.use('/api/v1', mainRouter);

// 5. Loop del servidor
app.listen(PORT, () => {
  console.log(`🥟 El servidor está arriba y en el puerto ${PORT}`);
});
