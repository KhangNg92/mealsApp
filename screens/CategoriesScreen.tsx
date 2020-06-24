import React, {FC, useEffect} from 'react';
import {ListRenderItem} from 'react-native';
import {CategoriesScreenProps} from 'navigation/MealsNavigator';
import {FlatList} from 'react-native-gesture-handler';

import CategoryGridTile from '../components/CategoryGridTile';

import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../redux/store';
import {getCategoriesStart} from '../redux/slices/categoriesSlice';

const CategoriesScreen: FC<CategoriesScreenProps> = ({
  navigation: {navigate},
}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategoriesStart());
  }, [dispatch]);

  const categories = useSelector(
    (state: RootState) => state.categories.categories,
  );

  const renderGridItem: ListRenderItem<{
    color: string;
    title: string;
    id: string;
  }> = ({item: {color, title, id}}) => (
    <CategoryGridTile
      title={title}
      color={color}
      navigate={() =>
        navigate('CategoryMeals', {
          color,
          title,
          id,
        })
      }
    />
  );

  return (
    <FlatList
      numColumns={2}
      data={categories}
      renderItem={renderGridItem}
      keyExtractor={({id}) => id}
    />
  );
};

export default CategoriesScreen;
