import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {HeaderButton} from 'react-navigation-header-buttons';
import {colors} from '../utils/colors';
import {Platform} from 'react-native';
const CustomHeaderButton = (props: any) => {
  return (
    <HeaderButton
      {...props}
      IconComponent={Ionicons}
      iconSize={23}
      color={Platform.OS === 'android' ? 'white' : colors.primaryColor}
    />
  );
};

export default CustomHeaderButton;
