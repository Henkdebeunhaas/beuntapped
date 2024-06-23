import express from 'express';
//import db from '../db/db.js';
import * as beerController from '../controllers/beer.js';
const router = express.Router();

router.get('/all', beerController.getAllBeers);
router.get('/single', beerController.getSingleBeer);
router.delete('/delete', beerController.deleteBeer);
router.post('/add', beerController.addBeer);

const errorHandler = (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
};

router.use(errorHandler);

export default router;