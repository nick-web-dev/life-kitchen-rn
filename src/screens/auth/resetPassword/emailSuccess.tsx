import React, { useRef } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
} from "react-native";
import { SvgXml } from "react-native-svg";
import { backArrow } from "../../../assets/svg";
import Box from "../../../components/common/Box";
import CTAWithDynamicIcon from "../../../components/common/CTAWithDynamicIcon";
import Form from "../../../components/common/Form";
import FormButton from "../../../components/common/FormButton";
import { FormField } from "../../../components/common/FormField";
import Text from "../../../components/common/Text";
import { ResetEmail } from "../../../context/types";
import { AppConstData } from "../../../utils/app-data";
import { SCREENS } from "../../../utils/Constants";
import { AppValidation } from "../../../utils/validation";
import ProfileAvatar from "../../../assets/svg/profileAvatar.svg";
import CTA from "../../../components/common/CTA";

let initialValues: ResetEmail = {
  email: "",
};

const EmailSuccess = ({ navigation }: any) => {
  let refValues = AppConstData.registerRef.map(() => useRef<any>());

  const handleSubmit = (data: any) => {
    navigation.navigate(SCREENS.UserProfile);
    console.log("email data: ", data);
  };

  return (
    <SafeAreaView style={styles.mainView}>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
      <Box paddingVertical={"40"} paddingHorizontal={"20"} flex={1}>
        <Box>
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
        </Box>
        <Box flex={1} marginVertical={"30"} paddingHorizontal={"30"}>
          <Box alignItems={"center"} marginVertical={"30"}>
            <ProfileAvatar width={155} height={155} />
          </Box>
          <Box>
            <Text
              lineHeight={57}
              numberOfLines={2}
              fontSize={60}
              color={"white"}
              fontWeight={"400"}
              alignSelf={"center"}
              marginVertical={"30"}
              textAlign={"center"}
            >
              Your password has been reset successfully
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
            Log in
          </CTA>
        </Box>
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

export default EmailSuccess;
