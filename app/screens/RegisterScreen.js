import React, { useState } from "react";
import {
  Image,
  View,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import * as Yup from "yup";
import { Formik } from "formik";

import defaultStyles, { styles } from "../config/StyleSheet";
import Screen from "../components/Screen";
import AppText from "../components/Text";
import { AppForm, AppFormField, SubmitButton } from "../components/forms";

import KeyboardWrapper from "../components/forms/KeyboardWrapper";
import colors from "../config/colors";

// API Client
import axios from "axios";

const validationSchema = Yup.object().shape({
  username: Yup.string().required().min(3).label("Username"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function RegisterScreen({ navigation }) {
  const [hidePassword, setHidePassword] = useState(true);
  const [message, setMessage] = useState();
  const [messageType, setMessageType] = useState();

  const handleRegister = (credentials, setSubmitting) => {
    handleMessage(null);
    const url = "https://zendesklk.herokuapp.com/user/register";

    axios
      .post(url, credentials)
      .then((response) => {
        const result = response.data;
        const { message, status, data } = result;

        if (status !== "SUCCESS") {
          handleMessage(message, status);
        } else {
          navigation.navigate("Welcome", { ...data });
        }
        setSubmitting(false);
      })
      .catch((error) => {
        console.log(error.JSON());
        setSubmitting(false);
        handleMessage("An error occured. Check your network and try again");
      });
  };

  const handleMessage = (message, type = "FAILED") => {
    setMessage(message);
    setMessageType(messageType);
  };

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
                // marginTop: -40,
                marginBottom: 30,
              },
            ]}
          >
            CREATE AN ACCOUNT
          </AppText>
          <Formik
            initialValues={{ username: "", email: "", password: "" }}
            onSubmit={(values, { setSubmitting }) => {
              handleRegister(values, setSubmitting);
            }}
            validationSchema={validationSchema}
          >
            {({ isSubmitting }) => (
              <>
                <AppFormField
                  autoCapitalize="none"
                  autocorrect={false}
                  icon="account"
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
                  secureTextEntry={hidePassword}
                  textConentType="password"
                  isPassword={true}
                  hidePassword={hidePassword}
                  setHidePassword={setHidePassword}
                />
                {/* <View style={{ marginTop: 25, width: "50%" }}>
              <SubmitButton title="Register" color="primary" />
            </View> */}
                {!isSubmitting && (
                  <View style={{ marginTop: 25, width: "50%" }}>
                    <SubmitButton title="Register" color="primary" />
                  </View>
                )}
                {isSubmitting && (
                  <View style={{ marginTop: 25, width: "50%" }}>
                    <SubmitButton
                      title="loading"
                      color="secondary"
                      disabled={true}
                    />
                    <ActivityIndicator size="large" color="primary" />
                  </View>
                )}
                <AppText type={messageType} style={styles.MsgBox}>
                  {message}
                </AppText>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate("Login");
                  }}
                >
                  <AppText style={[defaultStyles.text, stylesinline.text]}>
                    Already have an account?
                  </AppText>
                </TouchableOpacity>
              </>
            )}
          </Formik>
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
  text: {
    fontSize: 13,
    marginTop: 20,
    color: colors.darkLight,
    textDecorationLine: "underline",
    textAlign: "center",
  },
});

export default RegisterScreen;
