import React, { useRef, useState } from "react";
import {
  Dimensions,
  FlatList,
  Platform,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { SvgXml } from "react-native-svg";
import { WhiteBin, whiteCross, whiteTick } from "../../../assets/svg";
import Box from "../../../components/common/Box";
import CTAWithIconOnly from "../../../components/common/CTAWithIconOnly";
import Text from "../../../components/common/Text";
import RNBottomSheet from "@gorhom/bottom-sheet";
import { InventoryData, SCREENS } from "../../../utils/Constants";
import AddItem from "../../../components/AddItem";
import { SwipeListView } from "react-native-swipe-list-view";
import { ScrollView } from "react-native-gesture-handler";

interface props {
  navigation: any;
}

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const Inventory = ({ navigation }: props) => {
  const [itemsCompleted, setItemsCompleted] = useState(false);
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
      <TouchableOpacity onPress={onPressOpenAddItem}>
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
    const itemData = item?.item;
    const NewImage = itemData?.Image;

    return (
      <Box
        flexDirection={"row"}
        justifyContent={"space-between"}
        paddingHorizontal={"40"}
        backgroundColor={"black1"}
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
              {itemData?.title}
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
              {itemData?.totalGram}
            </Text>
          </Box>
          <Box flexDirection={"column"}>
            <FlatList
              contentContainerStyle={{ paddingBottom: 20, flex: 1 }}
              horizontal={true}
              data={itemData?.ingredients}
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
          <TouchableOpacity>
            <Box marginTop={"10"}>
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
            </Box>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setItemsCompleted(true);
            }}
          >
            <Box marginTop={"10"}>
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
          </TouchableOpacity>
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
            {itemsCompleted ? "All done?" : "Grocery trip?"}
          </Text>
          <Text
            lineHeight={57}
            numberOfLines={1}
            fontSize={40}
            color={"white"}
            fontWeight={"400"}
          >
            {itemsCompleted ? "Review your new items" : "Update your inventory"}
          </Text>
        </Box>
        <Box flex={1} marginTop={"40"}>
          <SwipeListView
            data={InventoryData}
            renderItem={(data, rowMap) => <InventoryTile item={data} />}
            renderHiddenItem={(data, rowMap) => (
              <Box flexDirection={"row"} justifyContent={"flex-end"}>
                <TouchableOpacity
                  onPress={() => {
                    console.log("data: ", data);
                  }}
                >
                  <Box
                    width={100}
                    height={150}
                    backgroundColor={"red1"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    paddingBottom={"25"}
                  >
                    <SvgXml
                      height={Platform.OS === "android" ? 20 : 24}
                      width={Platform.OS === "android" ? 20 : 24}
                      xml={WhiteBin}
                    />
                  </Box>
                </TouchableOpacity>
              </Box>
            )}
            leftOpenValue={0}
            rightOpenValue={-100}
            ItemSeparatorComponent={({ item }: any) => (
              <Box paddingVertical={"15"} />
            )}
          />
        </Box>
        {itemsCompleted ? (
          <Box
            flexDirection={"row"}
            height={126}
            justifyContent={"space-between"}
            paddingTop={"10"}
            paddingHorizontal={"30"}
          >
            <TouchableOpacity
              onPress={() => {
                setItemsCompleted(false);
              }}
            >
              <Box
                height={70}
                borderRadius={"8"}
                width={190}
                borderWidth={1}
                borderColor={"white"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Text
                  lineHeight={23}
                  numberOfLines={1}
                  fontSize={20}
                  color={"white"}
                  fontWeight={"400"}
                  alignSelf={"center"}
                >
                  Edit
                </Text>
              </Box>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                setItemsCompleted(false);
              }}
            >
              <Box
                height={70}
                borderRadius={"8"}
                width={190}
                backgroundColor={"brandGreen"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Text
                  lineHeight={23}
                  numberOfLines={1}
                  fontSize={20}
                  color={"white"}
                  fontWeight={"700"}
                  alignSelf={"center"}
                >
                  Complete
                </Text>
              </Box>
            </TouchableOpacity>
          </Box>
        ) : null}
      </Box>

      <AddItem sheetRef={addItemRef} closeBottomSheet={onPressCloseAddItem} />
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
