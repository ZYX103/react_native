import react from "react";
import { Text, View, StyleSheet } from "react-native";

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle1}>Child #1</Text>
      <Text style={styles.textStyle2}>Child #2</Text>
      <Text style={styles.textStyle3}>Child #3</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 3,
    borderColor: "black",
    flexDirection: "row",
    height: 100,
  },
  textStyle1: {
    borderWidth: 3,
    borderColor: "red",
    alignSelf: "flex-end",
  },
  textStyle2: {
    borderWidth: 3,
    borderColor: "red",
    flex: 1,
  },
  textStyle3: {
    borderWidth: 3,
    borderColor: "red",
    flex: 1,
    position: "absolute",
    left: 10,
    top: 20,
  },
});

export default BoxScreen;
