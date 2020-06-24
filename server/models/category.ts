import {prop, getModelForClass, pre} from '@typegoose/typegoose';

class Categories {
  @prop()
  id?: string;
  @prop()
  title?: string;
  @prop()
  color?: string;
}

export const CategoriesModel = getModelForClass(Categories);
