import React, { useReducer } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { reportLogBoxError } from "react-native/Libraries/LogBox/Data/LogBoxData";
import AddColor2 from "./AddColor2";

const COLOR_INCREMENT = 15;

const reducer = (state, action) => {
  // state ===  {red:number, green:number, blue:number}
  // action === {colorToCHange: "red" || "green" || "blue", amount :15 || -15}

  switch (action.type) {
    case "change_red":
      return state.red + action.payload > 255 || state.red + action.payload < 0
        ? state
        : { ...state, red: state.red + action.payload };
    case "change_green":
      return state.green + action.payload > 255 ||
        state.green + action.payload < 0
        ? state
        : { ...state, green: state.green + action.payload };
    case "change_blue":
      return state.blue + action.payload > 255 ||
        state.blue + action.payload < 0
        ? state
        : { ...state, blue: state.blue + action.payload };
    default:
      return state;
  }
};

const SquareScreen = () => {
  // početni state je jednak objektu desno koji je prosljeden u reducer. SLično kao defaultna vrijednost za UseState
  // dispatch je tehnicki run reducer funkciju - slično kao setState
  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });
  const { red, green, blue } = state;

  return (
    <View>
      <AddColor2
        color="red"
        increase={() =>
          dispatch({ type: "change_red", payload: COLOR_INCREMENT })
        }
        decrease={() =>
          dispatch({ type: "change_red", payload: -1 * COLOR_INCREMENT })
        }
      />
      <AddColor2
        color="blue"
        increase={() =>
          dispatch({ type: "change_blue", payload: COLOR_INCREMENT })
        }
        decrease={() =>
          dispatch({ type: "change_blue", payload: -1 * COLOR_INCREMENT })
        }
      />
      <AddColor2
        color="green"
        increase={() =>
          dispatch({ type: "change_green", payload: COLOR_INCREMENT })
        }
        decrease={() =>
          dispatch({ type: "change_green", payload: -1 * COLOR_INCREMENT })
        }
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
