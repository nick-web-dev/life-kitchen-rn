import React from "react";
import { StyleSheet, Touchable, TouchableOpacity } from "react-native";
import { SvgXml } from "react-native-svg";
import { dash1, dash2 } from "../assets/svg";
import Box from "./common/Box";
import Text from "./common/Text";

interface props {
  headerLable: string;
  navigation: any;
}

const MainHeader = ({ headerLable = "Claudio Family", navigation }: props) => {
  return (
    <Box
      marginTop={"20"}
      flexDirection={"row"}
      justifyContent={"space-between"}
    >
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <SvgXml height={29} width={29} xml={dash2} />
      </TouchableOpacity>
      <Box justifyContent={"center"} flexDirection={"row"}>
        <SvgXml height={29} width={29} xml={dash1} />
        <Text
          lineHeight={19}
          numberOfLines={2}
          fontSize={16}
          color={"white"}
          fontWeight={"700"}
          alignSelf={"center"}
          paddingLeft={"10"}
        >
          {headerLable}
        </Text>
      </Box>
    </Box>
  );
};

export default MainHeader;

const styles = StyleSheet.create({
  logoStyle: {
    resizeMode: "contain",
    height: 60,
    width: 60,
  },
  starTextStyle: {
    alignSelf: "center",
    color: "rgba(0, 0, 0, 0.7)",
    fontWeight: "700",
    fontSize: 16,
    fontFamily: "Helvetica-BoldOblique",
  },
  headerView: {
    height: 50,
    backgroundColor: "#F9F9F9",
    marginBottom: 20,
    // borderBottomWidth: 1,
    borderBottomColor: "#CCCDD3",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
  },
});
