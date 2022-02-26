import React from "react";
import { View, StyleSheet, TextInput } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import defaultStyles from "../config/StyleSheet";

function AppTextInput({ icon, width = "100%", ...otherProps }) {
  return (
    <View style={[styles.container, { width }]}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={25}
          color={defaultStyles.colors.primary}
          style={styles.icon}
        />
      )}
      <TextInput style={defaultStyles.text} {...otherProps} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.lighGreen,
    borderRadius: 25,
    flexDirection: "row",
    // width: "100%",
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
