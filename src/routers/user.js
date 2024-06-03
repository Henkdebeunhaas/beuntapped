import express from 'express';
import * as userController from '../controllers/user.js';
const router = express.Router();

router.get('/singleuser', userController.getUser);
router.get('/allusers', userController.getAllUsers);
router.post('/make', userController.makeUser);

export default router;