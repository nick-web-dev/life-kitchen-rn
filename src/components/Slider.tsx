import Slider from "@react-native-community/slider";
import React from "react";
import { StyleSheet } from "react-native";

interface Props {
  onValueChange: any;
  value: number;
  minimumLimit: number;
  maximumLimit: number;
}

const SliderComponent = ({
  onValueChange,
  value,
  minimumLimit,
  maximumLimit,
}: Props) => {
  return (
    <Slider
      style={{ height: 100 }}
      minimumValue={minimumLimit}
      maximumValue={maximumLimit}
      minimumTrackTintColor="#FFFFFF"
      maximumTrackTintColor="#FFFFFF"
      thumbTintColor={"#1ABE73"}
      onValueChange={onValueChange}
      value={value}
    />
  );
};

const styles = StyleSheet.create({});

export default SliderComponent;
