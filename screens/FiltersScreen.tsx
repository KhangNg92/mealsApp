import React, {useState, FC, useEffect, useCallback} from 'react';
import {View, Text, StyleSheet, Switch, Platform} from 'react-native';
import {colors} from '../utils/colors';
import {FiltersScreenProps} from '../navigation/MealsNavigator';
import {useNavigation, useRoute} from '@react-navigation/native';

type FilterSwitchProps = {
  label: string;
  state: boolean;
  onChange: Function;
};

const FilterSwitch: FC<FilterSwitchProps> = ({label, state, onChange}) => (
  <View style={styles.filterContainer}>
    <Text>{label}</Text>
    <Switch
      value={state}
      trackColor={{
        true: colors.primaryColor,
        false: '',
      }}
      thumbColor={Platform.OS === 'android' ? colors.primaryColor : ''}
      onValueChange={(newVal) => onChange(newVal)}
    />
  </View>
);

const FiltersScreen = () => {
  const {screen, title, filterContainer} = styles;
  const [isGluttenFree, setIsGluttenFree] = useState(false);
  const [isLactoseFree, setIsLactoseFree] = useState(false);
  const [isVegan, setIsVegan] = useState(false);
  const [isVegatarian, setIsVegatarian] = useState(false);
  const navigation = useNavigation();
  const route = useRoute();

  const saveFilters = useCallback(() => {
    const appliedFilters = {
      gluttenFree: isGluttenFree,
      lactoseFree: isLactoseFree,
      vegan: isVegan,
      vegetarian: isVegatarian,
    };

    return appliedFilters;
  }, [isGluttenFree, isLactoseFree, isVegatarian, isVegan]);

  useEffect(() => {
    navigation.setParams({
      save: {
        gluttenFree: isGluttenFree,
        lactoseFree: isLactoseFree,
        vegan: isVegan,
        vegetarian: isVegatarian,
      },
    });
  }, [saveFilters, navigation]);

  return (
    <View style={screen}>
      <Text style={title}>Available Filters/ Resctrictions</Text>

      <FilterSwitch
        label="Glutten-Free"
        state={isGluttenFree}
        onChange={setIsGluttenFree}
      />
      <FilterSwitch
        label="Lactose-Free"
        state={isLactoseFree}
        onChange={setIsLactoseFree}
      />
      <FilterSwitch label="Vegan" state={isVegan} onChange={setIsVegan} />
      <FilterSwitch
        label="Vegetarian"
        state={isVegatarian}
        onChange={setIsVegatarian}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%',
    marginVertical: 15,
  },
  title: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 22,
    margin: 20,
    textAlign: 'center',
  },
});

export default FiltersScreen;
