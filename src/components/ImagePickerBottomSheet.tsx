import { useFocusEffect } from "@react-navigation/native";
import React, { useCallback, useEffect } from "react";
import { BackHandler, Platform, StyleSheet } from "react-native";
import {
  GestureHandlerRootView,
  TouchableOpacity,
} from "react-native-gesture-handler";
import { useBottomSheetBackHandler } from "../hooks/useBottomSheetBackHandler";
import { BottomSheet, Text } from "./common";
import BottomSheetPro from "./common/BottomSheetPro";
import Box from "./common/Box";

interface IamgePickerBottomSheetProps {
  closeBottomSheet: () => void;
  openPicker: any;
  sheetRef: any;
}

const IamgePickerBottomSheet = ({
  closeBottomSheet,
  openPicker,
  sheetRef,
}: IamgePickerBottomSheetProps) => {
  console.log("sheetRef: ", sheetRef);

  const { handleSheetPositionChange } = useBottomSheetBackHandler(sheetRef);

  useFocusEffect(
    useCallback(() => {
      return () => sheetRef.current?.close();
    }, [])
  );

  useEffect(() => {
    const backAction = () => {
      sheetRef.current?.close();
      return false;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, []);

  return (
    <BottomSheetPro
      onChange={handleSheetPositionChange}
      showHandle={false}
      ref={sheetRef}
    >
      <GestureHandlerRootView>
        <Box
          backgroundColor={"grey7"}
          borderTopEndRadius={"40"}
          borderTopLeftRadius={"40"}
          padding={"25"}
          height={200}
        >
          <Text
            lineHeight={30}
            numberOfLines={1}
            fontSize={26}
            color={"white"}
            fontWeight={"600"}
          >
            Select Option:
          </Text>
          <TouchableOpacity onPress={() => openPicker(true)}>
            <Box paddingVertical={"15"}>
              <Text
                lineHeight={20}
                numberOfLines={1}
                fontSize={20}
                color={"white"}
                fontWeight={"400"}
              >
                Camera
              </Text>
            </Box>
          </TouchableOpacity>
          <Box
            marginHorizontal={"0"}
            borderBottomColor={"white"}
            borderBottomWidth={0.5}
          />
          <TouchableOpacity onPress={() => openPicker(false)}>
            <Box paddingVertical={"15"}>
              <Text
                lineHeight={20}
                numberOfLines={1}
                fontSize={20}
                color={"white"}
                fontWeight={"400"}
              >
                Gallery
              </Text>
            </Box>
          </TouchableOpacity>
          <Box
            marginHorizontal={"0"}
            borderBottomColor={"white"}
            borderBottomWidth={0.5}
          />
        </Box>
      </GestureHandlerRootView>
    </BottomSheetPro>
  );
};

export default IamgePickerBottomSheet;

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
