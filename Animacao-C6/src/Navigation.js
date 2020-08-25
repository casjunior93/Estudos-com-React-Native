import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './views/Home';

const Stack = createStackNavigator();

export default function Navigation() {
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={Home}
                    options= {
                        {headerShown: false}
                    }
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}