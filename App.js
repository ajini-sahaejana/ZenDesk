import { React } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { TailwindProvider } from "tailwind-rn";
import utilities from "./tailwind.json";
import AuthNavigator from "./app/navigation/AuthNavigator";
import NavigationTheme from "./app/navigation/NavigationTheme";

export default function App() {
  return (
    <TailwindProvider utilities={utilities}>
      <NavigationContainer theme={NavigationTheme}>
        <AuthNavigator />
      </NavigationContainer>
    </TailwindProvider>
  );
}
