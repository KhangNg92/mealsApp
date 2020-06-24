import React, {FC} from 'react';
import {View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

type DrawerProps = {
  tintColor: string | undefined;
  navigation: Function;
};

const DrawerComponent: FC<DrawerProps> = ({tintColor, navigation}) => {
  return (
    <View>
      <Ionicons
        name="ios-menu"
        color={tintColor}
        style={{marginLeft: 10}}
        size={25}
        onPress={() => navigation()}
      />
    </View>
  );
};

export default DrawerComponent;
