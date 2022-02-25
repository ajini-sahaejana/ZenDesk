import React from "react";
import { View, ImageBackground, StyleSheet, Image, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppText from "../components/AppText";
import { styles } from "../components/StyleSheet";
import colors from "../config/colors";
import AppButton from "../components/AppButton";

function WelcomeScreen(props) {
  return (
    <ImageBackground
      blurRadius={7}
      style={styles.Background}
      source={require("../assets/img/1.png")}
    >
      <View style={styles.LogoContainer}>
        <Image
          style={styles.Logo}
          source={require("../assets/img/logoLight.png")}
        />
        {/* <Text style={styles.TagLine}>ZenDesk</Text>
        <AppText>ZenDesk is On!</AppText> */}
        {/* <MaterialCommunityIcons name="email" size={60} color={colors.blue} /> */}
      </View>
      <View style={styles.ButtonContainer}>
        <AppButton title="Login" color="secondary" />
        <AppButton title="Register" />

        {/* <AppButton title={"Login"} onPress={() => console.log("Tapped")} /> */}
      </View>

      {/* <View style={styles.LoginButton}></View>
      <View style={styles.RegisterButton}></View> */}
    </ImageBackground>
  );
}

export default WelcomeScreen;
