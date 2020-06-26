import React, { FC, ReactNode, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { MealDetailScreenProps } from 'navigation/MealsNavigator';
import DefaultText from '../components/DefaultText';
import { useSelector } from 'react-redux';
import { RootState } from 'redux/store';
import { useNavigation } from '@react-navigation/native';

type ListItemProps = {
  children: ReactNode;
};
const ListItem: FC<ListItemProps> = ({ children }) => (
  <View style={styles.listItem}>
    <DefaultText>{children}</DefaultText>
  </View>
);

const MealDetailScreen: FC<MealDetailScreenProps> = ({
  route: {
    params: { id },
  },
}) => {
  const meals = useSelector((state: RootState) => state.meals.meals);
  const CurrentFavMeals = useSelector((state: RootState) => {
    return state.meals.favoriteMeals.some(meal => meal.id === id);
  });
  const { setParams } = useNavigation()
  useEffect(() => {
    setParams({
      isFav: CurrentFavMeals
    })
  }, [CurrentFavMeals])

  const selectedMeal = meals.find((meal) => {
    return meal.id === id;
  });

  const { image, detail, title } = styles;
  return (
    <ScrollView>
      <Image source={{ uri: selectedMeal?.imageUrl }} style={image} />
      <View style={detail}>
        <DefaultText>{selectedMeal?.duration}m</DefaultText>
        <DefaultText>{selectedMeal?.complexity.toUpperCase()}</DefaultText>
        <DefaultText>{selectedMeal?.affordability.toUpperCase()}</DefaultText>
      </View>
      <Text style={title}>Ingredients</Text>
      {selectedMeal?.ingredients.map((ing) => (
        <ListItem key={ing}>{ing}</ListItem>
      ))}
      <Text style={title}>Steps</Text>
      {selectedMeal?.steps.map((step) => (
        <ListItem key={step}>{step}</ListItem>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 200,
  },
  detail: {
    flexDirection: 'row',
    padding: 15,
    justifyContent: 'space-around',
  },
  title: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 22,
    textAlign: 'center',
  },
  listItem: {
    marginVertical: 10,
    marginHorizontal: 20,
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
  },
});

export default MealDetailScreen;
