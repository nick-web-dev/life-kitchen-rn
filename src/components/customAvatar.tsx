import React from "react";
import { StyleSheet } from "react-native";
import { SvgXml } from "react-native-svg";
import Box from "./common/Box";

interface Props {
  icon: any;
}

const CustomAvatar = ({ icon }: Props) => {
  return (
    <Box
      backgroundColor={"white"}
      width={100}
      height={100}
      borderRadius={"50"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <SvgXml width={47} height={47} xml={icon} />
    </Box>
  );
};

const styles = StyleSheet.create({});

export default CustomAvatar;
