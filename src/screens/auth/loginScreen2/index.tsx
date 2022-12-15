import React from "react";
import { SafeAreaView, StatusBar, StyleSheet } from "react-native";
import { SvgXml } from "react-native-svg";
import Box from "../../../components/common/Box";
import CTAWithDynamicIcon from "../../../components/common/CTAWithDynamicIcon";
import { backArrow } from "../../../assets/svg";
import CTA from "../../../components/common/CTA";
import Text from "../../../components/common/Text";
import { SCREENS } from "../../../utils/Constants";

const LoginScreen2 = ({ navigation }: any) => {
  console.log("navigation: ", navigation);
  return (
    <SafeAreaView style={styles.mainView}>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
      <Box paddingVertical={"40"} paddingHorizontal={"20"} flex={1}>
        <CTAWithDynamicIcon
          borderRadius={"35"}
          justifyContent={"center"}
          alignItems={"center"}
          backgroundColor={"grey2"}
          variant="outline"
          width={50}
          height={50}
          withIcon
          onlyIcon
          icon={() => <SvgXml height={17} width={17} xml={backArrow} />}
          onPress={() => navigation.goBack()}
        />
        <Box flex={1} paddingHorizontal={"20"} justifyContent={"center"}>
          <Text
            lineHeight={57}
            numberOfLines={2}
            fontSize={50}
            color={"white"}
            fontWeight={"400"}
            marginBottom={"30"}
          >
            Log In
          </Text>
          <CTA
            height={70}
            borderRadius={"8"}
            fontWeight={"400"}
            fontSize={20}
            variant="primary"
            color={"white"}
            lineHeight={23}
            onPress={() => navigation.navigate(SCREENS.LoginScreen1)}
          >
            Log in
          </CTA>
        </Box>
      </Box>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainView: { flex: 1, backgroundColor: "#000000", justifyContent: "center" },
});

export default LoginScreen2;
