import React from "react";
import { StyleSheet } from "react-native";
import { SvgXml } from "react-native-svg";
import { breakfastIcon, greyDoneArrow } from "../assets/svg";
import AvatarIcon1 from "../assets/svg/AvatarIcon1.svg";
import AvatarIcon2 from "../assets/svg/AvatarIcon2.svg";
import MealIcon1 from "../assets/svg/mealIcon1.svg";
import Box from "./common/Box";
import Text from "./common/Text";

interface Props {}

const MealDoneTile = ({}: Props) => {
  const InformationTile = (label: string, value: string) => {
    return (
      <Box>
        <Text lineHeight={15} fontSize={12} color={"white"} fontWeight={"500"}>
          {label}
        </Text>
        <Text lineHeight={16} fontSize={14} color={"white"} fontWeight={"700"}>
          {value}
        </Text>
      </Box>
    );
  };

  const DoneView = () => {
    return (
      <Box
        height={25}
        width={69}
        backgroundColor={"green1"}
        borderRadius={"12"}
        position={"absolute"}
        right={10}
        top={10}
        justifyContent={"center"}
        alignItems={"center"}
        flexDirection={"row"}
      >
        <SvgXml width={10} height={10} xml={greyDoneArrow} />
        <Text
          lineHeight={14}
          numberOfLines={2}
          fontSize={12}
          color={"grey6"}
          fontWeight={"700"}
          alignSelf={"center"}
          paddingLeft={"5"}
        >
          Done
        </Text>
      </Box>
    );
  };

  return (
    <Box
      backgroundColor={"grey6"}
      height={253}
      borderRadius={"40"}
      padding={"20"}
      justifyContent={"space-between"}
    >
      <Box flexDirection={"row"}>
        <SvgXml width={32} height={32} xml={breakfastIcon} />
        <Text
          lineHeight={19}
          fontSize={16}
          color={"white"}
          fontWeight={"700"}
          alignSelf={"flex-end"}
          paddingLeft={"10"}
          paddingBottom={"5"}
        >
          Breakfast
        </Text>
      </Box>
      <Box flexDirection={"row-reverse"}>
        <Text
          lineHeight={19}
          numberOfLines={2}
          fontSize={16}
          color={"white"}
          fontWeight={"700"}
          alignSelf={"center"}
          paddingLeft={"10"}
        >
          View result
        </Text>
      </Box>
      <Box flexDirection={"row"} justifyContent={"space-between"}>
        <Box>
          <MealIcon1 width={254} height={156} />
          <DoneView />
        </Box>
        <Box padding={"10"} justifyContent={"space-between"} flex={1}>
          <Box flexDirection={"row"}>
            <Box position={"absolute"} left={20}>
              <AvatarIcon1 width={24} height={24} />
            </Box>
            <Box>
              <AvatarIcon2 width={24} height={24} />
            </Box>
          </Box>
          <Text
            lineHeight={24}
            fontSize={20}
            color={"white"}
            fontWeight={"700"}
          >
            Porridge Oats with Blueberries
          </Text>
          <Box
            flexDirection={"row"}
            justifyContent={"space-between"}
            marginRight={"30"}
          >
            {InformationTile("Cal", "244")}
            {InformationTile("Protein", "4 g")}
            {InformationTile("Fat", "13 g")}
            {InformationTile("Carb", "28 g")}
          </Box>
        </Box>
        <Box flex={1}></Box>
      </Box>
    </Box>
  );
};

const styles = StyleSheet.create({});

export default MealDoneTile;
