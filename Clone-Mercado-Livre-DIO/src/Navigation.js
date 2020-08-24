import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './view/Home';
import Login from './view/Login';
import Signup from './view/Signup';
import RedefinePass from './view/RedefinePass';
import Index from './view/Index';

const optionsHeader = () => ({
    headerStyle: {
        backgroundColor: "#ffe600"
    }
})

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
                <Stack.Screen
                    name="Login"
                    component={Login}
                    options= {
                        {headerShown: false}
                    }
                />
                <Stack.Screen
                    name="Signup"
                    component={Signup}
                    options= {
                        {headerShown: false}
                    }
                />
                <Stack.Screen
                    name="RedefinePass"
                    component={RedefinePass}
                    options= {
                        {headerShown: false}
                    }
                />
                <Stack.Screen
                    name="Index"
                    component={Index}
                    options= {
                        {headerShown: false}
                    }
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}