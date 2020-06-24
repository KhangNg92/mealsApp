import React, {FC} from 'react';
import MealList from '../components/MealList';
import {FavoriteScreenProps} from 'navigation/MealsNavigator';
import {useSelector} from 'react-redux';
import {RootState} from 'redux/store';

const FavoriteScreen: FC<FavoriteScreenProps> = ({navigation: {navigate}}) => {
  const favMeals = useSelector((state: RootState) => state.meals.meals).filter(
    ({id}) => id === 'm1' || id === 'm2',
  );
  return <MealList data={favMeals} navigate={navigate} />;
};

export default FavoriteScreen;
