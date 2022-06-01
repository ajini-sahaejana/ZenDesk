import { React } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { TailwindProvider } from "tailwind-rn";
import utilities from "../../tailwind.json";
import NavigationTheme from "../navigation/NavigationTheme";
import AuthNavigator from "../navigation/AuthNavigator";

export default function RootStack() {
  return (
    <TailwindProvider utilities={utilities}>
      <NavigationContainer theme={NavigationTheme}>
        <AuthNavigator />
      </NavigationContainer>
    </TailwindProvider>
  );
}
