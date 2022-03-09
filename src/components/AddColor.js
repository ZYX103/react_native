import React, { useState } from "react";
import { View, Text, StyleSheet, Button, FlatList } from "react-native";

const AddColor = () => {
  const [color, setColor] = useState([]);

  const setBg = () => {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    const rand = "#" + randomColor;
    setColor((prev) => [...prev, rand]);
    return rand;
  };

  const styles = StyleSheet.create({
    view: {
      marginTop: 10,
    },
    text: {
      backgroundColor: color ? color[color.length - 1] : "#fff",
    },
  });

  return (
    <View style={styles.view}>
      <Button title="Add color" onPress={setBg} />
      <FlatList
        keyExtractor={(i) => i}
        data={color}
        renderItem={({ item }) => {
          return <Text style={{ backgroundColor: `${item}` }}>{item}</Text>;
        }}
      />
    </View>
  );
};

export default AddColor;
