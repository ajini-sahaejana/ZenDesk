import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import MeditateScreen from "../screens/MeditateScreen";
import EventScreen from "../screens/EventScreen";
import MainScreen from "../screens/MainScreen";
import HelpScreen from "../screens/HelpScreen";
import AccountScreen from "../screens/AccountScreen";
import AccountNavigator from "./AccountNavigator";

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen
      name="Meditate"
      component={MeditateScreen}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="meditation" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="Events"
      component={EventScreen}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="calendar" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="Home"
      component={MainScreen}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="home" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="Help"
      component={HelpScreen}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="lifebuoy" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="Account"
      component={AccountNavigator}
      options={{
        // headerShown: false,
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="account" color={color} size={size} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default AppNavigator;
