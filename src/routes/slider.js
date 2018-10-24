import { Router } from 'express';
import sliderController from '../controllers/sliderController';
import {catchAsync} from '../middlewares/errors';


export default () => {
    const api = Router();

    api.get('/:slug', catchAsync(sliderController.findOne));

    api.get('/', catchAsync(sliderController.findAll));

    api.post('/', catchAsync(sliderController.create));

    api.put('/:slug', catchAsync(sliderController.update));

    api.delete('/:slug', catchAsync(sliderController.remove));


    return api;
}