import React from "react";
import { View, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import defaultStyles from "../config/StyleSheet";

function AppTextInput({
  icon,
  width = "100%",
  isPassword,
  hidePassword,
  setHidePassword,
  ...otherProps
}) {
  return (
    <View style={[styles.container, { width }]}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={25}
          color={defaultStyles.colors.secondary}
          style={styles.icon}
        />
      )}
      <TextInput style={defaultStyles.text} {...otherProps} />
      {isPassword && (
        <TouchableOpacity
          onPress={() => setHidePassword(!hidePassword)}
          styles={{
            left: 25,
            right: 30,
            top: 38,
            paddingTop: 10,
          }}
        >
          <MaterialCommunityIcons
            name={hidePassword ? "eye-off-outline" : "eye-outline"}
            size={20}
            color={defaultStyles.colors.secondary}
          />
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.lightGreen,
    borderRadius: 25,
    flexDirection: "row",
    // width: "100%",
    padding: 10,
    marginVertical: 10,
    alignItems: "center",
  },
  icon: {
    // paddingTop: 2,
    marginRight: 20,
    marginLeft: 5,
  },
});

export default AppTextInput;
