import React, { useRef } from "react";
import {
  Dimensions,
  FlatList,
  Platform,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { SvgXml } from "react-native-svg";
import { whiteCross, whiteTick } from "../../../assets/svg";
import Box from "../../../components/common/Box";
import CTAWithIconOnly from "../../../components/common/CTAWithIconOnly";
import Text from "../../../components/common/Text";
import RNBottomSheet from "@gorhom/bottom-sheet";
import { InventoryData, SCREENS } from "../../../utils/Constants";
import AddItem from "../../../components/AddItem";

interface props {
  navigation: any;
}

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const Inventory = ({ navigation }: props) => {
  const addItemRef = useRef<RNBottomSheet>(null);
  const onPressOpenAddItem = () => {
    addItemRef.current?.expand();
  };

  const onPressCloseAddItem = () => addItemRef.current?.close();

  const CookNowButton = ({}) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate(SCREENS.MealDetails)}
      >
        <Box
          borderRadius={"8"}
          width={Platform.OS === "ios" ? 120 : 120}
          height={48}
          backgroundColor={"green1"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <SvgXml
            height={Platform.OS === "android" ? 20 : 24}
            width={Platform.OS === "android" ? 20 : 24}
            xml={whiteTick}
          />
        </Box>
      </TouchableOpacity>
    );
  };

  const ModifyButton = ({}) => {
    return (
      <TouchableOpacity>
        <Box
          borderRadius={"8"}
          width={Platform.OS === "ios" ? 120 : 120}
          height={48}
          justifyContent={"center"}
          alignItems={"center"}
          borderWidth={1}
          borderColor={"white"}
        >
          <Text
            lineHeight={23}
            numberOfLines={2}
            fontSize={20}
            color={"white"}
            fontWeight={"400"}
            alignSelf={"center"}
          >
            Wrong Item
          </Text>
        </Box>
      </TouchableOpacity>
    );
  };

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
        marginHorizontal={"40"}
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
        <Box marginVertical={"5"} justifyContent={"space-between"}>
          <CookNowButton />
          <ModifyButton />
        </Box>

        {/* <Box
          height={48}
          width={48}
          backgroundColor={"brandGreen"}
          borderRadius={"23"}
          justifyContent={"center"}
          alignItems={"center"}
          alignSelf={"center"}
        >
          <ModifyButton />
          <SvgXml height={20} width={20} xml={whiteTick} />
        </Box> */}
      </Box>
    );
  };

  return (
    <SafeAreaView style={styles.mainView}>
      <Box flex={1}>
        <Box
          flexDirection={"row"}
          justifyContent={"space-between"}
          marginHorizontal={"20"}
        >
          <CTAWithIconOnly
            marginTop={"20"}
            marginBottom={"10"}
            borderRadius={"cta"}
            justifyContent={"center"}
            alignItems={"center"}
            backgroundColor={"grey6"}
            variant="outline"
            width={50}
            height={50}
            withIcon
            onlyIcon
            icon={() => <SvgXml height={20} width={20} xml={whiteCross} />}
            onPress={() => navigation.goBack()}
          />
          <Text
            lineHeight={40}
            numberOfLines={1}
            fontSize={30}
            color={"white"}
            fontWeight={"400"}
            alignSelf={"center"}
            marginTop={"20"}
          >
            Add Items
          </Text>
          <Text
            lineHeight={40}
            numberOfLines={1}
            fontSize={25}
            color={"white"}
            fontWeight={"400"}
            alignSelf={"center"}
            marginTop={"20"}
          >
            Done
          </Text>
        </Box>
        <Box marginTop={"40"} marginHorizontal={"40"}>
          <Text
            lineHeight={28}
            numberOfLines={1}
            fontSize={25}
            color={"white"}
            fontWeight={"400"}
            marginTop={"20"}
          >
            Grocery trip?
          </Text>
          <Text
            lineHeight={57}
            numberOfLines={1}
            fontSize={40}
            color={"white"}
            fontWeight={"400"}
          >
            Update your inventory
          </Text>
        </Box>
        <Box marginTop={"40"}>
          <FlatList
            data={InventoryData}
            renderItem={({ item }: any) => <InventoryTile item={item} />}
            keyExtractor={(item) => item.id.toString()}
            ItemSeparatorComponent={({ item }: any) => (
              <Box paddingVertical={"15"} />
            )}
          />
        </Box>
      </Box>
      {/* <AddItem sheetRef={addItemRef} closeBottomSheet={onPressCloseAddItem} /> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: "#171717",
  },
  gradientStyle: {
    height: 24,
    width: 24,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Inventory;
