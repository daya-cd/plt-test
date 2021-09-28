import React, {FC} from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Home, Basket, ProductDetail} from '../screens';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Menu from '../components/menu';

const TabNav: FC = () => {
  const Tab = createMaterialBottomTabNavigator();
  const HomeStack = createStackNavigator();
  const BasketStack = createStackNavigator();

  const Drawer = createDrawerNavigator();

  const AppDrawer = () => {
    return (
      <Drawer.Navigator drawerContent={() => <Menu />}>
        <Drawer.Screen name="PRETTY LITTLE THINGS" component={Home} />
      </Drawer.Navigator>
    );
  };

  const HomeStackScreen = () => {
    return (
      <HomeStack.Navigator>
        <HomeStack.Screen
          name="Back"
          component={AppDrawer}
          options={{headerShown: false}}
        />
        {/* <HomeStack.Screen name="Home" component={Home} /> */}
        <HomeStack.Screen name="ProductDetail" component={ProductDetail} />
      </HomeStack.Navigator>
    );
  };

  const BasketStackScreen = () => {
    return (
      <BasketStack.Navigator>
        <BasketStack.Screen name="Basket" component={Basket} />
      </BasketStack.Navigator>
    );
  };

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="home" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Basket"
        component={BasketStackScreen}
        options={{
          tabBarLabel: 'Basket',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="cart" color={color} size={24} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNav;
