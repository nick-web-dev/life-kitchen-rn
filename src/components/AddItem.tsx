import React from "react";
import { StyleSheet } from "react-native";
import { BottomSheet } from "./common";
import Box from "./common/Box";

interface AddItemBottomSheetProps {
  closeBottomSheet: () => void;
  sheetRef: any;
}

const AddItem: React.FC<AddItemBottomSheetProps> = (props) => {
  const { sheetRef, closeBottomSheet } = props;

  return (
    <BottomSheet ref={sheetRef}>
      <Box></Box>
    </BottomSheet>
  );
};

const styles = StyleSheet.create({});

export default AddItem;
