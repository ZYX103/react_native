import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { reportLogBoxError } from "react-native/Libraries/LogBox/Data/LogBoxData";
import AddColor2 from "./AddColor2";

const COLOR_INCREMENT = 15;

const SquareScreen = () => {
  const [red, setRed] = useState(100);
  const [green, setGreen] = useState(100);
  const [blue, setBlue] = useState(100);

  setColor = (color, change) => {
    switch (color) {
      case "red":
        red + change > 255 || red + change < 0 ? null : setRed(red + change);
        return;
      case "green":
        green + change > 255 || green + change < 0
          ? null
          : setGreen(green + change);
        return;
      case "blue":
        blue + change > 255 || blue + change < 0
          ? null
          : setBlue(blue + change);
        return;
      default:
        return;
    }
  };

  return (
    <View>
      <AddColor2
        color="red"
        increase={() => setColor("red", COLOR_INCREMENT)}
        decrease={() => setColor("red", -1 * COLOR_INCREMENT)}
      />
      <AddColor2
        color="blue"
        increase={() => setColor("green", COLOR_INCREMENT)}
        decrease={() => setColor("green", -1 * COLOR_INCREMENT)}
      />
      <AddColor2
        color="green"
        increase={() => setColor("blue", COLOR_INCREMENT)}
        decrease={() => setColor("blue", -1 * COLOR_INCREMENT)}
      />
      <Text
        style={{
          backgroundColor: `rgb(${red}, ${green}, ${blue})`,
          height: 100,
          width: 100,
        }}
      >
        Change color
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SquareScreen;
