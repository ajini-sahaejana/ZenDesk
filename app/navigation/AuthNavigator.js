import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import WelcomeScreen from "../screens/WelcomeScreen";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import colors from "../config/colors";
import AppNavigator from "./AppNavigator";

const Stack = createNativeStackNavigator();

const AuthNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: "transparent",
      },
      headerTintColor: colors.primary,
      headerTransparent: true,
      headerTitle: "",
    }}
  >
    <Stack.Screen
      name="Welcome"
      component={WelcomeScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="Register" component={RegisterScreen} />
    <Stack.Screen name="App" component={AppNavigator} />
  </Stack.Navigator>
);

export default AuthNavigator;