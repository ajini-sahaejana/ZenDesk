import React from "react";
import {
  Image,
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from "react-native";
import * as Yup from "yup";

import defaultStyles, { styles } from "../config/StyleSheet";
import Screen from "../components/Screen";
import AppText from "../components/Text";
import { AppForm, AppFormField, SubmitButton } from "../components/forms";

import KeyboardWrapper from "../components/forms/KeyboardWrapper";
import colors from "../config/colors";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function LoginScreen({ navigation }) {
  return (
    <KeyboardWrapper>
      <Screen>
        <View style={stylesinline.container}>
          <Image
            style={stylesinline.logo}
            source={require("../assets/img/logoDef.png")}
          />
          <AppText
            style={[
              {
                textAlign: "center",
                color: colors.primary,
                fontSize: 20,
                fontWeight: "bold",
                marginBottom: 30,
              },
            ]}
          >
            ACCOUNT LOGIN
          </AppText>
          <AppForm
            initialValues={{ email: "", password: "" }}
            onSubmit={(values) => {
              console.log(values);
              navigation.navigate("MainScreen");
            }}
            validationSchema={validationSchema}
          >
            <AppFormField
              // style={{ width: "80%", fontSize: 18 }}
              autoCapitalize="none"
              autocorrect={false}
              icon="email"
              keyboardType="email-address"
              name="email"
              placeholder="Email"
              textConentType="emailAddress"
            />
            <AppFormField
              // style={{ width: "80%", fontSize: 18 }}
              autoCapitalize="none"
              autocorrect={false}
              icon="lock"
              name="password"
              placeholder="Password"
              secureTextEntry
              textConentType="password"
            />
            <View style={{ marginTop: 25, width: "50%" }}>
              <SubmitButton title="Login" color="primary" />
            </View>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Register");
              }}
            >
              <AppText style={[defaultStyles.text, stylesinline.text]}>
                Don't have an account yet?
              </AppText>
            </TouchableOpacity>
          </AppForm>
        </View>
      </Screen>
    </KeyboardWrapper>
  );
}

const stylesinline = StyleSheet.create({
  container: {
    margin: 20,
    padding: 20,
    alignItems: "center",
  },
  logo: {
    width: 250,
    height: 250,
    alignSelf: "center",
    // marginTop: 10,
    marginBottom: 70,
  },
  text: {
    fontSize: 13,
    marginTop: 50,
    color: colors.darkLight,
    textDecorationLine: "underline",
    textAlign: "center",
  },
});

export default LoginScreen;
