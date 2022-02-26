import React from "react";
import { View, ImageBackground, Image, Text } from "react-native";

import defaultStyles from "../config/StyleSheet";
import AppText from "../components/Text";
import { styles } from "../config/StyleSheet";
import AppButton from "../components/Button";

function WelcomeScreen(props) {
  return (
    <ImageBackground
      blurRadius={7}
      style={styles.Background}
      // /source={require("../assets/img/1.png")}
    >
      <View style={styles.LogoContainer}>
        <Image
          style={styles.Logo}
          source={require("../assets/img/logoLight.png")}
        />
      </View>
      <View style={styles.InnerContainer}>
        <AppText
          style={[
            defaultStyles.text,
            {
              position: "absolute",
              paddingBottom: 50,
              height: 150,
              textAlign: "center",
              textAlignVertical: "center",
              justifyContent: "center",
              // backgroundColor: "red",
            },
          ]}
        >
          Welcome to ZenDesk, Your mental health companion. Let's get started.
        </AppText>
      </View>

      <View style={styles.ButtonContainer}>
        <AppButton title="Login" color="secondary" />
        <AppButton title="Register" />
      </View>
    </ImageBackground>
  );
}

export default WelcomeScreen;
