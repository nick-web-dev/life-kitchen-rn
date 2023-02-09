import React, { useState } from "react";
import { Dimensions, Platform, StyleSheet, TextInput } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { SvgXml } from "react-native-svg";
import Chicken from "../assets/svg/chicken.svg";
import {
  grayCalendar,
  grayFridge,
  grayMeat,
  grayTotal,
  LeftUperArrow,
  SearchIcon,
} from "../assets/svg";
import { BottomSheet, Text } from "./common";
import Box from "./common/Box";
import Input from "./common/Input";
import { SearchItems } from "../utils/Constants";

interface AddItemBottomSheetProps {
  closeBottomSheet: () => void;
  sheetRef: any;
}

const Item = {
  id: 1,
  title: "Chicken Breast",
  totalGram: "750g",
  Image: Chicken,
  ingredients: [
    {
      id: 1,
      name: "Fridge",
      icon: grayFridge,
    },
    {
      id: 2,
      name: "1 total",
      icon: grayTotal,
    },
    {
      id: 3,
      name: "Meat",
      icon: grayMeat,
    },
    {
      id: 4,
      name: "04/07/23",
      icon: grayCalendar,
    },
  ],
};

const windowHeight = Dimensions.get("window").height;

const AddItem: React.FC<AddItemBottomSheetProps> = (props) => {
  const { sheetRef, closeBottomSheet } = props;
  const [searchValue, setSearch] = useState("");
  console.log("windowHeight: ", windowHeight);

  const MeatTile = ({ item }: any) => {
    const { name, icon } = item;
    return (
      <Box
        flexDirection={"row"}
        justifyContent={"center"}
        alignItems={"center"}
        marginRight={Platform.OS == "ios" ? "20" : "15"}
      >
        <Box marginTop={"10"}>
          <SvgXml height={25} width={20} xml={icon} />
        </Box>
        <Text
          marginLeft={"5"}
          lineHeight={23}
          numberOfLines={1}
          fontSize={22}
          color={"white"}
          fontWeight={"400"}
          alignSelf={"center"}
          marginTop={"15"}
        >
          {name}
        </Text>
      </Box>
    );
  };

  const InventoryTile = ({ item }: any) => {
    const { Image } = item;
    const NewImage = Image;

    return (
      <Box
        flexDirection={"row"}
        justifyContent={"space-between"}
        marginHorizontal={"20"}
      >
        <Box>
          <NewImage width={120} height={120} />
        </Box>
        <Box flex={1} paddingHorizontal={"20"}>
          <Box flexDirection={"row"}>
            <Text
              lineHeight={34}
              numberOfLines={1}
              fontSize={30}
              color={"white"}
              fontWeight={"400"}
              alignSelf={"center"}
              marginTop={"20"}
            >
              {item?.title}
            </Text>
            <Text
              marginHorizontal={"20"}
              lineHeight={23}
              numberOfLines={1}
              fontSize={20}
              color={"white"}
              fontWeight={"400"}
              alignSelf={"center"}
              marginTop={"20"}
            >
              {item?.totalGram}
            </Text>
          </Box>
          <Box flexDirection={"row"}>
            <FlatList
              horizontal={true}
              data={item?.ingredients}
              renderItem={({ item }: any) => <MeatTile item={item} />}
              keyExtractor={(item) => item.id.toString()}
              ItemSeparatorComponent={({ item }: any) => (
                <Box
                  paddingVertical={Platform.OS === "android" ? "10" : "20"}
                />
              )}
            />
          </Box>
        </Box>
        <Box marginVertical={"5"} justifyContent={"space-between"}></Box>
      </Box>
    );
  };

  const SearchTile = () => {
    return (
      <Box
        borderRadius={"8"}
        height={70}
        borderWidth={1}
        borderColor={"white"}
        marginVertical={"20"}
        marginHorizontal={"20"}
        flexDirection={"row"}
        paddingHorizontal={"10"}
      >
        <TextInput
          style={styles.searchInput}
          onChangeText={(val) => {
            setSearch(val);
          }}
          placeholderTextColor={"white"}
          value={searchValue}
          placeholder={"Find your item"}
          keyboardType="default"
        />
        <Box justifyContent={"center"} alignItems={"center"}>
          <SvgXml height={24} width={24} xml={SearchIcon} />
        </Box>
      </Box>
    );
  };

  const SearchItem = ({ item }: any) => {
    const { icon } = item;
    const NewImage = icon;
    return (
      <Box flexDirection={"row"} paddingHorizontal={"20"}>
        <Box flexDirection={"row"} flex={1}>
          <NewImage width={60} height={60} />
          <Text
            lineHeight={34}
            numberOfLines={1}
            fontSize={30}
            color={"white"}
            fontWeight={"400"}
            alignSelf={"center"}
            paddingLeft={"20"}
          >
            {item?.title}
          </Text>
        </Box>
        <Box justifyContent={"center"} alignItems={"center"}>
          <SvgXml height={24} width={24} xml={LeftUperArrow} />
        </Box>
      </Box>
    );
  };

  return (
    <BottomSheet showHandle={true} ref={sheetRef}>
      <Box
        backgroundColor={"grey7"}
        borderRadius={"40"}
        height={Platform.OS === "ios" ? 1000 : 800}
        padding={"15"}
        marginTop={"30"}
      >
        <InventoryTile item={Item} />
        <Box marginVertical={"20"} />
        <SearchTile />
        <Box marginVertical={"20"} />
        <FlatList
          data={SearchItems}
          renderItem={({ item }: any) => <SearchItem item={item} />}
          keyExtractor={(item) => item.id.toString()}
          ItemSeparatorComponent={({ item }: any) => (
            <Box paddingVertical={Platform.OS === "android" ? "10" : "20"} />
          )}
        />
      </Box>
    </BottomSheet>
  );
};

const styles = StyleSheet.create({
  searchInput: {
    height: 60,
    flex: 1,
    color: "white",
    fontSize: 20,
    lineHeight: 23,
  },
});

export default AddItem;
