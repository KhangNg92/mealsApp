import {prop, getModelForClass, pre, arrayProp} from '@typegoose/typegoose';

class Meal {
  @prop({required: true})
  id?: string;
  @prop({type: String}) // ! null assertion
  categoryIds!: string[];
  @prop({required: true})
  title?: string;
  @prop({required: true})
  affordability?: string;
  @prop({required: true})
  complexity?: string;
  @prop({required: true})
  imageUrl?: string;
  @prop({required: true})
  duration?: number;
  @prop({required: true, type: String})
  ingredients?: string[];
  @prop({required: true, type: String})
  steps?: string[];
  @prop({required: true})
  isGlutenFree?: boolean;
  @prop({required: true})
  isVegan?: boolean;
  @prop({required: true})
  isVegetarian?: boolean;
  @prop({required: true})
  isLactoseFree?: boolean;
}

export const MealModel = getModelForClass(Meal);
