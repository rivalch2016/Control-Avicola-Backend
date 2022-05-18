import express from "express";
import indexRoutes from './routes/index.routes';
import morgan from "morgan";

const app = express();

//Middlewares
app.use(morgan('dev'));

//Routes
app.use(indexRoutes);

export default app;