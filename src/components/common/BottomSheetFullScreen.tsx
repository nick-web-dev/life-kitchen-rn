import RNBottomSheet, { BottomSheetBackdrop } from "@gorhom/bottom-sheet";
import { Portal } from "@gorhom/portal";
import React, { forwardRef, useMemo } from "react";
import { StyleSheet } from "react-native";

interface BottomSheetProps {
  ref?: React.Ref<RNBottomSheet>;
}

const BottomSheetFullScreen: React.FC<BottomSheetProps> = forwardRef(
  function BottomSheet({ children }, ref) {
    const snapPoints = useMemo(() => ["1%", "91%"], []);

    return (
      <Portal>
        <RNBottomSheet
          ref={ref}
          snapPoints={snapPoints}
          backdropComponent={BottomSheetBackdrop}
          enablePanDownToClose={true}
          handleStyle={styles.handle}
        >
          {children}
        </RNBottomSheet>
      </Portal>
    );
  }
);

const styles = StyleSheet.create({
  handle: {
    display: "none",
  },
});

export default BottomSheetFullScreen;
