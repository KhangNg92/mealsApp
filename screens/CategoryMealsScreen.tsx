import React, { FC, useEffect } from 'react';
import { CategoryMealScreenProps } from 'navigation/MealsNavigator';
import MealList from '../components/MealList';
import { useDispatch, useSelector } from 'react-redux';
import { getMealsStart } from '../redux/slices/mealsSlice';
import { RootState } from '../redux/store';
import { View, StyleSheet } from 'react-native';
import DefaultText from '../components/DefaultText';

const CategoryMealsScreen: FC<CategoryMealScreenProps> = ({
  navigation: { navigate },
  route: {
    params: { id },
  },
}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMealsStart());
  }, [dispatch]);

  const meals = useSelector((state: RootState) => {
    const { filteredMeals, meals } = state.meals
    return filteredMeals.length ? filteredMeals : meals
  });


  const displayMeals = meals.filter(
    ({ categoryIds }) => categoryIds.indexOf(id) >= 0,
  );

  if (!displayMeals.length) {
    return <View style={styles.content}>
      <DefaultText>
        No Meals Found, maybe check your filters?
      </DefaultText>
    </View>
  }

  return <MealList data={displayMeals} navigate={navigate} />;
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default CategoryMealsScreen;
