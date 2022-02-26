import React from "react";
import { Image, View, StyleSheet } from "react-native";
import * as Yup from "yup";

import defaultStyles, { styles } from "../config/StyleSheet";
import Screen from "../components/Screen";
import AppText from "../components/Text";

import { AppForm, AppFormField, SubmitButton } from "../components/forms";
import KeyboardWrapper from "../components/forms/KeyboardWrapper";
import colors from "../config/colors";

const validationSchema = Yup.object().shape({
  username: Yup.string().required().min(4).label("Username"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function RegisterScreen(props) {
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
            CREATE AN ACCOUNT
          </AppText>

          <AppForm
            initialValues={{ username: "", email: "", password: "" }}
            onSubmit={(values) => console.log(values)}
            validationSchema={validationSchema}
          >
            <AppFormField
              autoCapitalize="none"
              autocorrect={false}
              icon="account"
              keyboardType="default"
              name="username"
              placeholder="Username"
              textConentType="username"
            />
            <AppFormField
              autoCapitalize="none"
              autocorrect={false}
              icon="email"
              keyboardType="email-address"
              name="email"
              placeholder="Email"
              textConentType="emailAddress"
            />
            <AppFormField
              autoCapitalize="none"
              autocorrect={false}
              icon="lock"
              name="password"
              placeholder="Password"
              // placeholderTextColor={colors.pink}
              secureTextEntry
              textConentType="password"
            />
            <View style={{ marginTop: 25, width: "50%" }}>
              <SubmitButton title="Register" color="primary" />
            </View>
            <AppText
              style={[
                defaultStyles.text,
                {
                  fontSize: 13,
                  marginTop: 50,
                  color: colors.darkLight,
                  textDecorationLine: "underline",
                  textAlign: "center",
                },
              ]}
            >
              Already have an account?
            </AppText>
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
    // backgroundColor: "red",
  },
});

export default RegisterScreen;
