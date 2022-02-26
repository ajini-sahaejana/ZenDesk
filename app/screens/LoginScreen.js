import React from "react";
import { Image, View, StyleSheet } from "react-native";
import * as Yup from "yup";

import defaultStyles from "../config/StyleSheet";
import Screen from "../components/Screen";
import AppText from "../components/Text";

import { AppForm, AppFormField, SubmitButton } from "../components/forms";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function LoginScreen(props) {
  return (
    <Screen>
      <View style={stylesinline.container}>
        <Image
          style={stylesinline.logo}
          source={require("../assets/img/logoLight.png")}
        />
        <AppText
          style={[
            defaultStyles.text,
            {
              marginTop: 20,
              height: 100,
              width: 300,
              textAlign: "center",
            },
          ]}
        >
          Login to ZenDesk now to continue using your account.
        </AppText>
        <AppForm
          initialValues={{ email: "", password: "" }}
          onSubmit={(values) => console.log(values)}
          validationSchema={validationSchema}
        >
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
            secureTextEntry
            textConentType="password"
          />
          <View style={{ marginTop: 25, width: "50%" }}>
            <SubmitButton title="Login" />
          </View>
        </AppForm>
      </View>
    </Screen>
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
    marginTop: 20,
    marginBottom: 20,
  },
});

export default LoginScreen;
