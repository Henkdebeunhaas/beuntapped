import express from 'express';
import * as userController from '../controllers/user.js';
const router = express.Router();

router.get('/singleuser', userController.getUser)


export default router;