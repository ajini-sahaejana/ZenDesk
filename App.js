import { React } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { TailwindProvider } from "tailwind-rn";
import utilities from "./tailwind.json";
import LoginScreen from "./app/screens/LoginScreen";
import RegisterScreen from "./app/screens/RegisterScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import AuthNavigator from "./app/navigation/AuthNavigator";
import NavigationTheme from "./app/navigation/NavigationTheme";
import AppNavigator from "./app/navigation/AppNavigator";
import AccountScreen from "./app/screens/AccountScreen";

export default function App() {
  return (
    <TailwindProvider utilities={utilities}>
      <NavigationContainer theme={NavigationTheme}>
        {/* <AuthNavigator /> */}
        <AppNavigator />
      </NavigationContainer>
    </TailwindProvider>
    // <RegisterScreen />
  );
}
