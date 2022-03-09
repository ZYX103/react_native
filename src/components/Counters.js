import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const Counters = () => {
  const [increase, setIncrease] = useState(0);

  const numberUp = () => {
    setIncrease((prev) => prev + 1);
  };
  const numberDown = () => {
    setIncrease((prev) => prev - 1);
  };
  return (
    <View style={styles.counter}>
      <Button title="Increase" onPress={numberUp} />
      <Button title="Decrease" onPress={numberDown} />
      <Text style={styles.text}>Counter : {increase}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  counter: {
    marginTop: 10,
  },
  text: {
    fontSize: 30,
  },
});

export default Counters;
