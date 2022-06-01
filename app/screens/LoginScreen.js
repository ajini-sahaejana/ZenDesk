import React, { useState, useContext } from "react";
import {
  Image,
  View,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import * as Yup from "yup";
import { Formik } from "formik";

import defaultStyles from "../config/StyleSheet";
import { styles } from "../config/StyleSheet";
import Screen from "../components/Screen";
import AppText from "../components/Text";
import { AppForm, AppFormField, SubmitButton } from "../components/forms";

import KeyboardWrapper from "../components/forms/KeyboardWrapper";
import colors from "../config/colors";

// API Client
import axios from "axios";

//credentials-context
import AsyncStorage from "@react-native-async-storage/async-storage/";
import { CredentialsContext } from "../components/CredentialsContext";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function LoginScreen({ navigation }) {
  const [hidePassword, setHidePassword] = useState(true);
  const [message, setMessage] = useState();
  const [messageType, setMessageType] = useState();

  const { storedCredentials, setStoredCredentials } =
    useContext(CredentialsContext);

  const handleLogin = (credentials, setSubmitting) => {
    handleMessage(null);
    const url = "https://zendesklk.herokuapp.com/user/login";

    axios
      .post(url, credentials)
      .then((response) => {
        const result = response.data;
        const { message, status, data } = result;

        if (status !== "SUCCESS") {
          handleMessage(message, status);
          setSubmitting(false);
        } else {
          // navigation.navigate("App", { ...data[0] });
          persistLogin({ ...data[0] }, message, status);
        }
      })
      .catch((error) => {
        console.log(error);
        setSubmitting(false);
        handleMessage("An error occured. Check your network and try again");
      });
  };

  const handleMessage = (message, type = "FAILED") => {
    setMessage(message);
    setMessageType(messageType);
  };

  const persistLogin = (credentials, message, status) => {
    AsyncStorage.setItem("zendeskCredentials", JSON.stringify(credentials))
      .then(() => {
        handleMessage(message, status);
        setStoredCredentials(credentials);
      })
      .catch((error) => {
        console.log(error);
        handleMessage("Persisting Login Failed");
      });
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
                marginBottom: 30,
              },
            ]}
          >
            ACCOUNT LOGIN
          </AppText>
          <Formik
            initialValues={{ email: "", password: "" }}
            onSubmit={(values, { setSubmitting }) => {
              handleLogin(values, setSubmitting);
            }}
            validationSchema={validationSchema}
          >
            {({ isSubmitting }) => (
              <>
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

                {!isSubmitting && (
                  <View style={{ marginTop: 25, width: "50%" }}>
                    <SubmitButton title="Login" color="primary" />
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
                    navigation.navigate("Register");
                  }}
                >
                  <AppText style={[defaultStyles.text, stylesinline.text]}>
                    Don't have an account yet?
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
