import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const ComponentsScreen = (props) => {
  return (
    <View>
      <Text style={styles.textStyle}>Bobo zmaj</Text>
      <Button
        title="return to home"
        onPress={() => props.navigation.navigate("Home")}
      />
      <Button
        title="go to ListScreen"
        onPress={() => props.navigation.navigate("List")}
      />
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
