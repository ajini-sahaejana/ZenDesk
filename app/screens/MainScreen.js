import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";

//credentials-context
import AsyncStorage from "@react-native-async-storage/async-storage/";
import { CredentialsContext } from "../components/CredentialsContext";

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
    <View>
       <WebView
        source={{uri: 'https://github.com/facebook/react-native'}}
        style={{marginTop: 20}}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
