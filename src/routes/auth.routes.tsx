import React from 'react'

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import {Login} from '../screens/Login'

const Auth = createNativeStackNavigator()

export function AuthRoutes(){
    return(
        <Auth.Navigator>
            <Auth.Screen
                options={{ headerShown: false }}
                name="login"
                component={Login}
            />
        </Auth.Navigator>
    )
}