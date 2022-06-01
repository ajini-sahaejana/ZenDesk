import { React, useState } from "react";
import RootStack from "./app/navigation/RootStack";

//apploading
import AppLoading from "expo-app-loading";

//async-storage
import AsyncStorage from "@react-native-async-storage/async-storage/";

export default function App() {
  return <RootStack />;
}
