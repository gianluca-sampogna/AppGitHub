import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../view/Home'
import My_followers from '../view/My_followers/index'
import Favoritos from '../view/Favoritos/index'

import TabRoutes from './Tab.routes';

export default function StackRoutes() {

    const Stack = createNativeStackNavigator();

  return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} options={{headerShown:false}}/>
        </Stack.Navigator>
  );
}