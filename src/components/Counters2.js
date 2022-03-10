import React, { useReducer } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const reducer = (state, action) => {
  switch (action.tip) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "kvadriraj":
      return { count: state.count * state.count };
    default:
      return state;
  }
};

const Counters = () => {
  const [state, dispatch] = useReducer(reducer, { count: 5 });

  return (
    <View style={styles.counter}>
      <Button title="Increase" onPress={() => dispatch({ tip: "increment" })} />
      <Button title="Decrease" onPress={() => dispatch({ tip: "decrement" })} />
      <Button
        title="Kvadriraj"
        onPress={() => dispatch({ tip: "kvadriraj" })}
      />
      <Text style={styles.text}>Counter : {state.count}</Text>
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
