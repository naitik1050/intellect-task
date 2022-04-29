import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ROUTES } from '../constants/AppRoutes'
import {
    Dashboard,
    Splash,
} from '../screen';
import { useSelector, useDispatch } from 'react-redux';

const Stack = createStackNavigator();

const AppNavigation = () => {

    const splashVisible = useSelector(state => state.splashScreenReducer.visible)

    if (splashVisible) {
        return <Splash />
    }
    return (
        <Stack.Navigator>
            <Stack.Screen name={ROUTES.DASHBOARD} component={Dashboard} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
};

export { AppNavigation };