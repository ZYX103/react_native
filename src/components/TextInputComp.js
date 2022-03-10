import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

const TextInputComp = () => {
  const [name, setName] = useState("gs");

  return (
    <View style={styles.counter}>
      <TextInput
        style={styles.input}
        value={name}
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={(i) => setName(i)}
      ></TextInput>
      <Text style={styles.text}>
        {name.length > 4 ? "" : "password must be at least 5 characters long"}{" "}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    margin: 10,
    fontSize: 25,
  },
  text: {
    fontSize: 30,
  },
});

export default TextInputComp;
