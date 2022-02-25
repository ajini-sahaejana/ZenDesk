import React from "react";
import { View, ImageBackground, StyleSheet, Image, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppText from "../components/AppText";
import { styles } from "../components/StyleSheet";
import colors from "../config/colors";

function WelcomeScreen(props) {
  return (
    <ImageBackground
      style={styles.Background}
      //source={require("../assets/img/3.png")}
    >
      <View style={styles.LogoContainer}>
        <Image
          style={styles.Logo}
          source={require("../assets/img/logoLight.png")}
        />
        {/* <Text style={styles.Title}>ZenDesk</Text> */}
        <AppText>ZenDesk is On!</AppText>
        <MaterialCommunityIcons name="email" size={60} color={colors.blue} />
      </View>
      <View style={styles.LoginButton}></View>
      <View style={styles.RegisterButton}></View>
    </ImageBackground>
  );
}

export default WelcomeScreen;
