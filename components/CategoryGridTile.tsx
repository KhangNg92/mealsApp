import React, {FC} from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  Platform,
  TouchableNativeFeedback,
} from 'react-native';

type CategoryGridTileProps = {
  title: string;
  navigate: Function;
  color: string;
};

const CategoryGridTile: FC<CategoryGridTileProps> = ({
  navigate,
  title,
  color,
}) => {
  const TMp: React.ElementType =
    Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity;

  return (
    <View style={styles.gridItem}>
      <TMp style={{flex: 1}} onPress={() => navigate()}>
        <View style={{...styles.container, ...{backgroundColor: color}}}>
          <Text style={styles.title} numberOfLines={2}>
            {title}
          </Text>
        </View>
      </TMp>
    </View>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 5,
  },
  title: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 22,
    textAlign: 'right',
  },
  container: {
    flex: 1,
    borderRadius: 10,
    shadowColor: 'black',
    shadowOpacity: 0.27,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 10,
    padding: 15,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
});

export default CategoryGridTile;
