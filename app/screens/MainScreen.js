import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";

//credentials-context
import AsyncStorage from "@react-native-async-storage/async-storage/";
import { CredentialsContext } from "../components/CredentialsContext";
import WebView from "react-native-webview";

export default function MainScreen() {
  //context
  const { storedCredentials, setStoredCredentials } =
    useContext(CredentialsContext);
  // const { username, email } = storedCredentials;

  const ClearLogin = () => {
    AsyncStorage.removeItem("zendeskCredentials")
      .then(() => {
        setStoredCredentials("");
      })
      .catch((error) => console.log(error));
  };

  return (
    <WebView
      source={{ uri: "https://zendesk-edge.web.app" }}
      style={{ marginTop: 20 }}
    />
  );
}

const styles = StyleSheet.create({});
