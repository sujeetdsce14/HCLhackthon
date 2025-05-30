import express from 'express';
import dotenv from 'dotenv';

dotenv.config();


import cors from 'cors';
import cookieParser from 'cookie-parser';
import session from 'express-session';

import connectDB from './config/db.config.js';
import userRouter from './routes/user.route.js';
import staffRouter from './routes/staff.routes.js';
import { errorHandlerMiddleware } from './middlewares/errorHandlerMiddleware.js';
import { morganMiddleware } from './middlewares/loggerMiddleware.js';
import { auntheticationMiddleware } from './middlewares/auntheticationMiddleware.js';

import shiftRouter from './routes/shift.routes.js';


const app = express();


connectDB();

// initialize express session middleware
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
  //cookie: { secure: false }
}));

app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use(morganMiddleware);

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send(`API start with <a href="http://localhost:${PORT}/api/v1/">http://localhost:${PORT}/api/v1/</a>`);
});

app.use('/api/v1/user', userRouter);

app.use('/api/v1/shift', shiftRouter);

app.use('/api/v1/staff', auntheticationMiddleware, staffRouter);

app.get('/api/v1/test', auntheticationMiddleware, (req, res) => {
  res.json({"message": "Hello World"});
});

app.use(errorHandlerMiddleware);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});