import React from "react";
import { Platform, StyleSheet, TouchableOpacity } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { SvgXml } from "react-native-svg";
import Text from "./common/Text";

interface props {
  item: any;
  onPress: (screenName: any) => void;
}

const DashboardTile = ({ item, onPress }: props) => {
  const { label, icon } = item;
  return (
    <TouchableOpacity
      onPress={() => {
        onPress(item?.navigateScreen);
      }}
      style={styles.mainStyle}
    >
      <LinearGradient
        colors={["#1ABE73", "#00170D", "#000000"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1.5 }}
        locations={[0, 0.6, 0.7]}
        style={styles.gradientStyle}
      >
        <SvgXml
          height={Platform.OS === "android" ? 60 : 70}
          width={Platform.OS === "android" ? 70 : 70}
          xml={icon}
        />
        <Text
          lineHeight={40}
          numberOfLines={1}
          fontSize={35}
          color={"white"}
          fontWeight={"400"}
          alignSelf={"center"}
          marginTop={"20"}
        >
          {label}
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  mainStyle: {
    height: Platform.OS === "android" ? 250 : 300,
    width: Platform.OS === "android" ? 250 : 300,
    marginHorizontal: Platform.OS === "android" ? 20 : 25,
  },
  gradientStyle: {
    flex: 1,
    justifyContent: "center",
    borderRadius: 8,
    alignItems: "center",
  },
});

export default DashboardTile;
