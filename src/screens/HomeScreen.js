import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";
import AddColor from "../components/AddColor";
import Counters from "../components/Counters";

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
      <Button
        title="Go to Image screen"
        onPress={() => navigation.navigate("ImageScreen")}
      />
      <Button
        title="Go to Color screen"
        onPress={() => navigation.navigate("AddColor")}
      />
      <Button
        title="Go to Square screen"
        onPress={() => navigation.navigate("SquareScreen")}
      />
      <Counters></Counters>
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
