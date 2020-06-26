import React, { FC } from 'react';
import { StyleSheet, View, ListRenderItem } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Meal from '../models/meal';
import MealItem from './MealItem';

type MealListProps = {
  data: Meal[];
  navigate: Function;
};

const MealList: FC<MealListProps> = ({ data, navigate }) => {
  const renderMealItem: ListRenderItem<Meal> = ({
    item: { title, duration, complexity, affordability, imageUrl, id },
  }) => {
    return (
      <MealItem
        title={title}
        duration={duration}
        onSelectMeal={() =>
          navigate('MealDetail', {
            id,
            title
          })
        }
        complexity={complexity}
        affordability={affordability}
        imageUrl={imageUrl}
      />
    );
  };

  return (
    <View style={styles.screen}>
      <FlatList
        data={data}
        keyExtractor={({ id }) => id}
        renderItem={renderMealItem}
        style={{ width: '100%' }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
  },
});

export default MealList;
