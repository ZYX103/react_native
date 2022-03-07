import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>Lepi zmaj 1</Text>
      <TouchableOpacity onPress={() => navigation.navigate("Components")}>
        <Text style={styles.button}>Go to components</Text>
      </TouchableOpacity>
      <Button
        title="Go to list demo"
        onPress={() => navigation.navigate("List")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
  button: {
    fontSize: 20,
    backgroundColor: "coral",
    textAlign: "center",
    color: "white",
    textTransform: "uppercase",
    padding: 5,
  },
});

export default HomeScreen;
