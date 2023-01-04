import React from "react";
import { FlatList, StyleSheet, TouchableOpacity } from "react-native";
import { SvgXml } from "react-native-svg";
import { dinnerIcon } from "../assets/svg";
import AvatarIcon1 from "../assets/svg/AvatarIcon1.svg";
import AvatarIcon2 from "../assets/svg/AvatarIcon2.svg";
import MealIcon2 from "../assets/svg/mealIcon2.svg";
import { SCREENS } from "../utils/Constants";
import Box from "./common/Box";
import Text from "./common/Text";
import { ListSeparatorComponent } from "./ListSeparatorComponent";

interface Props {
  navigation: any;
}

const data = [
  {
    id: 1,
    title: "abc",
  },
  {
    id: 2,
    title: "abc",
  },
];

const PendingMealTile = ({ navigation }: Props) => {
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
        backgroundColor={"black"}
        borderRadius={"12"}
        position={"absolute"}
        right={10}
        top={10}
        justifyContent={"center"}
        alignItems={"center"}
        flexDirection={"row"}
        paddingHorizontal={"10"}
      >
        <Text
          lineHeight={14}
          numberOfLines={2}
          fontSize={12}
          color={"white"}
          fontWeight={"700"}
          alignSelf={"center"}
          paddingLeft={"5"}
        >
          in 2h 48min
        </Text>
      </Box>
    );
  };

  const CookNowButton = () => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate(SCREENS.MealDetails)}
      >
        <Box
          borderRadius={"16"}
          width={130}
          height={48}
          backgroundColor={"green1"}
          justifyContent={"center"}
          alignSelf={"flex-end"}
        >
          <Text
            lineHeight={20}
            numberOfLines={2}
            fontSize={16}
            color={"white"}
            fontWeight={"700"}
            alignSelf={"center"}
          >
            Cook it now
          </Text>
        </Box>
      </TouchableOpacity>
    );
  };

  const ModifyButton = () => {
    return (
      <TouchableOpacity>
        <Box
          borderRadius={"16"}
          width={130}
          height={48}
          backgroundColor={"lightGrey"}
          justifyContent={"center"}
          alignSelf={"flex-end"}
        >
          <Text
            lineHeight={20}
            numberOfLines={2}
            fontSize={16}
            color={"black"}
            fontWeight={"700"}
            alignSelf={"center"}
          >
            Modify
          </Text>
        </Box>
      </TouchableOpacity>
    );
  };

  const OneTile = () => {
    return (
      <Box
        backgroundColor={"grey6"}
        minHeight={200}
        borderRadius={"40"}
        padding={"20"}
        justifyContent={"space-between"}
      >
        <Box flexDirection={"row"} justifyContent={"space-between"}>
          <Box>
            <MealIcon2 width={254} height={156} />
            <DoneView />
          </Box>
          <Box padding={"10"} flex={1}>
            <Box flexDirection={"row"}>
              <Box position={"absolute"} left={20}>
                <AvatarIcon1 width={24} height={24} />
              </Box>
              <Box>
                <AvatarIcon2 width={24} height={24} />
              </Box>
            </Box>
            <Box marginVertical={"3"} />
            <Text
              lineHeight={24}
              fontSize={20}
              color={"white"}
              fontWeight={"700"}
            >
              Porridge Oats with Blueberries
            </Text>
            <Box marginVertical={"3"} />
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
          <Box paddingTop={"15"} flex={1}>
            <CookNowButton />
            <Box marginVertical={"5"} />
            <ModifyButton />
          </Box>
        </Box>
      </Box>
    );
  };

  return (
    <Box
      backgroundColor={"grey6"}
      minHeight={253}
      borderRadius={"40"}
      padding={"20"}
    >
      <Box flexDirection={"row"}>
        <SvgXml width={32} height={32} xml={dinnerIcon} />
        <Text
          lineHeight={19}
          fontSize={16}
          color={"white"}
          fontWeight={"700"}
          alignSelf={"flex-end"}
          paddingLeft={"10"}
          paddingBottom={"5"}
        >
          Dinner
        </Text>
      </Box>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={data}
        renderItem={({ item }: any) => <OneTile item={item} />}
        keyExtractor={(item) => item.id.toString()}
        ItemSeparatorComponent={({ item }: any) => (
          <ListSeparatorComponent height={styles.lineHeight} />
        )}
      />
    </Box>
  );
};

const styles = StyleSheet.create({
  lineHeight: {
    borderBottomWidth: 1,
    borderBottomColor: "#ffffff",
  },
});

export default PendingMealTile;
