import React from "react";
import { View, ImageBackground, Image, Text } from "react-native";

import defaultStyles from "../config/StyleSheet";
import AppText from "../components/Text";
import { styles } from "../config/StyleSheet";
import AppButton from "../components/Button";
import colors from "../config/colors";
import routes from "../navigation/routes";

function WelcomeScreen({ navigation }) {
  return (
    <ImageBackground
      blurRadius={7}
      style={styles.Background}
      // /source={require("../assets/img/1.png")}
    >
      <View style={styles.LogoContainer}>
        <Image
          style={styles.Logo}
          source={require("../assets/img/logoDefault.png")}
        />
      </View>
      <View style={styles.InnerContainer}>
        <AppText
          style={[
            defaultStyles.text,
            {
              textAlign: "center",
              color: colors.primary,
              fontSize: 18,
              fontWeight: "bold",
              width: "100%",
              height: 50,
              position: "absolute",
              textAlignVertical: "center",
            },
          ]}
        >
          {/* Welcome to ZenDesk, your mental health companion. Let's get started. */}
        </AppText>
      </View>
      <View style={styles.ButtonContainer}>
        <AppButton
          title="Login"
          onPress={() => navigation.navigate(routes.LOGIN)}
          color="secondary"
        />
        <AppButton
          title="Register"
          onPress={() => navigation.navigate(routes.REGISTER)}
        />
      </View>
    </ImageBackground>
  );
}

export default WelcomeScreen;
