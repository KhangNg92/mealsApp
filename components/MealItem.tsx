import React, {FC} from 'react';

import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import DefaultText from './DefaultText';

type MealItemProps = {
  title: string;
  onSelectMeal: Function;
  duration: number;
  complexity: string;
  affordability: string;
  imageUrl: string;
};

const MealItem: FC<MealItemProps> = ({
  title,
  onSelectMeal,
  duration,
  complexity,
  affordability,
  imageUrl,
}) => {
  return (
    <View style={styles.mealItem}>
      <TouchableOpacity onPress={() => onSelectMeal()}>
        <View>
          <View style={{...styles.mealRow, ...styles.mealHeader}}>
            <ImageBackground source={{uri: imageUrl}} style={styles.bgImage}>
              <View style={styles.titleContainer}>
                <Text numberOfLines={1} style={styles.title}>
                  {title}
                </Text>
              </View>
            </ImageBackground>
          </View>
          <View style={{...styles.mealRow, ...styles.mealDetail}}>
            <DefaultText>{duration}m</DefaultText>
            <DefaultText>{complexity.toUpperCase()}</DefaultText>
            <DefaultText>{affordability.toUpperCase()}</DefaultText>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mealItem: {
    height: 200,
    width: '100%',
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    overflow: 'hidden',
  },
  mealRow: {
    flexDirection: 'row',
  },
  mealHeader: {
    height: '85%',
  },
  mealDetail: {
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '15%',
  },
  bgImage: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
  },
  titleContainer: {
    backgroundColor: 'rgba(0,0,0,.5)',
    paddingVertical: 5,
    paddingHorizontal: 12,
  },
  title: {
    fontFamily: 'Opensans-Bold',
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
  },
});

export default MealItem;
