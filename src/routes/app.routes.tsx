import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { InternalLink } from "../screens/Cadaster/InternalLink";

const App = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <App.Navigator>
      <App.Screen
        options={{ headerShown: false }}
        name="InternalLink"
        component={InternalLink}
      />
    </App.Navigator>
  );
}
