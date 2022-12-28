import React, { useState } from "react";
import { FlatList, Platform, StyleSheet, TouchableOpacity } from "react-native";
import { SvgXml } from "react-native-svg";
import { backArrow, plusIcon } from "../assets/svg";
import { ProfileCompleteData, SCREENS } from "../utils/Constants";
import Box from "./common/Box";
import CTA from "./common/CTA";
import CTAWithDynamicIcon from "./common/CTAWithDynamicIcon";
import LinearGradient from "react-native-linear-gradient";
import Text from "./common/Text";

interface InputTextProps {
  navigation?: any;
}

const ProfileCompletion: React.FC<InputTextProps> = (props) => {
  const { navigation } = props;

  const NameTile = () => {
    return (
      <TouchableOpacity style={styles.nameStyle}>
        <LinearGradient
          colors={["#1ABE73", "#00170D"]}
          style={styles.nameGradient}
        >
          <Text
            lineHeight={34}
            numberOfLines={1}
            fontSize={30}
            color={"white"}
            fontWeight={"400"}
            alignSelf={"center"}
          >
            Kevin Claudio
          </Text>
        </LinearGradient>
      </TouchableOpacity>
    );
  };

  const AddTile = () => {
    return (
      <TouchableOpacity style={styles.addStyleTile}>
        <SvgXml height={64} width={64} xml={plusIcon} />
      </TouchableOpacity>
    );
  };

  const TextTile = () => {
    return (
      <Box
        height={218}
        width={218}
        justifyContent={"center"}
        alignItems={"center"}
        marginRight={"10"}
      >
        <Text
          lineHeight={23}
          numberOfLines={1}
          fontSize={20}
          color={"brandGreen"}
          fontWeight={"400"}
          alignSelf={"center"}
          textDecorationLine={"underline"}
        >
          Add Family Members
        </Text>
      </Box>
    );
  };

  return (
    <Box marginTop={"20"} paddingHorizontal={"20"} flex={1}>
      <Box marginTop={"30"}>
        <CTAWithDynamicIcon
          borderRadius={"cta"}
          justifyContent={"center"}
          alignItems={"center"}
          backgroundColor={"white"}
          variant="outline"
          width={50}
          height={50}
          withIcon
          onlyIcon
          icon={() => <SvgXml height={17} width={17} xml={backArrow} />}
          onPress={() => navigation.goBack()}
        />
        <Text
          lineHeight={80.49}
          numberOfLines={2}
          fontSize={60}
          color={"white"}
          fontWeight={"400"}
          paddingHorizontal={"20"}
          marginTop={"10"}
        >
          Your profile is all set up, Kevin!
        </Text>
        <Text
          lineHeight={27.6}
          numberOfLines={2}
          fontSize={20}
          color={"white"}
          fontWeight={"400"}
          paddingHorizontal={"20"}
        >
          You can add other family member profiles now or add them later.
        </Text>
      </Box>
      <Box flex={1} paddingHorizontal={"20"} marginVertical={"30"}>
        <FlatList
          numColumns={3}
          data={ProfileCompleteData}
          renderItem={({ item }: any) => (
            <>
              {item?.status === "complete" ? (
                <NameTile />
              ) : item?.status === "add" ? (
                <AddTile />
              ) : (
                <TextTile />
              )}
            </>
          )}
          keyExtractor={(item) => item.id.toString()}
          ItemSeparatorComponent={({ item }: any) => (
            <Box paddingVertical={Platform.OS === "android" ? "10" : "20"} />
          )}
        />
      </Box>
      <CTA
        height={70}
        borderRadius={"8"}
        fontWeight={"400"}
        fontSize={20}
        variant="primary"
        color={"white"}
        lineHeight={23}
        marginBottom={"35"}
        onPress={() => navigation.navigate(SCREENS.LoginScreen1)}
      >
        Continue to device set up
      </CTA>
    </Box>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 80,
    marginTop: 24,
    backgroundColor: "#FFFFFF",
    borderRadius: 15,
    padding: 10,
    fontSize: 14,
    fontWeight: "700",
  },
  nameStyle: {
    height: 218,
    width: 218,
    marginRight: 10,
  },
  nameGradient: { flex: 1, justifyContent: "center", borderRadius: 8 },
  addStyleTile: {
    height: 218,
    width: 218,
    backgroundColor: "#ffffff",
    justifyContent: "center",
    borderRadius: 8,
    alignItems: "center",
    marginRight: 10,
  },
});

export default ProfileCompletion;
