import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Linking,
} from "react-native";
import React from "react";
import { useTailwind } from "tailwind-rn";
import colors from "../config/colors";
import AppButton from "../components/Button";
// import { styles } from "../config/StyleSheet";

export default function HelpScreen() {
  return (
    <View style={[stylesinline.container]}>
      <View>
        <Text style={stylesinline.text}>24 Hour</Text>
        <Text style={stylesinline.text}>Help and Support</Text>
      </View>
      <View style={stylesinline.space}></View>
      <View style={[stylesinline.container2]}>
        <Text style={stylesinline.text2}>
          Click the link below to fill the mental health questionnaire in order
          to proceed with a free consultation.
        </Text>
      </View>
      <AppButton
        onPress={() =>
          Linking.openURL(
            "https://docs.google.com/forms/d/1J9qo1_7idwOzzyc7_jNOA0h3PnvGfdrq0C73FIX77Vc"
          ).catch((err) => console.error("An error occurred", err))
        }
        title="BetterHelp Survey"
      ></AppButton>
      <View style={stylesinline.space}></View>

      <View style={[stylesinline.container2]}>
        <Text style={stylesinline.text}>Contact Us Now</Text>
        <Text style={stylesinline.text3}>Sumitrayo </Text>
        <TouchableOpacity onPress={() => Linking.openURL("tel:+94112674436")}>
          <Text style={stylesinline.text3}>011 2 674 436</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});

const stylesinline = StyleSheet.create({
  container: {
    margin: 20,
    padding: 10,
    // alignItems: "center",
  },
  container2: {
    margin: 0,
    padding: 0,
    // alignItems: "center",
  },
  logo: {
    width: 250,
    height: 250,
    alignSelf: "center",
    // marginTop: 10,
    marginBottom: 70,
  },
  text: {
    color: colors.primary,
    fontSize: 40,
    marginTop: 0,
  },
  text2: {
    fontSize: 16,
    marginTop: 0,
  },
  text3: {
    fontSize: 26,
    marginTop: 0,
  },
  space: {
    // fontSize: 20,
    marginTop: 150,
  },
});
