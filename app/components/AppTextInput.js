import React from "react";
import { View, StyleSheet, Platform, TextInput } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

// import colors from "../config/colors";
// import styles from "../config/StyleSheet";
import defaultStyles from "../config/StyleSheet";

function AppTextInput({ icon, ...otherProps }) {
  return (
    <View style={styles.container}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={25}
          color={defaultStyles.colors.secondary}
          style={styles.icon}
        />
      )}
      <TextInput style={defaultStyles.text} {...otherProps} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.light,
    borderRadius: 25,
    flexDirection: "row",
    width: "100%",
    padding: 10,
    marginVertical: 10,
  },
  icon: {
    // paddingTop: 2,
    marginRight: 20,
    marginLeft: 5,
  },
});

export default AppTextInput;
