import React from "react";
import {
  Platform,
  StyleSheet,
  Touchable,
  TouchableOpacity,
} from "react-native";
import { SvgXml } from "react-native-svg";
import { dash1, dash2, dash5, dash8 } from "../assets/svg";
import Box from "./common/Box";
import Text from "./common/Text";

interface props {
  headerLable: string;
  navigation: any;
}

const InventoryHeader = ({
  headerLable = "Claudio Family",
  navigation,
}: props) => {
  Platform;
  return (
    <Box
      flexDirection={"row"}
      marginHorizontal={"30"}
      paddingVertical={"10"}
      paddingTop={"20"}
    >
      <Box justifyContent={"center"}>
        <SvgXml height={30} width={42} xml={dash8} />
      </Box>

      <Box
        paddingTop={Platform.OS === "android" ? "5" : "0"}
        paddingLeft={"10"}
        justifyContent={"center"}
      >
        <Text
          lineHeight={34}
          numberOfLines={2}
          fontSize={30}
          color={"white"}
          fontWeight={"400"}
        >
          {headerLable}
        </Text>
      </Box>
    </Box>
  );
};

export default InventoryHeader;

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
