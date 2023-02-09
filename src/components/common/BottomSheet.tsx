import RNBottomSheet, {
  BottomSheetView,
  useBottomSheetDynamicSnapPoints,
} from "@gorhom/bottom-sheet";
import { Portal } from "@gorhom/portal";
import React, {
  forwardRef,
  PropsWithChildren,
  useImperativeHandle,
  useMemo,
  useRef,
} from "react";
import { Keyboard, StyleSheet } from "react-native";
import { BottomSheetViewProps } from "@gorhom/bottom-sheet/lib/typescript/components/bottomSheetView/types";
import { BottomSheetBackdrop } from "@gorhom/bottom-sheet";

export const COMMON_BOTTOM_SHEET_PROPS = {
  backdropComponent: BottomSheetBackdrop,
  enablePanDownToClose: true,
  index: -1,
} as Omit<BottomSheetViewProps, "children">;

interface BottomSheetProps {
  ref?: React.Ref<RNBottomSheet>;
  /**
   * Pass value using useMemo
   * @example
   * const snapPoints = useMemo(() => ['1%', '50%'], [])
   */
  snapPoints?: string[];
  almostFull?: boolean;
  showHandle?: boolean;
  index?: number;
  onChange?: (index: number) => void;
}

const BottomSheet: React.FC<PropsWithChildren<BottomSheetProps>> = forwardRef(
  function BottomSheet(
    {
      index = -1,
      children,
      showHandle,
      snapPoints = ["1%", "CONTENT_HEIGHT"],
      onChange = () => {},
      almostFull,
    },
    ref
  ) {
    const bottomSheetRef = useRef<RNBottomSheet>(null);
    const {
      animatedHandleHeight,
      animatedSnapPoints,
      animatedContentHeight,
      handleContentLayout,
    } = useBottomSheetDynamicSnapPoints(snapPoints);

    const almostFullPoints = useMemo(() => ["1%", "92%"], []);

    useImperativeHandle(
      ref,
      () => ({
        expand: () => {
          Keyboard.dismiss();
          bottomSheetRef.current?.expand();
        },
        close: () => {
          Keyboard.dismiss();
          setTimeout(() => {
            bottomSheetRef.current?.close();
          }, 250);
        },
        collapse: () => {
          bottomSheetRef.current?.collapse();
        },
        forceClose: () => {
          bottomSheetRef.current?.forceClose();
        },
        snapToIndex: (args) => {
          bottomSheetRef.current?.snapToIndex(args);
        },
        snapToPosition: (args) => {
          bottomSheetRef.current?.snapToPosition(args);
        },
      }),
      [bottomSheetRef]
    );

    return (
      <Portal>
        <RNBottomSheet
          ref={bottomSheetRef}
          snapPoints={almostFull ? almostFullPoints : almostFullPoints}
          {...(showHandle
            ? {
                handleIndicatorStyle: {
                  backgroundColor: "white",
                  width: 68,
                  height: 6,
                  paddingVertical: 5,
                },
              }
            : { handleStyle: styles.handle })}
          onChange={onChange}
          index={0}
          style={{ backgroundColor: "#262626", borderRadius: 40 }}
          backgroundComponent={null}
        >
          <BottomSheetView
            style={styles.bottomSheetViewContainer}
            onLayout={handleContentLayout}
          >
            {children}
          </BottomSheetView>
        </RNBottomSheet>
      </Portal>
    );
  }
);

const styles = StyleSheet.create({
  handle: {
    display: "none",
  },
  bottomSheetViewContainer: {
    flex: 1,
  },
});

export default BottomSheet;
