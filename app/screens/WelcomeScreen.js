import React from "react";
import { View, ImageBackground, Image, Text } from "react-native";

import defaultStyles from "../config/StyleSheet";
import AppText from "../components/Text";
import { styles } from "../config/StyleSheet";
import AppButton from "../components/Button";
import colors from "../config/colors";

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
          source={require("../assets/img/logoText.png")}
        />
      </View>
      <View style={styles.InnerContainer}>
        <AppText
          style={[
            defaultStyles.text,
            {
              textAlign: "center",
              color: colors.primary,
              fontSize: 20,
              fontWeight: "bold",
              height: 150,
              position: "absolute",
              textAlignVertical: "center",
            },
          ]}
        >
          Welcome to ZenDesk, Your mental health companion.
          {/* Let's get started. */}
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
