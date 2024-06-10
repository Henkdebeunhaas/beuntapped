import express from 'express';
import * as userController from '../controllers/user.js';
const router = express.Router();

router.get('/singleuser', userController.getUser);
router.get('/allusers', userController.getAllUsers);

router.post('/login', userController.loginUser)
router.post('/make', userController.makeUser);

const errorHandler = (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
};

router.use(errorHandler);

export default router;