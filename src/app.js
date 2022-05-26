import express from 'express';
import indexRoutes from './routes/index.routes';
import usersRoutes from './routes/users.routes';
import gallineroRoutes from './routes/gallinero.routes';
import ventas_GallineroRoutes from './routes/ventas_gallinero.routes';
import produccionRoutes from './routes/produccion.routes'
import morgan from 'morgan';
import cors from 'cors';

const app = express();

app.use(cors());

//Middlewares
app.use(morgan('dev'));

app.use(express.json())

//Routes
app.use(indexRoutes);
app.use(usersRoutes);
app.use(gallineroRoutes);
app.use(ventas_GallineroRoutes);
app.use(produccionRoutes);

export default app;