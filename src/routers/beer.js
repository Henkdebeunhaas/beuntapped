import express from 'express';
//import db from '../db/db.js';
import * as beerController from '../controllers/beer.js';
const router = express.Router();

router.get('/all', beerController.getAllBeers);
router.get('/single', beerController.getSingleBeer);
router.delete('/delete', beerController.deleteBeer);
router.post('/add', beerController.addBeer);

export default router;