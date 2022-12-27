import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import Box from "./common/Box";

interface Props {
  item: any;
  borderColor: string;
  onPress: any;
}

const RadioButton = ({ item, borderColor, onPress }: Props) => {
  return (
    <TouchableOpacity
      style={[
        styles.btnStyle,
        {
          borderColor: item?.selected ? borderColor : "#989898",
        },
      ]}
      onPress={() => onPress(item)}
    >
      {item?.selected ? (
        <Box
          backgroundColor={"white"}
          width={25}
          height={25}
          borderRadius={"16"}
          alignSelf={"center"}
        />
      ) : null}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btnStyle: {
    borderWidth: 3,
    borderRadius: 20,
    height: 40,
    width: 40,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default RadioButton;
