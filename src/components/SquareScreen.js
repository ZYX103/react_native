import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import AddColor2 from "./AddColor2";

const SquareScreen = () => {
  return (
    <View>
      <AddColor2 color="Red" />
      <AddColor2 color="Blue" />
      <AddColor2 color="Green" />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SquareScreen;
