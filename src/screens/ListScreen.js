import React from "react";
import { View, Text, StyleSheet, FlatList, Button } from "react-native";

const ListScreen = (props) => {
  const friends = [
    { name: "Friend #1", age: 20 },
    { name: "Friend #2", age: 45 },
    { name: "Friend #3", age: 32 },
    { name: "Friend #4", age: 27 },
    { name: "Friend #5", age: 53 },
    { name: "Friend #6", age: 22 },
    { name: "Friend #7", age: 15 },
    { name: "Friend #8", age: 55 },
    { name: "Friend #9", age: 84 },
  ];
  return (
    <View>
      <Button
        title="return to components"
        onPress={() => props.navigation.navigate("Components")}
      />
      <FlatList
        data={friends}
        keyExtractor={(i) => i.name}
        renderItem={({ item }) => {
          return (
            <Text style={styles.textStyle}>
              {`${item.name} - Age ${item.age}`}
            </Text>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 30,
    textShadowColor: "#585858",
    borderColor: "black",
    borderWidth: 1,
    padding: 5,
  },
});

export default ListScreen;
