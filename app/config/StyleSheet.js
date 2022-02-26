import { StyleSheet, TouchableOpacity, Platform } from "react-native";
import { useFonts } from "expo-font";
import { StatusBar, StatusBarStyle } from "expo-status-bar";

import colors from "./colors";

export default {
  colors,
  text: {
    color: colors.dark,
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    width: "80%",
  },
};

export const styles = StyleSheet.create({
  Background: {
    flex: 1,
    // justifyContent: "flex-end",
    //flexDirection: "row",
    alignItems: "center",
    height: "100%",
    backgroundColor: colors.white,
  },
  Container: {
    flex: 1,
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
    padding: 25,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  ButtonContainer: {
    padding: 40,
    width: "100%",
  },
  InnerContainer: {
    flex: 1,
    width: 300,
    alignItems: "center",
    justifyContent: "flex-end",
    paddingBottom: 100,
  },
  Logo: {
    // position: "absolute",
    // top: 10,
    width: 350,
    height: 350,
    // resizeMode: "cover",
    //backgroundColor: "dodgerblue",
    //flex: 1,
    //flexDirection: "row",
    // justifyContent: "space-evenly",
    // alignItems: "center",
  },
  LogoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  Title: {
    fontSize: 30,
    fontFamily: "Roboto",
    fontStyle: "normal",
    textAlign: "center",
    //fontWeight: "bold",
    color: "black",
    padding: 10,
  },
  SubTitle: {
    fontSize: 18,
    marginBottom: 20,
    letterSpacing: 1,
    fontWeight: "bold",
    color: colors.tertiary,
  },
  TagLine: {
    fontSize: 25,
    fontWeight: "600",
    paddingVertical: 20,
  },
  StyledFormArea: {
    width: 90,
  },
  StyledTextInput: {
    backgroundColor: colors.secondary,
    padding: 15,
    paddingLeft: 55,
    paddingRight: 55,
    borderRadius: 5,
    fontSize: 16,
    height: 60,
    marginVertical: 3,
    marginBottom: 10,
    color: colors.tertiary,
  },
  StyledInputLabel: {
    color: colors.tertiary,
    fontSize: 13,
    textAlign: "left",
  },
  LeftIcon: {
    left: 15,
    top: 38,
    position: "absolute",
    zIndex: 1,
  },
  RightIcon: {
    left: 15,
    top: 38,
    position: "absolute",
    zIndex: 1,
  },
  StyledButton: {
    padding: 15,
    backgroundColor: colors.brand,
    justifyContent: "center",
    borderRadius: 5,
    marginVertical: 5,
    height: 60,
  },
  ButtonText: {
    color: colors.primary,
    fontSize: 16,
  },
  // LoginButton: {
  //   width: 100,
  //   height: 100,
  //   backgroundColor: colors.secondary,
  //   borderWidth: 1,
  //   borderColor: colors.lightBlue,
  //   borderRadius: 50,
  //   elevation: 20,
  //   margin: 20,
  // },
  // RegisterButton: {
  //   width: 100,
  //   height: 100,
  //   backgroundColor: colors.primary,
  //   borderWidth: 1,
  //   borderColor: colors.lightBlue,
  //   borderRadius: 50,
  //   elevation: 20,
  //   margin: 20,
  //   marginBottom: 40,
  // },
});
