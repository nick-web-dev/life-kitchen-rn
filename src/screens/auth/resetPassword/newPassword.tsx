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

let initialValues: ResetEmail = {
  email: "",
};

const NewPassword = ({ navigation }: any) => {
  let refValues = AppConstData.registerRef.map(() => useRef<any>());

  const handleSubmit = (data: any) => {
    navigation.navigate(SCREENS.UserProfile);
    console.log("password data: ", data);
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

        <Box flex={1} paddingHorizontal={"20"}>
          <ScrollView style={styles.Scroll} keyboardShouldPersistTaps="always">
            <Box marginVertical={"60"}>
              <Text
                lineHeight={57}
                numberOfLines={1}
                fontSize={60}
                color={"white"}
                fontWeight={"400"}
                alignSelf={"center"}
              >
                Create new password
              </Text>
            </Box>
            <KeyboardAvoidingView
              behavior={Platform.OS === "ios" ? "padding" : null}
              style={styles.container}
              keyboardVerticalOffset={Platform.select({
                ios: 0,
                android: 500,
              })}
            >
              <Form
                initialValues={initialValues}
                onSubmit={handleSubmit}
                // validationSchema={AppValidation.validationSchemaRegister()}
              >
                <FormField
                  ref={refValues[1]}
                  placeHolder={"New Password"}
                  returnKeyType="done"
                  backgroundColor={"black"}
                  color={"white"}
                  borderColor={"grey2"}
                  borderWidth={1}
                  height={70}
                  placeholderTextColor={"#777777"}
                  onChangeText={() => {}}
                  marginBottom={"20"}
                  name={"newPassword"}
                  secureTextEntry={true}
                />
                <FormField
                  ref={refValues[1]}
                  placeHolder={"Confirm Password"}
                  returnKeyType="done"
                  backgroundColor={"black"}
                  color={"white"}
                  borderColor={"grey2"}
                  borderWidth={1}
                  height={70}
                  placeholderTextColor={"#777777"}
                  onChangeText={() => {}}
                  marginBottom={"20"}
                  name={"confirmPassword"}
                  secureTextEntry={true}
                />
                <Box marginVertical={"5"} />
                <FormButton
                  title="Change password"
                  color={"white"}
                  loading={false}
                  disabled={false}
                />
              </Form>
            </KeyboardAvoidingView>
          </ScrollView>
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

export default NewPassword;
