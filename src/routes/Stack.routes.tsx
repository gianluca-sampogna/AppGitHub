import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../view/Home'

export default function StackRoutes() {

    const Stack = createNativeStackNavigator();

  return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} options={{headerShown:false}}/>
        </Stack.Navigator>
  );
}