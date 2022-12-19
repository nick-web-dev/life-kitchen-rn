import React from "react";
import { SafeAreaView, StatusBar, StyleSheet } from "react-native";
import { SvgXml } from "react-native-svg";
import { backArrow } from "../../../assets/svg";
import Box from "../../../components/common/Box";
import CTA from "../../../components/common/CTA";
import CTAWithDynamicIcon from "../../../components/common/CTAWithDynamicIcon";
import Text from "../../../components/common/Text";
import SliderComponent from "../../../components/Slider";
import { SCREENS } from "../../../utils/Constants";

const UserProfileFLow = ({ navigation }: any) => {
  return (
    <SafeAreaView style={styles.mainView}>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
      <Box marginTop={"20"} paddingHorizontal={"20"} flex={1}>
        <Box flex={0.2}>
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
            lineHeight={27.6}
            numberOfLines={2}
            fontSize={24}
            color={"white"}
            fontWeight={"400"}
            paddingHorizontal={"20"}
            marginTop={"30"}
          >
            First, let’s get to know you or your family’s needs
          </Text>
          <Text
            lineHeight={80.49}
            numberOfLines={2}
            fontSize={70}
            color={"white"}
            fontWeight={"400"}
            paddingHorizontal={"20"}
            marginTop={"10"}
          >
            How big is your family?
          </Text>
        </Box>
        <Box flex={0.75} paddingHorizontal={"20"} justifyContent={"center"}>
          <Text
            lineHeight={149.49}
            numberOfLines={2}
            fontSize={130}
            color={"white"}
            fontWeight={"400"}
            paddingHorizontal={"20"}
            alignSelf={"center"}
          >
            4
          </Text>
          <Text
            lineHeight={34.5}
            numberOfLines={2}
            fontSize={30}
            color={"white"}
            fontWeight={"400"}
            paddingHorizontal={"20"}
            alignSelf={"center"}
            marginBottom={"30"}
          >
            Family Members
          </Text>
          <SliderComponent />
        </Box>
        <Box marginBottom={"30"}>
          <Text
            lineHeight={27.6}
            numberOfLines={2}
            fontSize={24}
            color={"white"}
            fontWeight={"400"}
            paddingHorizontal={"20"}
          >
            You can set up profiles for each family member to create a truly
            personalised experienced for each family member.
          </Text>
        </Box>
        <CTA
          height={70}
          borderRadius={"8"}
          fontWeight={"400"}
          fontSize={20}
          variant="primary"
          color={"white"}
          lineHeight={23}
          onPress={() => navigation.navigate(SCREENS.LoginScreen2)}
        >
          Next
        </CTA>
      </Box>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainView: { flex: 1, backgroundColor: "#000000", justifyContent: "center" },
  Scroll: {
    flex: 1,
    height: "100%",
  },
  container: {
    flex: 1,
    justifyContent: "center",
  },
});

export default UserProfileFLow;
