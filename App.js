import { React } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { TailwindProvider } from "tailwind-rn";
import utilities from "./tailwind.json";
import NavigationTheme from "./app/navigation/NavigationTheme";
import AppNavigator from "./app/navigation/AppNavigator";

export default function App() {
  return (
    <TailwindProvider utilities={utilities}>
      <NavigationContainer theme={NavigationTheme}>
        {/* <AuthNavigator /> */}
        <AppNavigator />
      </NavigationContainer>
    </TailwindProvider>
  );
}
