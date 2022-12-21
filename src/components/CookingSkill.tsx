import React, { useState } from "react";
import { FlatList, Platform, StyleSheet, TouchableOpacity } from "react-native";
import { SvgXml } from "react-native-svg";
import { backArrow } from "../assets/svg";
import { SCREENS } from "../utils/Constants";
import Box from "./common/Box";
import CTA from "./common/CTA";
import CTAWithDynamicIcon from "./common/CTAWithDynamicIcon";
import CheckBox from "@react-native-community/checkbox";
import Text from "./common/Text";

interface InputTextProps {
  navigation?: any;
}

const data = [
  {
    id: 1,
    title: "Novice: I’m not the best chef",
    checkBox: false,
  },
  {
    id: 2,
    title: "Beginner: I have some basic skills",
    checkBox: false,
  },
  {
    id: 3,
    title: "Intermediate: I’m pretty experienced",
    checkBox: false,
  },
  {
    id: 4,
    title: "Expert: I’m a good chef",
    checkBox: false,
  },
  {
    id: 5,
    title: "World class: I’m a professional chef",
    checkBox: false,
  },
];

const limit = 1;

const CookingSkill: React.FC<InputTextProps> = (props) => {
  const { navigation } = props;
  const [checkData, setCheckData] = useState(data);
  const [totalSelected, setTotalSelected] = useState(0);

  const checkValueChanges = (item) => {
    let newArray = checkData.map((element) => {
      if (item?.id === element?.id) {
        if (!element?.checkBox === true) setTotalSelected(1);
        else setTotalSelected(0);
        return {
          ...element,
          checkBox: !element?.checkBox,
        };
      } else {
        return {
          ...element,
          checkBox: false,
        };
      }
    });
    setCheckData(newArray);
  };

  const CheckTile = ({ item }: any) => {
    return (
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => {
          checkValueChanges(item);
        }}
        style={styles.btnStyle}
      >
        <Text
          lineHeight={34.5}
          numberOfLines={2}
          fontSize={30}
          color={item?.checkBox ? "brandGreen" : "white"}
          fontWeight={"400"}
        >
          {item?.title}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <Box marginTop={"20"} paddingHorizontal={"20"} flex={1}>
      <Box>
        <Box
          flexDirection={"row"}
          marginVertical={"20"}
          justifyContent={"space-between"}
        >
          <CTAWithDynamicIcon
            borderRadius={"cta"}
            justifyContent={"center"}
            alignItems={"center"}
            backgroundColor={"white"}
            variant="outline"
            width={50}
            height={50}
            withIcon
            onlyIcon
            icon={() => <SvgXml height={17} width={17} xml={backArrow} />}
            onPress={() => navigation.goBack()}
          />
          <Text
            lineHeight={34.5}
            numberOfLines={2}
            fontSize={30}
            color={"white"}
            fontWeight={"400"}
            alignSelf={"center"}
          >
            1 of 5
          </Text>
          <Box width={50} />
        </Box>
        <Text
          lineHeight={80.49}
          numberOfLines={2}
          fontSize={60}
          color={"white"}
          fontWeight={"400"}
          paddingHorizontal={"20"}
        >
          What is your cooking skill level?
        </Text>
        <Text
          lineHeight={23}
          numberOfLines={2}
          fontSize={22}
          color={"white"}
          fontWeight={"400"}
          paddingHorizontal={"20"}
        >
          This helps me recommend the right recipes to match your skill level
        </Text>
      </Box>
      <Box flex={1} padding={"10"} paddingTop={"30"}>
        <FlatList
          data={checkData}
          renderItem={({ item }: any) => <CheckTile item={item} />}
          keyExtractor={(item) => item.id.toString()}
          ItemSeparatorComponent={({ item }: any) => (
            <Box paddingVertical={Platform.OS === "android" ? "20" : "35"} />
          )}
        />
      </Box>
      <Text
        lineHeight={23}
        numberOfLines={2}
        fontSize={24}
        color={"white"}
        fontWeight={"400"}
        paddingHorizontal={"20"}
        marginBottom={"10"}
      >
        {totalSelected} of {limit} Selected
      </Text>
      <CTA
        marginHorizontal={"20"}
        height={70}
        borderRadius={"8"}
        fontWeight={"400"}
        fontSize={20}
        variant="primary"
        color={"white"}
        lineHeight={23}
        marginBottom={"20"}
        onPress={() => navigation.navigate(SCREENS.LoginScreen2)}
      >
        Next
      </CTA>
    </Box>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 80,
    marginTop: 24,
    backgroundColor: "#FFFFFF",
    borderRadius: 15,
    padding: 10,
    fontSize: 14,
    fontWeight: "700",
  },
  btnStyle: {
    flex: 1,
    flexDirection: "row",
    padding: 10,
  },
});

export default CookingSkill;
