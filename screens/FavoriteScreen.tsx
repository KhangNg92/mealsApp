import React, { FC } from 'react';
import MealList from '../components/MealList';
import { FavoriteScreenProps } from 'navigation/MealsNavigator';
import { useSelector } from 'react-redux';
import { RootState } from 'redux/store';
import { View, StyleSheet } from 'react-native';
import DefaultText from '../components/DefaultText';

const FavoriteScreen: FC<FavoriteScreenProps> = ({ navigation: { navigate } }) => {
  const favMeals = useSelector((state: RootState) => state.meals.favoriteMeals)

  if (!favMeals.length || !favMeals) {
    return <View style={styles.content}>
      <DefaultText>
        No Favorite Meals Found. Start Adding Some
      </DefaultText>
    </View>
  }
  return <MealList data={favMeals} navigate={navigate} />;
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default FavoriteScreen;
