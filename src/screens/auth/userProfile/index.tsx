import React from "react";
import { SafeAreaView, StatusBar, StyleSheet } from "react-native";
import { SvgXml } from "react-native-svg";
import { backArrow } from "../../../assets/svg";
import {
  connectDeviceIcon,
  homeIcon,
  profileIcon,
} from "../../../assets/svg/index";
import Box from "../../../components/common/Box";
import CTA from "../../../components/common/CTA";
import CTAWithDynamicIcon from "../../../components/common/CTAWithDynamicIcon";
import Text from "../../../components/common/Text";
import WelcomeTile from "../../../components/welcomeTile";
import { SCREENS } from "../../../utils/Constants";

const UserProfile = ({ navigation }: any) => {
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
            lineHeight={80.49}
            numberOfLines={2}
            fontSize={70}
            color={"white"}
            fontWeight={"400"}
            paddingHorizontal={"20"}
            marginTop={"20"}
          >
            Welcome to LifeKitchen
          </Text>
          <Text
            lineHeight={27.6}
            numberOfLines={2}
            fontSize={24}
            color={"white"}
            fontWeight={"400"}
            paddingHorizontal={"20"}
            marginVertical={"10"}
          >
            Let’s get you set up and ready to use your LifeKitchen. This will
            take roughly 15 minutes.
          </Text>
        </Box>
        <Box flex={0.75} paddingHorizontal={"20"} justifyContent={"center"}>
          <WelcomeTile
            icon={profileIcon}
            label={"Create individual and family profiles"}
          />
          <Box
            borderLeftWidth={3}
            borderColor={"grey3"}
            height={76}
            justifyContent={"center"}
            marginLeft={"60"}
          />
          <WelcomeTile
            icon={connectDeviceIcon}
            label={"Connect your LifeKitchen devices to Chef"}
          />
          <Box
            borderLeftWidth={3}
            borderColor={"grey3"}
            height={76}
            justifyContent={"center"}
            marginLeft={"60"}
          />
          <WelcomeTile
            icon={homeIcon}
            label={"Connect your LifeKitchen to your SmartHome optional"}
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
          onPress={() => navigation.navigate(SCREENS.UserProfileFlow)}
        >
          Get Started
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

export default UserProfile;
