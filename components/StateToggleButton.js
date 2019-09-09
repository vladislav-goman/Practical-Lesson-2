import React from "react";
import { StyleSheet, View, Button } from "react-native";

export default function StateToggleButton({
  title,
  callback,
  toClose = false
}) {
  return (
    <View style={styles.button}>
      <Button
        color={`${title === "back" ? "red" : "deepskyblue"}`}
        title={title}
        onPress={() => callback(!toClose)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    margin: 10
  }
});
