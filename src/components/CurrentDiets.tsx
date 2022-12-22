import React, { useState } from "react";
import { FlatList, Platform, StyleSheet, TouchableOpacity } from "react-native";
import { SvgXml } from "react-native-svg";
import { backArrow } from "../assets/svg";
import { SCREENS } from "../utils/Constants";
import Box from "./common/Box";
import CTA from "./common/CTA";
import CTAWithDynamicIcon from "./common/CTAWithDynamicIcon";
import Text from "./common/Text";

interface InputTextProps {
  navigation?: any;
}

const data = [
  {
    id: 1,
    title: "Low carb",
    checkBox: false,
  },
  {
    id: 2,
    title: "Low carb, high protein",
    checkBox: false,
  },
  {
    id: 3,
    title: "Keto",
    checkBox: false,
  },
  {
    id: 4,
    title: "Paleo",
    checkBox: false,
  },
  {
    id: 5,
    title: "Low fat",
    checkBox: false,
  },
  {
    id: 6,
    title: "Atkins",
    checkBox: false,
  },
];

const limit = 1;

const CurrentDiets: React.FC<InputTextProps> = (props) => {
  const { navigation } = props;
  const [checkData, setCheckData] = useState(data);
  const [totalSelected, setTotalSelected] = useState(0);

  const checkValueChanges = (item) => {
    let newArray = checkData.map((element) => {
      if (item?.id === element?.id) {
        if (!item?.checkBox === false) setTotalSelected(totalSelected - 1);
        if (!item?.checkBox === true && totalSelected >= checkData.length) {
          return item;
        } else {
          if (!item?.checkBox === true) setTotalSelected(totalSelected + 1);
          return {
            ...element,
            checkBox: !item?.checkBox,
          };
        }
      } else {
        return element;
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
            4 of 5
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
          Are you following any current diets?
        </Text>
        <Text
          lineHeight={23}
          numberOfLines={2}
          fontSize={22}
          color={"white"}
          fontWeight={"400"}
          paddingHorizontal={"20"}
        >
          I can craft recipes that fit with all popular diet regimes.
        </Text>
      </Box>
      <Box flex={1} padding={"10"} paddingTop={"30"}>
        <FlatList
          data={checkData}
          renderItem={({ item }: any) => <CheckTile item={item} />}
          keyExtractor={(item) => item.id.toString()}
          ItemSeparatorComponent={({ item }: any) => (
            <Box paddingVertical={Platform.OS === "android" ? "10" : "20"} />
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
        {totalSelected} Selected
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

export default CurrentDiets;
