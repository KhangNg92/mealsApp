import {MealModel} from '../models/meals';
import {Request, Response} from 'express';
import _ from 'lodash';
import {CategoriesModel} from '../models/category';

export const getMeals = async (req: Request, res: Response) => {
  const meals = await MealModel.find({});
  return res.send(meals);
};
export const getCategories = async (req: Request, res: Response) => {
  const categories = await CategoriesModel.find({});
  return res.send(categories);
};
