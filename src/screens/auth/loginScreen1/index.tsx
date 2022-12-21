import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Dimensions,
  Platform,
} from "react-native";
import LoginSvg from "../../../assets/svg/loginSvg.svg";
import Box from "../../../components/common/Box";
import CTA from "../../../components/common/CTA";
import CTAWithDynamicIcon from "../../../components/common/CTAWithDynamicIcon";
import Text from "../../../components/common/Text";
import FacebookIcon from "../../../assets/svg/facebookIcon.svg";
import GoogleIcon from "../../../assets/svg/googleIcon.svg";
import { SvgXml } from "react-native-svg";
import { iPhoneIcon } from "../../../assets/svg";
import { SCREENS } from "../../../utils/Constants";
import CTAText from "../../../components/common/CTAText";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const LoginScreen1 = ({ navigation }: any) => {
  return (
    <SafeAreaView style={styles.mainView}>
      <StatusBar translucent backgroundColor="transparent" />
      <Box
        flex={0.6}
        alignItems={"center"}
        backgroundColor={"brandGreen"}
        justifyContent={"center"}
      >
        <LoginSvg width={windowWidth} height={windowHeight} />
      </Box>
      <Box padding={"40"} flex={0.45} backgroundColor={"black"}>
        <Text
          lineHeight={46}
          fontSize={40}
          color={"brandGreen"}
          fontWeight={"700"}
          marginBottom={"10"}
        >
          LifeKitchen
        </Text>
        <Text
          lineHeight={80}
          numberOfLines={2}
          fontSize={Platform.OS === "android" ? 65 : 70}
          color={"white"}
          fontWeight={"400"}
          marginBottom={"30"}
        >
          The smarter way to live a healthier life
        </Text>
        <Box flexDirection={"row"}>
          <CTA
            width={249}
            height={70}
            borderRadius={"8"}
            fontWeight={"400"}
            fontSize={20}
            variant="primary"
            color={"white"}
            lineHeight={23}
            onPress={() => navigation.navigate(SCREENS.LoginScreen2)}
          >
            Login with LifeKitchen
          </CTA>
          <Box paddingHorizontal={"8"} />
          <CTAWithDynamicIcon
            borderRadius={"8"}
            justifyContent={"center"}
            alignItems={"center"}
            borderColor={"grey1"}
            backgroundColor={"black"}
            variant="outline"
            width={70}
            height={70}
            withIcon
            onlyIcon
            icon={() => <GoogleIcon height={39} width={39} />}
            onPress={() => {}}
          />
          <Box paddingHorizontal={"8"} />
          <CTAWithDynamicIcon
            borderRadius={"8"}
            justifyContent={"center"}
            alignItems={"center"}
            borderColor={"grey1"}
            backgroundColor={"black"}
            variant="outline"
            width={70}
            height={70}
            withIcon
            onlyIcon
            icon={() => <FacebookIcon height={39} width={39} />}
            onPress={() => {}}
          />
          <Box paddingHorizontal={"8"} />
          <CTAWithDynamicIcon
            borderRadius={"8"}
            justifyContent={"center"}
            alignItems={"center"}
            borderColor={"grey1"}
            backgroundColor={"black"}
            variant="outline"
            width={70}
            height={70}
            withIcon
            onlyIcon
            icon={() => <SvgXml width={39} height={39} xml={iPhoneIcon} />}
            onPress={() => {}}
          />
        </Box>
        <Box flexDirection={"row"} marginVertical={"20"}>
          <Text
            lineHeight={23}
            numberOfLines={1}
            fontSize={20}
            color={"white"}
            fontWeight={"400"}
          >
            Don’t have an account?
          </Text>
          <CTAText
            lineHeight={23}
            numberOfLines={1}
            fontSize={20}
            color={"brandGreen"}
            fontWeight={"400"}
            label={` Sign up`}
            onPress={() => navigation.navigate(SCREENS.RegisterScreen)}
          />
        </Box>
      </Box>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainView: { flex: 1, backgroundColor: "#000000" },
});

export default LoginScreen1;
