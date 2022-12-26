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
import ProfileAvatar from "../../../assets/svg/profileAvatar.svg";
import { AppValidation } from "../../../utils/validation";

let initialValues: ResetEmail = {
  email: "",
};

const EmailSent = ({ navigation }: any) => {
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
        <Box flex={1} marginVertical={"30"}>
          <Box alignItems={"center"} marginVertical={"30"}>
            <ProfileAvatar width={155} height={155} />
          </Box>
          <Box>
            <Text
              lineHeight={57}
              numberOfLines={1}
              fontSize={60}
              color={"white"}
              fontWeight={"400"}
              alignSelf={"center"}
              marginVertical={"30"}
            >
              Recover Password
            </Text>
            <Text
              lineHeight={23}
              numberOfLines={1}
              fontSize={24}
              color={"white"}
              fontWeight={"400"}
              alignSelf={"center"}
            >
              A recovery email has been sent to
            </Text>
            <Text
              onPress={() => navigation.navigate(SCREENS.ResetScreen3)}
              lineHeight={23}
              numberOfLines={1}
              fontSize={24}
              color={"brandGreen"}
              fontWeight={"400"}
              alignSelf={"center"}
            >
              nvt.isst.nute@gmail.com
            </Text>
            <Text
              lineHeight={23}
              numberOfLines={1}
              fontSize={24}
              color={"white"}
              fontWeight={"400"}
              alignSelf={"center"}
              marginVertical={"30"}
            >
              You will receive an email with reset instructions.
            </Text>
          </Box>
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

export default EmailSent;
