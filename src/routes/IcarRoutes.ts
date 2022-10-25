import { Router } from 'express';
import ICarController from '../controllers/ICar';
import IcarService from '../services/ICar';
import ICarModel from '../models/ICarModel';

const route = Router();

const icar = new ICarModel();
const icarService = new IcarService(icar);
const icarController = new ICarController(icarService);

route.post('/cars', (req, res) => icarController.create(req, res));

export default route;