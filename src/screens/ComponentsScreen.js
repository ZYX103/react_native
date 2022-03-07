import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ComponentsScreen = () => {
  return (
    <View>
      <Text style={styles.textStyle}>Dado zmaj</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
    color: "#fff",
    backgroundColor: "coral",
    textAlign: "center",
  },
});

export default ComponentsScreen;
