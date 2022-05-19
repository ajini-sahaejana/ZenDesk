import React from "react";
import { StyleSheet } from "react-native";

import AppText from "../Text";

function ErrorMessage({ error, visible }) {
  if (!visible || !error) {
    return null;
  }
  return <AppText style={styles.errorStyles}>{error}</AppText>;
}

const styles = StyleSheet.create({
  errorStyles: {
    color: "red",
  },
});

export default ErrorMessage;
