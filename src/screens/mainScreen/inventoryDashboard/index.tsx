import React, { useEffect, useState } from "react";
import { Platform, SafeAreaView, StyleSheet } from "react-native";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import { SvgXml } from "react-native-svg";
import { useSelector } from "react-redux";
import { redSquareCross, whiteTruck } from "../../../assets/svg";
import { Box, Text } from "../../../components/common";
import InventoryHeader from "../../../components/InventoryHeader";
import { useGetUser } from "../../../network/hooks/useGetUser";
import {
  beveragesList,
  ExpiringList,
  InventoryButtons,
  InventoryImageList,
} from "../../../utils/Constants";

interface props {
  navigation: any;
}

const InventoryDashboard = ({ navigation }: props) => {
  const { user } = useSelector((state: any) => state.reducer.user);
  const [userInfo, setUserInfo] = useState(null);
  const [InventoryButtonsData, setInventoryButtonsData] =
    useState(InventoryButtons);

  const { isLoading, refetch, data } = useGetUser(user?.uid);

  useEffect(() => {
    if (data) {
      setUserInfo(data);
    }
  }, [data]);

  const InventoryImageTile = ({ item }: any) => {
    const { img } = item;
    const NewImage = img;
    return (
      <Box>
        <NewImage
          width={Platform.OS === "android" ? 220 : 230}
          height={Platform.OS === "android" ? 240 : 260}
        />
        <Box position={"absolute"} bottom={10} paddingHorizontal={"35"}>
          <Text
            lineHeight={40}
            numberOfLines={2}
            fontSize={30}
            color={"white"}
            fontWeight={"400"}
          >
            {item?.title}
          </Text>
        </Box>
      </Box>
    );
  };

  const BeveragesTile = ({ item }: any) => {
    return (
      <Box
        width={64}
        height={64}
        borderRadius={"35"}
        backgroundColor={item?.background}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <SvgXml height={45} width={45} xml={item?.icon} />
      </Box>
    );
  };

  const DeliveryButton = ({}) => {
    return (
      <TouchableOpacity onPress={() => {}}>
        <Box
          borderRadius={"8"}
          width={Platform.OS === "ios" ? 180 : 150}
          height={43}
          backgroundColor={"blue1"}
          justifyContent={"center"}
          alignItems={"center"}
          flexDirection={"row"}
        >
          <Box paddingRight={"5"}>
            <Text
              lineHeight={15}
              numberOfLines={2}
              fontSize={13}
              color={"white"}
              fontWeight={"400"}
              alignSelf={"center"}
            >
              Delivery
            </Text>
            <Text
              lineHeight={12}
              numberOfLines={2}
              fontSize={11}
              color={"white"}
              fontWeight={"300"}
              alignSelf={"center"}
            >
              coming soon
            </Text>
          </Box>
          <SvgXml
            height={Platform.OS === "android" ? 20 : 24}
            width={Platform.OS === "android" ? 20 : 24}
            xml={whiteTruck}
          />
        </Box>
      </TouchableOpacity>
    );
  };

  const PlanMeatButton = ({}) => {
    return (
      <TouchableOpacity onPress={() => {}}>
        <Box
          borderRadius={"8"}
          width={Platform.OS === "ios" ? 180 : 150}
          height={43}
          justifyContent={"center"}
          alignItems={"center"}
          backgroundColor={"green1"}
        >
          <Text
            lineHeight={15}
            numberOfLines={2}
            fontSize={13}
            color={"white"}
            fontWeight={"400"}
            alignSelf={"center"}
          >
            Plan your meals
          </Text>
          <Text
            lineHeight={12}
            numberOfLines={2}
            fontSize={11}
            color={"white"}
            fontWeight={"300"}
            alignSelf={"center"}
          >
            coming soon
          </Text>
        </Box>
      </TouchableOpacity>
    );
  };

  const ExpiringtItemTile = ({ item }: any) => {
    const { img, title, quantity, price } = item;
    const NewImage = img;
    return (
      <Box flexDirection={"row"}>
        <NewImage width={48} height={48} />
        <Box justifyContent={"center"}>
          <Box paddingHorizontal={"8"} padding={"5"} flexDirection={"row"}>
            <Text
              lineHeight={18}
              numberOfLines={1}
              fontSize={16}
              color={"white"}
              fontWeight={"400"}
              alignSelf={"center"}
            >
              {title + ` `}
            </Text>
            <Text
              lineHeight={12}
              numberOfLines={1}
              fontSize={12}
              color={"white"}
              fontWeight={"400"}
              alignSelf={"center"}
            >
              {quantity}
            </Text>
          </Box>
          <Box paddingHorizontal={"8"} padding={"5"}>
            <Text
              lineHeight={12}
              numberOfLines={1}
              fontSize={12}
              color={"white"}
              fontWeight={"400"}
            >
              {price}
            </Text>
          </Box>
        </Box>
      </Box>
    );
  };

  const ExpiringTile = () => {
    return (
      <Box
        marginVertical={"20"}
        marginHorizontal={"30"}
        borderRadius={"8"}
        height={136}
        backgroundColor={"grey7"}
        flexDirection={"row"}
        justifyContent={"space-between"}
        padding={"20"}
      >
        <Box flex={1} justifyContent={"space-between"}>
          <Box flexDirection={"row"} justifyContent={"space-between"}>
            <Box flexDirection={"row"} justifyContent={"space-between"}>
              <SvgXml
                height={Platform.OS === "android" ? 20 : 24}
                width={Platform.OS === "android" ? 20 : 24}
                xml={redSquareCross}
              />
              <Text
                paddingLeft={"10"}
                lineHeight={27}
                numberOfLines={1}
                fontSize={24}
                color={"white"}
                fontWeight={"400"}
                alignSelf={"center"}
              >
                These items are expiring soon...
              </Text>
            </Box>
            <TouchableOpacity>
              <Box
                alignItems={"center"}
                justifyContent={"center"}
                paddingRight={"20"}
              >
                <Text
                  lineHeight={18}
                  numberOfLines={1}
                  fontSize={16}
                  color={"white"}
                  fontWeight={"300"}
                  alignSelf={"center"}
                  textDecorationLine={"underline"}
                >
                  view all
                </Text>
              </Box>
            </TouchableOpacity>
          </Box>
          <Box flexDirection={"row"} justifyContent={"space-between"}>
            <FlatList
              scrollEnabled={false}
              horizontal={true}
              data={ExpiringList}
              renderItem={({ item }: any) => <ExpiringtItemTile item={item} />}
              keyExtractor={(item) => item.id.toString()}
              ItemSeparatorComponent={({ item }: any) => (
                <Box
                  paddingHorizontal={Platform.OS === "android" ? "0" : "5"}
                />
              )}
              ListFooterComponent={() => (
                <Box
                  marginLeft={Platform.OS == "ios" ? "16" : "2"}
                  borderTopLeftRadius={"5"}
                  borderBottomLeftRadius={"5"}
                  width={10}
                  backgroundColor={"white"}
                  height={48}
                />
              )}
            />
          </Box>
        </Box>
        <Box>
          <PlanMeatButton />
          <Box marginVertical={"5"} />
          <DeliveryButton />
        </Box>
      </Box>
    );
  };

  const setActiveInActive = (item: any, btnStatus: boolean) => {
    let newData = InventoryButtons.map((value) => {
      if (item?.id === value?.id) {
        value.active = btnStatus;
        return value;
      } else {
        value.active = false;
        return value;
      }
    });
    setInventoryButtonsData(newData);
  };

  const ActiveButton = ({ item }: any) => {
    return (
      <TouchableOpacity>
        <Box
          height={31}
          width={63}
          backgroundColor={"white"}
          borderRadius={"8"}
          justifyContent={"center"}
          alignItems={"center"}
          alignSelf={"center"}
        >
          <Text
            lineHeight={14}
            numberOfLines={1}
            fontSize={13}
            color={"black"}
            fontWeight={"400"}
            alignSelf={"center"}
          >
            {item?.title}
          </Text>
        </Box>
      </TouchableOpacity>
    );
  };

  const InActiveButton = ({ item }: any) => {
    return (
      <TouchableOpacity
        onPress={() => {
          setActiveInActive(item, true);
        }}
      >
        <Box
          height={31}
          width={63}
          borderRadius={"8"}
          justifyContent={"center"}
          alignItems={"center"}
          alignSelf={"center"}
        >
          <Text
            lineHeight={14}
            numberOfLines={1}
            fontSize={13}
            color={"white"}
            fontWeight={"400"}
            alignSelf={"center"}
          >
            {item?.title}
          </Text>
        </Box>
      </TouchableOpacity>
    );
  };

  const InventoryTile = () => {
    return (
      <Box
        height={362}
        borderRadius={"8"}
        backgroundColor={"grey7"}
        padding={"20"}
      >
        <Box flexDirection={"row"} justifyContent={"space-between"}>
          <Text
            lineHeight={27}
            numberOfLines={1}
            fontSize={24}
            color={"white"}
            fontWeight={"400"}
            alignSelf={"center"}
          >
            Inventory
          </Text>
          <Box
            height={37}
            width={207}
            backgroundColor={"grey8"}
            borderRadius={"8"}
            flexDirection={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
            paddingHorizontal={"5"}
          >
            <FlatList
              horizontal={true}
              scrollEnabled={false}
              data={InventoryButtons}
              renderItem={({ item }: any) =>
                item?.active ? (
                  <ActiveButton item={item} />
                ) : (
                  <InActiveButton item={item} />
                )
              }
              keyExtractor={(item) => item.id.toString()}
              ItemSeparatorComponent={({ item }: any) => (
                <Box
                  paddingHorizontal={Platform.OS === "android" ? "1" : "1"}
                />
              )}
            />
          </Box>
        </Box>
      </Box>
    );
  };

  return (
    <SafeAreaView style={styles.mainView}>
      <InventoryHeader navigation={navigation} headerLable={userInfo?.name} />
      <Box marginTop={"0"} paddingLeft={"30"}>
        <FlatList
          horizontal={true}
          data={InventoryImageList}
          renderItem={({ item }: any) => <InventoryImageTile item={item} />}
          keyExtractor={(item) => item.id.toString()}
          ItemSeparatorComponent={({ item }: any) => (
            <Box paddingHorizontal={Platform.OS === "android" ? "5" : "12"} />
          )}
        />
      </Box>
      {/* <Box marginVertical={"20"} /> */}
      <Box paddingHorizontal={"30"}>
        <FlatList
          scrollEnabled={false}
          horizontal={true}
          data={beveragesList}
          renderItem={({ item }: any) => <BeveragesTile item={item} />}
          keyExtractor={(item) => item.id.toString()}
          ItemSeparatorComponent={({ item }: any) => (
            <Box paddingHorizontal={Platform.OS === "android" ? "30" : "35"} />
          )}
        />
      </Box>
      <Box>
        <ExpiringTile />
      </Box>
      <Box marginHorizontal={"30"}>
        <InventoryTile />
      </Box>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: "#171717",
  },
});

export default InventoryDashboard;
