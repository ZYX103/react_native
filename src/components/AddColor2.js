import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const AddColor2 = ({ color, increase, decrease }) => {
  return (
    <View>
      <Text style={{ backgroundColor: color }}>{color}</Text>
      <Button title={`Increase ${color}`} onPress={() => increase()} />
      <Button title={`Decrease ${color}`} onPress={() => decrease()} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default AddColor2;
