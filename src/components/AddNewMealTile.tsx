import React from "react";
import { StyleSheet } from "react-native";
import { SvgXml } from "react-native-svg";
import { lunchIcon } from "../assets/svg";
import Box from "./common/Box";
import Text from "./common/Text";

interface Props {
  icon: any;
}

const AddNewMealTile = ({ icon }: Props) => {
  return (
    <Box
      backgroundColor={"grey6"}
      height={124}
      borderRadius={"40"}
      padding={"20"}
    >
      <Box flexDirection={"row"}>
        <SvgXml width={32} height={32} xml={lunchIcon} />
        <Text
          lineHeight={19}
          fontSize={16}
          color={"white"}
          fontWeight={"700"}
          alignSelf={"flex-end"}
          paddingLeft={"10"}
          paddingBottom={"5"}
        >
          LUNCH
        </Text>
      </Box>
      <Box flexDirection={"row-reverse"}>
        <Text
          lineHeight={19}
          numberOfLines={2}
          fontSize={16}
          color={"brandGreen"}
          fontWeight={"700"}
          alignSelf={"center"}
          paddingLeft={"10"}
        >
          + Add meal
        </Text>
      </Box>
      <Box paddingVertical={"5"} flexDirection={"row"}>
        <Text
          lineHeight={19}
          numberOfLines={2}
          fontSize={20}
          color={"white"}
          fontWeight={"600"}
          alignSelf={"center"}
          paddingLeft={"10"}
        >
          You have nothing added to your lunch
        </Text>
      </Box>
    </Box>
  );
};

const styles = StyleSheet.create({});

export default AddNewMealTile;
