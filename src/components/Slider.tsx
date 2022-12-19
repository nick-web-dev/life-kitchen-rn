import Slider from "@react-native-community/slider";
import React from "react";
import { StyleSheet } from "react-native";

interface Props {}

const SliderComponent = ({}: Props) => {
  return (
    <Slider
      style={{ height: 100 }}
      minimumValue={0}
      maximumValue={1}
      minimumTrackTintColor="#FFFFFF"
      maximumTrackTintColor="#FFFFFF"
      thumbTintColor={"#1ABE73"}
    />
  );
};

const styles = StyleSheet.create({});

export default SliderComponent;
