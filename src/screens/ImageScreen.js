import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ImageDetail from "../components/ImageDetail";

const ImageScreen = (props) => {
  return (
    <View>
      <ImageDetail
        title="forest"
        imageSource={require("../../assets/forest.jpg")}
        score={6}
      />
      <ImageDetail
        title="beach"
        imageSource={require("../../assets/beach.jpg")}
        score={5}
      />
      <ImageDetail
        title="mountain"
        imageSource={require("../../assets/mountain.jpg")}
        score={7}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageScreen;
