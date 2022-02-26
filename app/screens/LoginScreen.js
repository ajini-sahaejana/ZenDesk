import React from "react";
import { Image, View, StyleSheet } from "react-native";
import * as Yup from "yup";

import defaultStyles, { styles } from "../config/StyleSheet";
import Screen from "../components/Screen";
import AppText from "../components/Text";

import { AppForm, AppFormField, SubmitButton } from "../components/forms";
import colors from "../config/colors";

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
          source={require("../assets/img/logoDef.png")}
        />
        <AppText
          style={[
            {
              textAlign: "center",
              color: colors.blue,
              fontSize: 20,
              fontWeight: "bold",
              marginBottom: 30,
            },
          ]}
        >
          ACCOUNT LOGIN
          {/* LOGIN TO YOUR ACCOUNT */}
        </AppText>
        {/* <AppText
          style={[
            defaultStyles.text,
            {
              marginTop: 10,
              height: 75,
              width: 350,
              textAlign: "center",
              fontSize: 16,
            },
          ]}
        >
          Login to ZenDesk to continue using your account.
        </AppText> */}
        <AppForm
          initialValues={{ email: "", password: "" }}
          onSubmit={(values) => console.log(values)}
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
          <AppText
            style={[
              defaultStyles.text,
              {
                fontSize: 13,
                marginTop: 60,
                color: colors.darkLight,
                textDecorationLine: "underline",
                textAlign: "center",
              },
            ]}
          >
            Don't have an account yet?
          </AppText>
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
    // marginTop: 10,
    marginBottom: 70,
  },
});

export default LoginScreen;
