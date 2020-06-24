import React, {ReactNode, FC} from 'react';
import {View, Text, StyleSheet} from 'react-native';

type DefaultTextProps = {
  children: ReactNode;
};
const DefaultText: FC<DefaultTextProps> = ({children}) => {
  return (
    <View>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: 'OpenSans-Bold',
  },
});

export default DefaultText;
