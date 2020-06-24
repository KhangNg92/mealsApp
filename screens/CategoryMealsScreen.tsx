import React, {FC, useEffect} from 'react';
import {CategoryMealScreenProps} from 'navigation/MealsNavigator';
import MealList from '../components/MealList';
import {useDispatch, useSelector} from 'react-redux';
import {getMealsStart} from '../redux/slices/mealsSlice';
import {RootState} from '../redux/store';

const CategoryMealsScreen: FC<CategoryMealScreenProps> = ({
  navigation: {navigate},
  route: {
    params: {id},
  },
}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMealsStart());
  }, [dispatch]);

  const meals = useSelector((state: RootState) => state.meals.meals);
  console.log(meals);

  const displayMeals = meals.filter(
    ({categoryIds}) => categoryIds.indexOf(id) >= 0,
  );

  return <MealList data={displayMeals} navigate={navigate} />;
};

export default CategoryMealsScreen;
