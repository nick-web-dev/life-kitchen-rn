import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { SvgXml } from "react-native-svg";
import {
  backArrow,
  dash1,
  dash2,
  greenAvatar,
  whiteArrow,
} from "../assets/svg";
import Box from "./common/Box";
import CTAWithDynamicIcon from "./common/CTAWithDynamicIcon";
import Text from "./common/Text";

interface props {
  headerLable: string;
  navigation: any;
  shoppingItems: string;
}

const MealHeader = ({
  headerLable = "Claudio Family",
  navigation,
  shoppingItems,
}: props) => {
  const ShoppingButton = () => {
    return (
      <TouchableOpacity>
        <Box
          height={40}
          width={202}
          backgroundColor={"grey6"}
          borderRadius={"10"}
          justifyContent={"center"}
        >
          <Text
            lineHeight={19}
            numberOfLines={2}
            fontSize={14}
            color={"white"}
            fontWeight={"700"}
            alignSelf={"center"}
            paddingLeft={"10"}
          >
            View shopping list
            <Text
              lineHeight={19}
              numberOfLines={2}
              fontSize={14}
              color={"red1"}
              fontWeight={"700"}
              alignSelf={"center"}
              paddingLeft={"10"}
            >
              {" " + shoppingItems + " "}
            </Text>
            Items
          </Text>
        </Box>
      </TouchableOpacity>
    );
  };

  return (
    <Box
      marginTop={"20"}
      flexDirection={"row"}
      justifyContent={"space-between"}
      marginHorizontal={"20"}
    >
      <Box
        flexDirection={"row"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <CTAWithDynamicIcon
          borderRadius={"cta"}
          justifyContent={"center"}
          alignItems={"center"}
          backgroundColor={"grey6"}
          variant="tertiary"
          width={50}
          height={50}
          withIcon
          onlyIcon
          icon={() => <SvgXml height={17} width={17} xml={whiteArrow} />}
          onPress={() => navigation.goBack()}
        />
        <Box marginLeft={"20"} justifyContent={"center"} flexDirection={"row"}>
          <SvgXml height={29} width={29} xml={greenAvatar} />
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
      <ShoppingButton />
    </Box>
  );
};

export default MealHeader;

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
