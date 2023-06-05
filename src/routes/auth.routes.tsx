import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Login } from "../screens/Login";
import { Start } from "../screens/Cadaster/Start";
import { CapturedName } from "../screens/Cadaster/CaptureName";

const Auth = createNativeStackNavigator();

export function AuthRoutes() {
  return (
    <Auth.Navigator>
      {/* <Auth.Screen
        options={{ headerShown: false }}
        name="login"
        component={Login}
      /> */}
      {/* <Auth.Screen
        options={{ headerShown: false }}
        name="Start"
        component={Start}
      /> */}
      <Auth.Screen
        options={{ headerShown: false }}
        name="CapturedName"
        component={CapturedName}
      />
    </Auth.Navigator>
  );
}
