import React from "react";
import { Text } from "react-native";

// import colors from "../config/colors";
import defaultStyles from "../config/StyleSheet";

function AppText({ children, style }) {
  return <Text style={(defaultStyles.text, style)}>{children}</Text>;
}

// const styles = StyleSheet.create({
//   text: {
//     color: colors.primary,
//     textAlign: "center",
//     fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
//     // ...Platform.select({
//     //   ios: {
//     //     // fontSize: 12,
//     //     fontFamily: "Avenir",
//     //   },
//     //   android: {
//     //     fontSize: 18,
//     //     fontFamily: "Roboto",
//     //   },
//     // }),
//   },
// });

export default AppText;
