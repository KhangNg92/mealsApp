import { createStackNavigator, StackScreenProps } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useDispatch } from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';


import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import FavoriteScreen from '../screens/FavoriteScreen';
import FiltersScreen from '../screens/FiltersScreen';
import DrawerComponent from '../components/Drawer';

import React, { useEffect } from 'react';
import { colors } from '../utils/colors';
import { Platform } from 'react-native';


import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomHeaderButton from '../components/HeaderButton';
import { toggleFavorite, setFilters, FilterState } from '../redux/slices/mealsSlice';


type NavigatorParamList = {
  Categories: undefined;
  CategoryMeals: { id: string; color: string; title: string };
  MealDetail: { id: string, title: string, isFav: boolean };
  Favorites: undefined;
  Filters: { save: FilterState };
  Drawer: undefined;
  BottomTab: undefined;
};

// Stacks
const MealStack = createStackNavigator<NavigatorParamList>();
const FavoriteStack = createStackNavigator<NavigatorParamList>();
const FilterStack = createStackNavigator<NavigatorParamList>();

// Bottom tab and drawer
const Tab = createBottomTabNavigator<NavigatorParamList>();
const Drawer = createDrawerNavigator<NavigatorParamList>();

// Redux


// useEffect(() => {

// })

const defaultScreenOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === 'ios' ? 'white' : colors.primaryColor,
  },
  headerTintColor: Platform.OS === 'ios' ? colors.primaryColor : 'white',
  headerBackTitleStyle: {
    fontFamily: 'OpenSans-Regular',
  },
};

const MealsNavigatorStack = ({ navigation }: any) => {
  const dispatch = useDispatch()
  return (
    <MealStack.Navigator screenOptions={defaultScreenOptions}>
      <MealStack.Screen
        options={{
          headerTitle: 'Meal Categories',
          headerLeft: ({ tintColor }) => (
            <DrawerComponent
              tintColor={tintColor}
              navigation={() => navigation.openDrawer()}
            />
          ),
        }}
        name="Categories"
        component={CategoriesScreen}
      />
      <MealStack.Screen
        name="CategoryMeals"
        options={({
          route: {
            params: { title },
          },
        }) => ({
          title,
        })}
        component={CategoryMealsScreen}
      />
      <MealStack.Screen
        name="MealDetail"
        component={MealDetailScreen}
        options={({
          route: {
            params: { id, title, isFav },
          },
        }) => ({
          headerTitle: title,
          headerRight: () => (
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
              <Item
                title="Favorite"
                iconName={isFav ? 'ios-star' : 'ios-star-outline'}
                onPress={() => dispatch(toggleFavorite(id))}
              />
            </HeaderButtons>
          ),
          headerBackTitleStyle: {
            fontFamily: 'OpenSans-Bold',
          },
        })
        }
      />

      <MealStack.Screen
        name="Filters"
        component={FiltersScreen}
        options={{
          title: 'Filters',
          headerLeft: ({ tintColor }) => (
            <DrawerComponent
              tintColor={tintColor}
              navigation={() => navigation.openDrawer()}
            />
          ),
        }}
      />
    </MealStack.Navigator>
  );
};

const FavoriteNavigatorStack = ({ navigation }: any) => (
  <FavoriteStack.Navigator screenOptions={defaultScreenOptions}>
    <FavoriteStack.Screen
      name="Favorites"
      component={FavoriteScreen}
      options={{
        title: 'Your Favorites',
        headerLeft: ({ tintColor }) => (
          <DrawerComponent
            tintColor={tintColor}
            navigation={() => navigation.openDrawer()}
          />
        ),
      }}
    />
  </FavoriteStack.Navigator>
);

const FiltersNavigatorStack = ({ navigation }: any) => {
  const dispatch = useDispatch();

  return (
    <FilterStack.Navigator screenOptions={defaultScreenOptions}>
      <FilterStack.Screen
        name="Filters"
        component={FiltersScreen}
        options={({

          route: { params }
        }) => {

          return {

            title: 'Your Favorites',
            headerLeft: ({ tintColor }) => (
              <DrawerComponent
                tintColor={tintColor}
                navigation={() => navigation.openDrawer()}
              />
            ),
            headerRight: () => (
              <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                <Item
                  title="Favorite"
                  iconName="ios-save"
                  onPress={() => dispatch(setFilters(params.save))}
                />
              </HeaderButtons>
            ),
          };
        }}
      />
    </FilterStack.Navigator>
  );
};

const TabNavigator = () => (
  <Tab.Navigator
    tabBarOptions={{
      activeTintColor: colors.accentColor,
      labelStyle: {
        fontFamily: 'OpenSans-Bold',
      },
    }}>
    <Tab.Screen
      name="Categories"
      component={MealsNavigatorStack}
      options={{
        tabBarIcon: ({ color }) => (
          <Ionicons name="ios-restaurant" size={25} color={color} />
        ),
        tabBarLabel: 'Meals!',
      }}
    />
    <Tab.Screen
      name="Favorites"
      component={FavoriteNavigatorStack}
      options={{
        tabBarIcon: ({ color }) => (
          <Ionicons name="ios-star" size={25} color={color} />
        ),
      }}
    />
  </Tab.Navigator>
);

const DrawerNavigator = () => (
  <Drawer.Navigator
    initialRouteName="BottomTab"
    drawerContentOptions={{
      activeTintColor: colors.accentColor,
      labelStyle: {
        fontFamily: 'OpenSans-Bold',
      },
    }}
    screenOptions={{
      drawerIcon: ({ color }) => (
        <Ionicons name="ios-menu" size={25} color={color} />
      ),
    }}>
    <Drawer.Screen
      name="Categories"
      component={TabNavigator}
      options={{
        drawerIcon: ({ color }) => (
          <Ionicons name="ios-restaurant" size={25} color={color} />
        ),
      }}
    />
    <Drawer.Screen
      name="Filters"
      component={FiltersNavigatorStack}
      options={{
        drawerIcon: ({ color }) => (
          <Ionicons name="ios-search" size={25} color={color} />
        ),
      }}
    />
  </Drawer.Navigator>
);

export type CategoriesScreenProps = StackScreenProps<
  NavigatorParamList,
  'Categories'
>;
export type MealDetailScreenProps = StackScreenProps<
  NavigatorParamList,
  'MealDetail'
>;
export type CategoryMealScreenProps = StackScreenProps<
  NavigatorParamList,
  'CategoryMeals'
>;
export type FavoriteScreenProps = StackScreenProps<
  NavigatorParamList,
  'Favorites'
>;
export type FiltersScreenProps = StackScreenProps<
  NavigatorParamList,
  'Filters'
>;

export default DrawerNavigator;
