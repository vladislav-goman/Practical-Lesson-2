import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";

export default function StudentInput({fieldTitle}) {
  return (
    <View>
      <Text style={styles.label}>{fieldTitle}</Text>
      <TextInput style={styles.input} placeholder={`Enter ${fieldTitle}`} />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    marginVertical: 10,
    padding: 5,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 4,
    minWidth: "40%"
  },
  label: {
    textTransform: "capitalize"
  }
});
