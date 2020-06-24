import express from 'express';
import {getMeals, getCategories} from '../controller/MealController';

const route = express.Router();

route.get('/meals', getMeals);
route.get('/categories', getCategories);

export default route;
