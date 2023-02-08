import RNBottomSheet, {
  BottomSheetFlatList as RNBottomSheetFlatList,
} from "@gorhom/bottom-sheet";
import { Portal } from "@gorhom/portal";
import React, { PropsWithChildren, useMemo } from "react";
import { FlatListProps } from "react-native";
import { BottomSheetViewProps } from "@gorhom/bottom-sheet/lib/typescript/components/bottomSheetView/types";
import { BottomSheetBackdrop } from "@gorhom/bottom-sheet";

export const COMMON_BOTTOM_SHEET_PROPS = {
  backdropComponent: BottomSheetBackdrop,
  enablePanDownToClose: true,
  index: -1,
} as Omit<BottomSheetViewProps, "children">;

interface BottomSheetFlatListProps<DataType> extends FlatListProps<DataType> {
  onChange?: (index: number) => void;
  flatListRef: React.RefObject<RNBottomSheet>;
}

const BottomSheetFlatList = <DataType,>({
  onChange = () => {},
  flatListRef,
  ...rest
}: PropsWithChildren<BottomSheetFlatListProps<DataType>>) => {
  const snapPoints = useMemo(() => ["1%", "90%"], []);

  return (
    <Portal>
      <RNBottomSheet
        ref={flatListRef}
        snapPoints={snapPoints}
        onChange={onChange}
        index={-1}
        {...COMMON_BOTTOM_SHEET_PROPS}
      >
        <RNBottomSheetFlatList<DataType> {...rest} />
      </RNBottomSheet>
    </Portal>
  );
};

export default BottomSheetFlatList;
