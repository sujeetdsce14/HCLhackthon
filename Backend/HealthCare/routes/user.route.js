import express from 'express';

import { signin, signout, signup } from '../controllers/user.controller.js';
import { auntheticationMiddleware } from '../middlewares/auntheticationMiddleware.js';


const userRouter = express.Router();

userRouter.post('/signin', signin);
userRouter.post('/signup', signup);
userRouter.get('/signout', auntheticationMiddleware, signout);

export default userRouter;