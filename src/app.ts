import express from 'express';
import 'express-async-errors';
import errorHandle from './middlewares/error';
import route from './routes/IcarRoutes';

const app = express();

app.use(express.json());
app.use(route);
app.use(errorHandle);

export default app;
